import styles from "./Logo.module.css";
import logo from "../assets/img/logo200x200.png";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="logo image"/>
    </div>
  );
};

export default Logo;
