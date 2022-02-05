import { useParams ,Link} from "react-router-dom";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../../UI/Searchbar/Searchbar";
import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";
import Ad from "../../components/Ads/Ad/Ad";
import styles from "./category.module.css";
const API_URL = "http://localhost:8013/";

function Category() {
  const [auth] = useAuth();
  const [ads, setAds] = useState([]);
  const { name } = useParams();

  const searchHandler = (term) => {
    const newAds = [...ads].filter((x) =>
      x.description.toLowerCase().includes(term.toLowerCase())
    );
    setAds(newAds);
  };

  useEffect(() => {
    axios
      .get(API_URL + `listings/?f=${name}`, {
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      })
      .then((response) => {
        setAds(response.data);
      });
  }, []);

  return (
    <>
      
      <Header>
        <Searchbar onSearch={(term) => searchHandler(term)} />
      </Header>
      <div className={styles.conatiner}>
      <table className={styles.table}>
        <tr className={styles.table}>
            <th className={styles.th}>
              <span className={styles.eachCategory}>{name}</span>
            </th>
        </tr>
      </table>
    </div>
      {ads.map(ad => (
      <Ad details={ad} />
    ))}
    </>
  );
}

export default Category;
