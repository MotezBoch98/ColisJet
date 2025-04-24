// /app/dashboard/layout.tsx
import SideNav from "@/app/ui/dashboard/sidenav"

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row md:overflow-hidden">
        {/* Sidebar */}
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        {/* Main Content Area */}
        <div className="flex-1 p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
  );
}
