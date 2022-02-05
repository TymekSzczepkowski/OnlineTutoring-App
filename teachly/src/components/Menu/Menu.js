import { Link } from "react-router-dom";
import "./Menu.module.css";
import useAuth from "../../hooks/useAuth";
import style from "./Menu.module.css";

function Menu() {
  const [auth, setAuth] = useAuth();

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
  };

  return (
    <div className={`${style.menuContainer} `}>
      <ul className={style.menu}>
        <li className={style.menuItem}>
          <Link exact={true} to={`/home`} className={style.link}>
            <i classname={style.LOGO} class='bx bxs-graduation'></i>
            Teachly
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link exact={true} to={`/home`} className={style.link}>
            <i class='bx bxs-home' className={style.icons}></i>
            Strona główna
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link className={style.link} to={`/aboutus`}>
            <i class='bx bxs-category' className={style.icons}></i>
            O nas
          </Link>
        </li>
        {auth ? (
          <>
            <li className={style.menuItem}>
              <Link
                exact={true}
                to={"/"}
                onClick={logout}
                className={style.link}>
                <i class='bx bxs-log-out-circle' className={style.icons}></i>
                Wyloguj
              </Link>
            </li>
            <li className={style.menuItem}>
              <Link to={`/profile`} className={style.link}>
                <i class='bx bxs-user'> </i>
                Mój Profile
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className={style.menuItem}>
              <Link className={style.link} to={`/register`}>
                <i class='bx bxs-user'> </i>
                Zarejestruj
              </Link>
            </li>
            <li className={style.menuItem}>
              <Link className={style.link} to={"/"}>
                <i class='bx bxs-log-in-circle'></i>
                Zaloguj
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Menu;
