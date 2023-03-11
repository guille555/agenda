import {NavLink} from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {

  const listOptions = [
    {name:"Contactos", link:"/contact"}
  ];

  const SubmenuLink = ({option}) => {
    return (
      <NavLink className={styles.submenuLink} to={option.link}>{option.name}</NavLink>
    );
  };

  const SubmenuItem = ({option}) => {
    return (
      <li className={styles.submenuItem}>
        <SubmenuLink option={option}/>
      </li>
    );
  };

  const Submenu = () => {
    return (
      <ul className={styles.submenu}>
        {
          listOptions.map((option, index) => {
            return (
              <SubmenuItem key={option.name + index} option={option}/>
            );
          })
        }
      </ul>
    );
  };

  const MenuItem = () => {
    return (
      <li className={styles.menuItem}>
        <span>Agenda</span>
        <Submenu/>
      </li>
    );
  };

  const Menu = () => {
    return (
      <ul className={styles.menu}>
        <MenuItem/>
      </ul>
    );
  };


  return (
    <nav className={styles.navbar}>
      <Menu/>
    </nav>
  );
};

export default Navbar;
