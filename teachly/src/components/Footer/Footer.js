import { useContext } from 'react';
import style from './Footer.module.css'
const Footer = (props) => {
  return (
    <div className={style.footer}>
      <p className={style.footerText}>Teachly 2022</p>
    </div>
  );
}

export default Footer;