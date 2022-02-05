import React  from "react";
import styles from "./Header.module.css";
import withMousePosition from "../../hoc/withMousePosition";

function Header(props) {

  const paralaxStyles = {
    transform: `translate(
                  ${props.mouseX / -20}px, 
                  ${props.mouseY / 120}px
                )`
  };
  return (
    <header className={styles.header}>
      <h2 className={styles.slogan}>Korepetycje w każdym miejscu w <span className={styles.important}>Polsce</span> Znajdź swojego nauczyciela już teraz!</h2>
      <div className={styles.headerImage} style={paralaxStyles}></div>
      {props.children}
    </header>
  );
}

export default withMousePosition(Header);