import TopNav from '@/app/ui/dashboard/topnav';

export const experimental_ppr = true
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-none w-full">
        <TopNav />
      </div>
      <div className="flex-grow mt-1 p-6 md:overflow-y-auto md:p-12 bg-gray-50">{children}</div>
    </div>
  );
}