import React, { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const API_URL = "http://localhost:8013/";


function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    axios
      .get(API_URL + `listings/subjects`, {
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      })
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <div className={styles.conatiner}>
      <table className={styles.table}>
        <tr className={styles.table}>
          {categories.map((category) => (
            <th className={styles.th}>
              <Link to={`/category/${category.name}`} className={styles.eachCategory}>
                {category.name}
                <br></br>
              </Link>
            </th>
          ))}
        </tr>
      </table>
    </div>
  );
}
export default CategoryList;
