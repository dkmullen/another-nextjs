'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './ui.module.css';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Customers', href: '/dashboard/customers' },
  { name: 'Invoices', href: '/dashboard/invoices' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.navbar}>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(styles.navlink, {
                [styles['active-link']]: pathname === link.href,
              })}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
