import PropTypes from "prop-types";
import { useContext } from "react";
import styles from "./Ad.module.css";
import teacherImg from "../../../assets/images/teacher.jpg";
import { Link } from "react-router-dom";

function Ad({ details }) {
  console.log(details);
  return (
    <div className={`card ${styles.hotel}`}>
      <div className={`${styles.card} card-body`}>
        <div className='row'>
          <div className='col-4'>
            <img src={teacherImg} alt='' className={`${styles.thumbnail}`} />
          </div>
          <div className='col-8'>
            <div className='row'>
              <div className='col'>
                <p className={styles.title}>
                  {details.teacher.first_name + " " + details.teacher.last_name}
                </p>
                <p className={`${styles.badge}`}>{details.subject.name}</p>
                <p>{details.description}</p>
              </div>
              <div className='col text-right'>
                <h6 className={`${styles.tag}`}>
                  Email: {details.teacher.email}
                </h6>
                <h6 className={`${styles.tag}`}>
                  Cena: {details.hourly_rate} zł/h
                </h6>
                <h6 className={`${styles.tag}`}>Lokalizacja: Gdańsk</h6>
                <Link
                  to={`/ad/${details.id}`}
                  className={`btn btn-danger mt-2 px-4 ${styles.button}`}>
                  Zobacz więcej
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ad.propTypes = propTypes;

export default Ad;
