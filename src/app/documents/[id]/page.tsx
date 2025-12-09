"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { DocumentLayout } from "@/components/layout/document-layout";
import { DocumentViewer } from "@/components/document/document-viewer";
import { mockDocuments } from "@/lib/constants/documents";
import { Document } from "@/types/document";

export default function DocumentPage() {
  const params = useParams();
  const router = useRouter();
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docId = params.id as string;
    const foundDoc = mockDocuments.find(doc => doc.id === docId);
    
    if (foundDoc) {
      setDocument(foundDoc);
    } else {
      // Redirect to dashboard if document not found
      router.push("/dashboard");
    }
    setLoading(false);
  }, [params.id, router]);

  const handleBack = () => {
    router.push("/dashboard");
  };

    if (loading) {
    return (
      <DocumentLayout onBack={handleBack}>
        <div className="flex items-center justify-center h-64">
          <div className="text-muted-foreground">Загрузка документа...</div>
        </div>
      </DocumentLayout>
    );
  }

  if (!document) {
    return (
      <DocumentLayout onBack={handleBack}>
        <div className="flex items-center justify-center h-64">
          <div className="text-muted-foreground">Документ не найден</div>
        </div>
      </DocumentLayout>
    );
  }

  return (
    <DocumentLayout documentTitle={document.title} onBack={handleBack}>
      <DocumentViewer document={document} onBack={handleBack} />
    </DocumentLayout>
  );
}


