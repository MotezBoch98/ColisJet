// /app/dashboard/layout.tsx
import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-1 p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
