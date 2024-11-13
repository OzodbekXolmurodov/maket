import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/Group 64.svg";
import rasim from "../../assets/Vector.svg";
import rasim3 from "../../assets/Vector3.svg";
import rasim4 from "../../assets/Vector4.svg";
import rasim5 from "../../assets/Group 3.svg";
import rasim6 from "../../assets/Vector5.svg";
import rasim11231 from "../../assets/Vector6.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  const tagle = () => {
    setShow(!show);
  };
  return (
    <>
      {show && (
        <div onClick={() => setShow(false)} className="header__ovirlay"></div>
      )}
      <div className={`header conteaner ${show ? "show" : ""}`}>
        <div className="header__div">
          <NavLink className="header__link" to={"/about"}>
            О компании
          </NavLink>
          <NavLink className="header__link" to={"/shopping"}>
            Доставка и оплата
          </NavLink>
          <NavLink className="header__link" to={"/return"}>
            Возврат
          </NavLink>
          <NavLink className="header__link" to={"/garant"}>
            Гарантии
          </NavLink>
          <NavLink className="header__link" to={"/cantacts"}>
            Контакты
          </NavLink>
          <NavLink className="header__link" to={"/bloks"}>
            Блог
          </NavLink>
        </div>
        <div className="header__text">
          <p className="header__p">8 (800) 890-46-56</p>
          <p className="header__p-2 header__link">Заказать звонок</p>
        </div>
      </div>
      <div className="conteaner header__nav">
        <button className="header__btn-img" onClick={() => setShow(true)}>
          <img className="header__img-btn" src={rasim11231} alt="" />
        </button>

        <NavLink to={"/"}>
          <img src={logo} alt="logo" />
        </NavLink>
        <button className="header__btn">
          <img src={rasim} alt="" />
          Каталог
        </button>
        <div className="header__form">
          <input
            placeholder="Поиск по товарам"
            className="header__input"
            type="text"
          />
          <img className="header__sorch" src={rasim6} alt="" />
        </div>
        <div className="header__cloction">
          <div className="header__icons">
            <img className="header__img-3" src={rasim3} alt="rasim" />
            <p className="header__text2">Избранное</p>
          </div>
          <div className="header__icons header__icons2">
            <img className="header__img-3" src={rasim4} alt="rasim" />
            <p className="header__text2 ">Избранное</p>
          </div>
          <div className="header__icons">
            <img
              className="header__img header__img-3"
              src={rasim5}
              alt="rasim"
            />
            <p className="header__text2">Избранное</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
