"use client";

import { Document } from "@/types/document";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Tag, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

interface DocumentViewerProps {
  document: Document;
  onBack?: () => void;
}

export function DocumentViewer({ document, onBack }: DocumentViewerProps) {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Байт";
    const k = 1024;
    const sizes = ["Байт", "КБ", "МБ", "ГБ"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getStatusColor = (status: Document["status"]) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4 sm:mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink 
              href="/dashboard"
              onClick={() => router.push("/dashboard")}
              className="text-sm"
            >
              Панель управления
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm">Документ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Document Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{document.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{document.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Обновлен {formatDate(document.updatedAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{formatFileSize(document.size)}</span>
              </div>
            </div>
          </div>
          <Badge className={`${getStatusColor(document.status)} text-xs shrink-0`}>
            {getStatusText(document.status)}
          </Badge>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {document.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center space-x-1 text-xs">
              <Tag className="h-2 w-2 sm:h-3 sm:w-3" />
              <span>{tag}</span>
            </Badge>
          ))}
        </div>
      </div>

      {/* Document Content */}
      <div className="prose prose-sm sm:prose-lg max-w-none">
        <div className="whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed">
          {document.content}
        </div>
      </div>

      {/* Document Actions */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Button variant="outline" onClick={onBack} className="w-full sm:w-auto">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            <span className="text-sm">Назад к панели управления</span>
          </Button>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none text-sm">
              Редактировать документ
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none text-sm">
              Скачать
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none text-sm">
              Поделиться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
