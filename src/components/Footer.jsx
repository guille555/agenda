import styles from "./Footer.module.css";

import iconInstagram from "../assets/icons/instagram.svg";
import iconFacebook from "../assets/icons/facebook.svg";
import iconTwitter from "../assets/icons/twitter.svg";
import iconGithub from "../assets/icons/github.svg";
import iconLinkedin from "../assets/icons/linkedin.svg";

const Footer = () => {

  const listSocialLinks = [
    {icon:iconInstagram, description:"Instagram icon", link:"#"},
    {icon:iconFacebook, description:"Facebook icon", link:"#"},
    {icon:iconTwitter, description:"Twitter icon", link:"#"},
    {icon:iconGithub, description:"Github icon", link:"#"},
    {icon:iconLinkedin, description:"Linkedid icon", link:"#"}
  ];

  const FooterSocialIcon = ({icon}) => {
    return (
      <div className={styles.footerIconContainer}>
        <a href={icon.link} target="_blank">
          <img src={icon.icon} alt={icon.description}/>
        </a>
      </div>
    );
  };

  const FooterSocialColumn = () => {
    return (
      <div className={styles.footerSocialColumn}>
        {
          listSocialLinks.map((icon, index) => {
            return (
              <FooterSocialIcon key={icon.description + index} icon={icon}/>
            );
          })
        }
      </div>
    );
  };

  return (
    <footer className={styles.footer}>
      <div><p>Desarrollado por DevTeam</p></div>
      <FooterSocialColumn/>
    </footer>
  );
};

export default Footer;
