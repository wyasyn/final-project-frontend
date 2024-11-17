import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ModeToggle } from "@/components/ModeToggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="px-3 md:px-8 w-full">
        <div className="flex items-center justify-between gap-10 w-full">
          <SidebarTrigger />
          <ModeToggle />
        </div>

        {children}
      </main>
    </SidebarProvider>
  );
}
