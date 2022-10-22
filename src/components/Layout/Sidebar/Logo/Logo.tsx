import { FaTicketAlt, FaSignInAlt } from 'react-icons/fa';
import styles from './Logo.module.scss';
import Link from 'next/link';

export default function SidebarLogo() {
  return (
    <div className={styles.logo_nav_container}>
      <Link href='/popular' passHref>
        <div className={styles.logo}>
          <FaTicketAlt size={80} />
          <h1>MOVIES</h1>
        </div>
      </Link>
    </div>
  );
}
