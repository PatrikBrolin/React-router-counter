import { Outlet, Link} from "react-router-dom";
import styles from './navbar.module.css'

export default function Navbar(){
  return(
    <>
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/counter'>Counter</Link>
        </li>
        <li>
        <Link to='/currentCount'>CurrentCount</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
    </>
  );
}