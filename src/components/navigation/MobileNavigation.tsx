'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
//@ts-ignore
import JuniorLogo from '@/assets/logo_junior.svg?url';
import { useClickOutside } from '@/hooks/useClickOutside';

export default function MobileNavigation({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useClickOutside(ref, () => setIsMenuOpen(false));

  return (
    <>
      <Link
        href='/'
        className='fixed left-4 top-4 z-50 md:hidden'
        aria-label='home'
      >
        <Image src={JuniorLogo} height={50} priority alt='Junior Logo' />
      </Link>
      <button
        className={`${
          isMenuOpen ? 'menu-open' : ''
        } group peer fixed right-4 top-4 z-40 flex h-12 w-12 flex-col items-center justify-center gap-[6px] rounded-md border border-black bg-bone md:hidden`}
        onClick={() => setIsMenuOpen((c) => !c)}
        aria-label='menu'
      >
        <span className='block h-[2px] w-6 origin-center bg-black duration-300 ease-out group-[.menu-open]:translate-y-[8px] group-[.menu-open]:rotate-45'></span>
        <span className='block h-[2px] w-6 bg-black duration-300 ease-out group-[.menu-open]:opacity-0'></span>
        <span className='block h-[2px] w-6 origin-center bg-black duration-300 ease-out group-[.menu-open]:-translate-y-[8px] group-[.menu-open]:-rotate-45'></span>
      </button>
      <nav
        ref={ref}
        className='fixed z-30 w-full -translate-y-full border-b border-black bg-bone px-4 pb-16 pt-20 transition-transform duration-300 ease-out peer-[.menu-open]:translate-y-0 md:hidden'
      >
        <ul className='flex flex-col gap-6 text-center text-3xl font-semibold'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setIsMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
