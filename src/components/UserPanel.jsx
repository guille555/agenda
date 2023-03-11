import UserPhoto from "./UserPhoto.jsx";

import styles from "./UserPanel.module.css";

const UserPanel = () => {

  const listOptions = [
    {name:"config", link:"#"},
    {name:"logout", link:"#"}
  ];

  const ItemLink = ({option}) => {
    return (
      <a className={styles.userLink} href={option.link}>{option.name}</a>
    );
  };

  const UserMenuItem = ({option}) => {
    return (
      <li className={styles.userMenuItem}><ItemLink option={option}/></li>
    );
  };

  const UserMenu = () => {
    return (
      <ul className={styles.userMenuList}>
        {
          listOptions.map((option, index) => {
            return (
              <UserMenuItem key={option.name + index} option={option}/>
            );
          })
        }
      </ul>
    );
  };

  return (
    <div className={styles.userPanelContainer}>
      <div className={styles.userPanel}>
        <UserPhoto/>
        <UserMenu/>
      </div>
    </div>
  );
};

export default UserPanel;
