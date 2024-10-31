import SideNav from '@/app/ui/dashboard/topnav';

export const experimental_ppr = true
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
<nav className="bg-white shadow-md">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between items-center h-16 ">
        
        {/*  Logo  */}
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-semibold text-gray-800">
            BrandName
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Sign In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button type="button" className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
            {/* Menu Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
}