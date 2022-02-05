import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingIcon from "../../../UI/Loading/LoadingIcon";
import styles from "../Auth.module.css";
import { Link } from "react-router-dom";
// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://localhost:8013/";

function Login() {
  const [auth, setAuth] = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(API_URL + `jwt/create/`, {
        email,
        password,
      });
      setAuth({
        refresh: res.data.refresh,
        access: res.data.access,
      });
      history.push("/form");
    } catch (ex) {
      setLoading(false);
      setErrorMsg("Incorrect login details");
    }
  };


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>
        <h2 className={styles.headline}>Zaloguj się</h2>
        <div className={styles.fragment}>
          <br />
          <input
            placeholder='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.fragment}>
          <br />
          <input
            placeholder='Hasło'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.fragment}>
          {loading ? (
            <LoadingIcon />
          ) : (
            <>
              <button className={styles.button}>Zaloguj się</button>
            </>
          )}
          {errorMsg ? <p className={styles.alert}>{errorMsg}</p> : null}
          <div className={styles.bottomInfo}>
            <Link to={"/register"}>
              <a>Nie masz konta? Zarejestruj się</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
