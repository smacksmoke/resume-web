'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
}

function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-base font-normal text-black/90 hover:text-black ${
        active ? 'underline underline-offset-2' : ''
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="relative border-b border-black/20">
      <div className="relative flex items-center px-6 py-3 md:px-10">

        {/* Nav — left side */}
        <nav className="flex items-center gap-6">
          <NavLink href="/resume" label="resume" active={pathname === '/resume'} />
          <NavLink href="/contacts" label="contacts" active={pathname === '/contacts'} />
        </nav>

        {/* Logo — absolutely centered in header */}
        <Link
          href="/"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="pointer-events-auto flex items-baseline gap-0.5">
            <span className="text-xl font-normal tracking-tight text-black/90">
              Danil Kazantsev
            </span>
            <Image
              src="/images/star.svg"
              alt="star"
              width={10}
              height={10}
              className="mb-1"
            />
          </span>
        </Link>

      </div>
    </header>
  );
}
