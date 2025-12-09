"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { DocumentsTable } from "@/components/dashboard/documents-table";
import { mockDocuments } from "@/lib/constants/documents";
import { Document } from "@/types/document";

export default function DashboardPage() {
  const [documents] = useState<Document[]>(mockDocuments);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(mockDocuments);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredDocuments(documents);
      return;
    }

    const filtered = documents.filter((doc) =>
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.content.toLowerCase().includes(query.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredDocuments(filtered);
  };

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">Документы</h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Управляйте и организуйте ваши документы
          </p>
        </div>
        
        <DocumentsTable 
          documents={filteredDocuments} 
          onSearch={handleSearch}
        />
      </div>
    </DashboardLayout>
  );
}


