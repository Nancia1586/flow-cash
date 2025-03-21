import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen">
        <div className="flex items-center justify-between w-min-screen w-full h-18 border-b px-3">
          <SidebarTrigger />
          <div className="flex items-center gap-1">
            <div className="bg-custom-blue-gray text-white rounded-full px-3 py-1 text-lg">
              R
            </div>
            <span className="text-primary">Rakoto</span>
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
