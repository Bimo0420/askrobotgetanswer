"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TextureOverlay } from "@/components/ui/texture-overlay";
import { FloatingPanelRoot } from "@/components/ui/floating-panel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share, Edit } from "lucide-react";

interface DocumentLayoutProps {
  children: React.ReactNode;
  documentTitle?: string;
  onBack?: () => void;
}

export function DocumentLayout({ children, documentTitle, onBack }: DocumentLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Texture overlay */}
      <TextureOverlay texture="dots" opacity={0.1} />
      
      {/* Header with toolbar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад
          </Button>
          <h1 className="text-xl font-semibold truncate">{documentTitle || "Документ"}</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Редактировать
          </Button>
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            Поделиться
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Скачать
          </Button>
        </div>
      </div>

      {/* Main content with tracing beam */}
      <div className="relative">
        <TracingBeam className="px-6">
          <ScrollArea className="h-[calc(100vh-80px)]">
            <div className="max-w-4xl mx-auto py-8">
              {children}
            </div>
          </ScrollArea>
        </TracingBeam>
      </div>

      {/* Floating panel for additional tools */}
      <FloatingPanelRoot className="fixed bottom-6 right-6">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
          <Edit className="h-6 w-6" />
        </div>
      </FloatingPanelRoot>
    </div>
  );
}
