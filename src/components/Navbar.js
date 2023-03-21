import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <main>
        <ul className={styles.list}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink></li>
          <li><NavLink to="/items" className={({ isActive }) => isActive ? styles.active : undefined}>Items</NavLink></li>
        </ul>
      </main>
    </header >
  )
}

export default Navbar