'use client'

import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import {
  Shirt01Icon,
  NecklaceIcon
} from 'hugeicons-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/lorem', icon: HomeIcon },
  { name: 'Products', href: '/lorem/products', icon: ShoppingBagIcon },
  { name: 'Apparels', href: '/lorem/category/apparel', icon: Shirt01Icon},
  { name: 'Accessories', href: '/lorem/category/accessory', icon: NecklaceIcon},
  { name: 'Cart', href: '/lorem/cart', icon: ShoppingCartIcon },
];

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[64px] items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:py-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
