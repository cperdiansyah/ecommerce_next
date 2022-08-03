import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavItem = ({ className, href, children, isIcon }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${[className].join(' ')} ${
          router.pathname === href && !isIcon ? 'active' : ''
        }`}
        aria-current="page"
      >
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
