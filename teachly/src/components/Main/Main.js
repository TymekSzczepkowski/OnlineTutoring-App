import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Ad from "../../components/Ads/Ad/Ad";
import Searchbar from "../../UI/Searchbar/Searchbar";
import Header from "../Header/Header";
import CategoryList from "../CategoryList/CategoryList";


const API_URL = "http://localhost:8013/";

function Main() {
  const [auth] = useAuth();
  const [ads, setAds] = useState([]);

  const searchHandler = (term) => {
    const newAds = [...ads].filter((x) =>
      x.description.toLowerCase().includes(term.toLowerCase())
    );
    setAds(newAds);
  };

  useEffect(() => {
    axios
      .get(API_URL + `listings/?f=Matematyka`, {
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
      <CategoryList />
      <div className='container'>
        {ads.map(ad => (
          <Ad details={ad} />
        ))}
      </div>
    </>
  );
}

export default Main;
