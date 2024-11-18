import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Prodacts.scss";
import rasim from "../../assets/Group 37.svg";
import btnRasim from "../../assets/Vector 1.svg";
import Modul from "../modul/Modul";

const bas__url = "https://672fc50866e42ceaf15ea982.mockapi.io";
const Prodacts = () => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`${bas__url}/products`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally();
  }, []);
  console.log(data);
  const prodactsItm = data?.map((pro) => (
    <div className="prodacts__main" key={pro.id}>
      <img
        onClick={() => setItem(pro)}
        className="prodacts__img"
        src={pro.url}
        alt=""
      />
      <h3 className="prodacts__h3">{pro.title}</h3>
      <div className="prodacts__div">
        <div>
          <del className="prodacts__p">{pro.previousprice}</del>

          <p className="prodacts__p3">{pro.discountprice}₽</p>
        </div>
        <img className="prodacts__ktg" src={rasim} alt="" />
      </div>
    </div>
  ));
  return (
    <>
      {/* <div className="main-div">
          <h2 className="main-h2">Каталог</h2>
          <button className="main-btn">
            Весь каталог
            <img src={btnRasim} alt="" />
          </button>
        </div> */}

      <div className="conteaner">
        <div className="prodacts">{prodactsItm}</div>
      </div>
      {item && (
        <Modul close={setItem}>
          <div className="div_m">
            <img className="header__img-modul" src={item.url} alt="" />
          </div>
        </Modul>
      )}
    </>
  );
};

export default Prodacts;
