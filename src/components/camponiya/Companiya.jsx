import React from "react";
import "./Companiya.scss";
import rasim10 from "../../assets/Vector 5.svg";
import rasim11 from "../../assets/Group 66.svg";
import rasim12 from "../../assets/Group 70.svg";
import rasim13 from "../../assets/Group 68.svg";
import btnRasim from "../../assets/Vector 1.svg";
import rasim14 from "../../assets/Rectangle 12.svg";
import rasim16 from "../../assets/Vector 4.svg";
import { NavLink } from "react-router-dom";

const Companiya = () => {
  return (
    <>
      <div className="conteaner">
        <div className="companiya__text">
          <NavLink className="companiya__p" to={"/"}>
            Главная
          </NavLink>
          <img className="companiya__img" src={rasim10} alt="" />
          <p className="companiya__p-2">О компании</p>
        </div>
        <div className="companiya__div-main">
          <div className="companiya__div-rght">
            <h1 className="companiya__h1">О компании</h1>
            <div className="companiya__div">
              <h2 className="companiya__h2">170+ </h2>
              <p className="companiya__p-3">Товаров</p>
            </div>
            <div className="companiya__div">
              <h2 className="companiya__h2">1000+ </h2>
              <p className="companiya__p-3">Довольных покупателей</p>
            </div>
            <div className="companiya__div">
              <h2 className="companiya__h2">170+ </h2>
              <p className="companiya__p-3">Товаров</p>
            </div>
          </div>
          <div className="companiya__div-left">
            <p className="companiya__text-main">
              <p className="companiya__span">
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют.
              </p>
              <p className="companiya__span">
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
              <p className="companiya__span">
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют.
              </p>
              <p className="companiya__span">
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
            </p>
          </div>
        </div>
        <h3 className="companiya__h3">Только проверенные бренды</h3>
        <div className="companiya__imgs">
          <img src={rasim11} alt="" />
          <img src={rasim12} alt="" />
          <img src={rasim13} alt="" />
          <img src={rasim11} alt="" />
          <img src={rasim12} alt="" />
          <img src={rasim13} alt="" />
        </div>
        <div className="main-div">
          <h2 className="main-h2">Блог</h2>
          <button className="main-btn">
            Перейти в блог
            <img src={btnRasim} alt="" />
          </button>
        </div>
        <div className="companiya__div-futer">
          <div className="companiya__flex">
            <img className="companiya__img-2" src={rasim14} alt="" />
            <div className="companiya__div-2">
              <h4 className="companiya__h4">
                Как правильно освещать дом снаружи?
              </h4>
              <img className="companiya__bzk" src={rasim16} alt="" />
            </div>
            <p className="companiya__sana">01.01.2024</p>
          </div>
          <div className="companiya__flex">
            <img className="companiya__img-2" src={rasim14} alt="" />
            <div className="companiya__div-2">
              <h4 className="companiya__h4">
                Как правильно освещать дом снаружи?
              </h4>
              <img className="companiya__bzk" src={rasim16} alt="" />
            </div>
            <p className="companiya__sana">01.01.2024</p>
          </div>
          <div className="companiya__flex">
            <img className="companiya__img-2" src={rasim14} alt="" />
            <div className="companiya__div-2">
              <h4 className="companiya__h4">
                Как правильно освещать дом снаружи?
              </h4>
              <img className="companiya__bzk" src={rasim16} alt="" />
            </div>
            <p className="companiya__sana">01.01.2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companiya;
