import styles from "./profile.module.css";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:8013/";

function Profile() {
  const [auth] = useAuth();
  const [teacherInfo, setteacherInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    sex: "",
    description: "",
    city: "",
    contact_number: "",
    online_lessons: "",
  });

  useEffect(() => {
    axios
      .get(API_URL + `teachers/me/`, {
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      })
      .then((response) => {
        setteacherInfo({
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          email: response.data.user.email,
          sex: response.data.user.sex,
          description: response.data.description,
          contact_number: response.data.contact_number,
          city: response.data.city,
          online_lessons: response.data.online_lessons,
        });
      });
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <header>
            <h2>Informacje o profilu</h2>
          </header>
        </div>
        <div>
          <p>Imię: {teacherInfo.first_name}</p>
        </div>
        <div>
          <p>Nazwisko: {teacherInfo.last_name}</p>
        </div>
        <div>
          <p>Email: {teacherInfo.email}</p>
        </div>
        <div>
          <p>Płeć: {teacherInfo.sex}</p>
        </div>
        <div>
          <p>Numer telefonu: {teacherInfo.contact_number}</p>
        </div>
        <div>
          <p>Opis: {teacherInfo.description}</p>
        </div>
        <div>
          <p>Miejsce zamieszkania: {teacherInfo.city}</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
