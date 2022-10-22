import Link from 'next/dist/client/link';
import { useState, useEffect } from 'react';
import { FaFireAlt, FaCalendarAlt, FaStar, FaSearch, FaSignInAlt, FaBars } from 'react-icons/fa';
import SidebarLogo from './Logo';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const clickHandler = () => setIsOpen((prev) => !prev);

  function linkClick() {
    const size = window.innerWidth;
    if (size < 1000) {
      setIsOpen(false);
    }
  }

  useEffect(() => setIsOpen(false), []);

  return (
    <div>
      <button className={styles.hamburger} onClick={clickHandler}>
        <FaBars size={35} />
      </button>
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <SidebarLogo />
        <div className={styles.sidebarContainer}>
          <div className={styles.sidebarLink}>
            <FaFireAlt />
            <Link href='/popular'>
              <a onClick={linkClick}>Popular</a>
            </Link>
          </div>
          <div className={styles.sidebarLink}>
            <FaCalendarAlt />
            <Link href='/coming_soon'>
              <a onClick={linkClick}>Coming Soon</a>
            </Link>
          </div>
          <div className={styles.sidebarLink}>
            <FaStar />
            <Link href='/trending'>
              <a onClick={linkClick}>Trending</a>
            </Link>
          </div>
          <div className={styles.sidebarLink}>
            <FaSearch />
            <Link href='/search'>
              <a onClick={linkClick}>Search</a>
            </Link>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link href='/auth'>
            <a onClick={linkClick}>
              <button className={styles.button}>
                Login
                <FaSignInAlt size={15} />
              </button>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
