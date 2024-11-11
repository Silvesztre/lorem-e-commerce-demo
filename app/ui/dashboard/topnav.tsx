import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function TopNav() {
  return (
    <div className="mx-auto shadow-md">
      <div className="flex justify-between items-center h-16">

        {/*  Logo  */}
        <div className="flex-shrink-0 ml-5">
          <Link 
            href="/" 
            className="text-2xl font-semibold text-gray-800">
            Lorem
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        <form action={async () => {
          'use server';
          await signOut();
        }}>
          <button className="flex h-[64px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-rose-50 hover:text-red-600 md:flex-none md:justify-start md:py-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>

      </div>
    </div>
  );
}
