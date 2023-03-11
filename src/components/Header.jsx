import Logo from "./Logo.jsx";
import UserPanel from "./UserPanel.jsx";
import Navbar from "./Navbar.jsx";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <UserPanel/>
      <Navbar/>
    </header>
  );
};

export default Header;
