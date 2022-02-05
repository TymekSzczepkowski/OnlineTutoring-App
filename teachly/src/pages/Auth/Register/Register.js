import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingIcon from "../../../UI/Loading/LoadingIcon";
import styles from "../Auth.module.css";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8013/";
// const API_URL = process.env.REACT_APP_API_URL;

function Register() {
  const history = useHistory();
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [ifSent, updateIfSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    sex: "",
    password: "",
    re_password: "",
  });

  const submit = async (e) => {
    if (
      form.first_name === "" ||
      form.last_name === "" ||
      form.email === "" ||
      form.sex === "" ||
      form.password === "" ||
      form.re_password === ""
    ) {
      setError("All fields must be completed");
    }
    if (form.password != form.re_password) {
      setError("Password did not match");
    }

    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(API_URL + "auth/users/", {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        sex: form.sex,
        password: form.password,
        re_password: form.re_password,
      });
      updateIfSent(true);
    } catch (ex) {}
    setLoading(false);
  };



  return (
    <div className={styles.container}>
      {ifSent ? (
        <div className={styles.form}>
          <div className={styles.ifSentInfo}>
            Aby potwierdzić rejestracje, sprawdź swój email i potwierdź swoje
            konto
          </div>
          </div>
      ) : (
        <>
          <form onSubmit={submit} className={styles.form}>
            <h1 className={styles.headline}>Zarejestruj się</h1>

            <div className={styles.fragment}>
              <br />
              <input
                placeholder='Imię'
                type='text'
                value={form.first_name}
                onChange={(e) =>
                  setForm({ ...form, first_name: e.target.value })
                }
                className={styles.input}
              />
            </div>
            <div className={styles.fragment}>
              <br />

              <input
                placeholder='Nazwisko'
                type='text'
                value={form.last_name}
                onChange={(e) =>
                  setForm({ ...form, last_name: e.target.value })
                }
                className={styles.input}
              />
            </div>

            <div className={styles.fragment}>
              <br />

              <input
                placeholder='Email'
                type='email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={styles.input}
              />
            </div>
            <div className={styles.selectFragment}>
              <select
                onChange={(e) => setForm({ ...form, sex: e.target.value })}>
                <option value='default' selected disabled hidden>Wybierz płeć </option>
                <option value='male'>Mężczyzna</option>
                <option value='female'>Kobieta</option>
              </select>
            </div>
            <div className={styles.fragment}>
              <br />
              <input
                placeholder='Hasło'
                type='password'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.fragment}>
              <br />

              <input
                placeholder='Powtórz hasło'
                type='password'
                value={form.re_password}
                onChange={(e) =>
                  setForm({ ...form, re_password: e.target.value })
                }
                className={styles.input}
              />
            </div>
            <div className={styles.fragment}>
              {loading ? (
                <LoadingIcon />
              ) : (
                <button className={styles.button}>Zarejestruj się</button>
              )}
            </div>

            {error ? <p className={styles.alert}>{error}</p> : null}
            <div className={styles.bottomInfo}>
              <Link to={"/login"}>
                <a>Masz już konto? Zaloguj się!</a>
              </Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
export default Register;
