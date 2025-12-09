"use client";

import { useState } from "react";
import { Document } from "@/types/document";
// Table components not used in current implementation
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye, Download, Edit } from "lucide-react";
import { useRouter } from "next/navigation";

interface DocumentsTableProps {
  documents: Document[];
  onSearch?: (query: string) => void;
}

export function DocumentsTable({ documents, onSearch }: DocumentsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
  };

  const getStatusVariant = (status: Document["status"]) => {
    switch (status) {
      case "published":
        return "default";
      case "draft":
        return "secondary";
      case "archived":
        return "outline";
      default:
        return "outline";
    }
  };

  const getStatusClassName = (status: Document["status"]) => {
    switch (status) {
      case "published":
        return "bg-green-500/10 text-green-700 border-green-500/20 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30";
      case "draft":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30";
      case "archived":
        return "bg-gray-500/10 text-gray-700 border-gray-500/20 dark:bg-gray-500/20 dark:text-gray-400 dark:border-gray-500/30";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20 dark:bg-gray-500/20 dark:text-gray-400 dark:border-gray-500/30";
    }
  };

  const getStatusText = (status: Document["status"]) => {
    switch (status) {
      case "published":
        return "Опубликован";
      case "draft":
        return "Черновик";
      case "archived":
        return "Архив";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Байт";
    const k = 1024;
    const sizes = ["Байт", "КБ", "МБ", "ГБ"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
        <input
          type="text"
          placeholder="Поиск документов..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm min-w-0"
        />
        <Button variant="outline" size="sm" className="xs:w-auto h-10">
          <span className="hidden xs:inline">Поиск</span>
          <span className="xs:hidden">🔍</span>
        </Button>
      </div>

      {/* Documents Grid */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {documents.map((document) => (
          <Card key={document.id} className="document-card p-3 sm:p-4 hover:shadow-md transition-shadow duration-200">
            <div className="document-card-content space-y-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm sm:text-base line-clamp-2 flex-1 min-w-0">
                    {document.title}
                  </h3>
                  <Badge variant="outline" className={`text-xs shrink-0 whitespace-nowrap ${getStatusClassName(document.status)}`}>
                    {getStatusText(document.status)}
                  </Badge>
                </div>
              
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {document.content.substring(0, 60)}...
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {document.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
                {document.tags.length > 2 && (
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    +{document.tags.length - 2}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="truncate">{formatDate(document.updatedAt)}</span>
                <span className="shrink-0 ml-2">{formatFileSize(document.size)}</span>
              </div>
              
              <div className="flex gap-1 pt-2 mt-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/documents/${document.id}`)}
                        className="flex-1 text-xs sm:text-sm h-8 sm:h-9 px-1 sm:px-2 xl:px-3"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden xl-inline ml-1">Просмотр</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Просмотр документа</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm h-8 sm:h-9 px-1 sm:px-2 xl:px-3">
                        <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden xl-inline ml-1">Редактировать</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Редактировать документ</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm h-8 sm:h-9 px-1 sm:px-2 xl:px-3">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden xl-inline ml-1">Скачать</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Скачать документ</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {documents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Документы не найдены</p>
        </div>
      )}
    </div>
  );
}
