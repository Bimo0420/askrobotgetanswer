"use client";

import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dock } from "@/components/ui/dock";
import { Spotlight } from "@/components/ui/spotlight";
import { ThemeToggle } from "@/components/theme-toggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-muted/30">
        {/* Spotlight effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar className="w-48 sm:w-64 border-r">
            <div className="p-3 sm:p-4">
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Документы</h2>
              <NavigationMenu orientation="vertical" className="w-full">
                <NavigationMenuList className="flex flex-col space-y-1 sm:space-y-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/dashboard" className="block px-2 sm:px-3 py-2 rounded-md hover:bg-accent text-sm">
                      Панель управления
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/documents" className="block px-2 sm:px-3 py-2 rounded-md hover:bg-accent text-sm">
                      Все документы
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </Sidebar>

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="border-b px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <h1 className="text-lg sm:text-2xl font-bold truncate">Менеджер Документов</h1>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <ThemeToggle />
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Пользователь" />
                  <AvatarFallback className="text-xs sm:text-sm">П</AvatarFallback>
                </Avatar>
              </div>
            </header>

            {/* Page content */}
            <main className="flex-1 p-3 sm:p-6 overflow-auto">
              {children}
            </main>

            {/* Dock - commented out as it requires children */}
            {/* <Dock className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
            </Dock> */}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
