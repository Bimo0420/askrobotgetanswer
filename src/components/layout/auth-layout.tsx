"use client";

import { BackgroundLines } from "@/components/ui/background-lines";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <BackgroundLines className="min-h-screen">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </BackgroundLines>
  );
}
