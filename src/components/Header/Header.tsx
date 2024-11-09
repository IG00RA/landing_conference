'use client';

import styles from './Header.module.css';
import { navItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import { useState } from 'react';
import MobMenu from '../MobMenu/MobMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };
  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };
  return (
    <header className={styles.header}>
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
      {!isMenuOpen ? (
        <div className={styles.burger_wrap} onClick={openMenu}>
          <Icon name="icon-menu-burger" width={16} height={16} />
        </div>
      ) : (
        <div className={styles.burger_wrap} onClick={closeMenu}>
          <Icon name="icon-menu-close" width={16} height={16} />
        </div>
      )}

      <MobMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
}
