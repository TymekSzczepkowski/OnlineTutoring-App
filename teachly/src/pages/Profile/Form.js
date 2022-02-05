import styles from "../Auth/Auth.module.css";
import { useState, useEffect } from "react";
import LoadingIcon from "../../UI/Loading/LoadingIcon";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const API_URL = "http://localhost:8013/";

function Form() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [auth] = useAuth();
  const [check, setCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formTeacher, setformTeacher] = useState({
    description: "",
    contact_number: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get(API_URL + `teachers/me/`, {
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      })
      .then((response) => {
        response.data.contact_number !== "" ? setCheck(true) : setCheck(false);
      });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        API_URL + `teachers/`,
        {
          contact_number: formTeacher.contact_number,
          description: formTeacher.description,
          city: formTeacher.city,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.access}`,
          },
        }
      );
      history.push("/profile");
    } catch (ex) {
      setErrorMsg("Incorrect number");

      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {!check ? (
        <form className={styles.form}>
          <h2 className={styles.headline}>Uzupełnij dane o profilu</h2>
          <div className={styles.fragment}>
            <br />
            <input
              placeholder='Numer telefonu'
              type='text'
              value={formTeacher.contact_number}
              onChange={(e) =>
                setformTeacher({
                  ...formTeacher,
                  contact_number: e.target.value,
                })
              }
              className={styles.input}
            />
          </div>
          <div className={styles.fragment}>
            <br />
            <input
              placeholder='Opis'
              type='text'
              value={formTeacher.description}
              onChange={(e) =>
                setformTeacher({ ...formTeacher, description: e.target.value })
              }
              className={styles.input}
            />
          </div>
          <div className={styles.fragment}>
            <br />
            <input
              placeholder='Miejsce zamieszkania'
              type='text'
              value={formTeacher.city}
              onChange={(e) =>
                setformTeacher({ ...formTeacher, city: e.target.value })
              }
              className={styles.input}
            />
          </div>
          <div className={styles.fragment}>
            {errorMsg ? <p className={styles.alert}>{errorMsg}</p> : null}
            {loading ? (
              <LoadingIcon />
            ) : (
              <>
                <button onClick={submit} className={styles.button}>
                  Zapisz informacje
                </button>
              </>
            )}
          </div>
        </form>
      ) : (
        history.push("./profile")
      )}
    </div>
  );
}
export default Form;
