import styles from "./UserPhoto.module.css";

import userImg from "../assets/img/userTestImg.jpg";

const UserPhoto = () => {
  return (
    <div className={styles.userPhotoContainer}>
      <img className={styles.userPhoto} src={userImg} alt="user image"/>
    </div>
  );
};

export default UserPhoto;
