'use client';

import styles from './Header.module.css';
import { navItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo_wrap} href="/">
          <Icon name="icon-logo" width={48} height={40} />
          <span className={styles.logo_text}>MUSTAGE</span>
        </a>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a className={styles.nav_link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>       
      </div>
    </header>
  );
}
