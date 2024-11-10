import React from "react";
import "./Catolig.scss";
import btnRasim from "../../assets/Vector 1.svg";
import rasim9 from "../../assets/Vector 2.svg";
import rasim10 from "../../assets/250970 1.svg";

const Catolig = () => {
  return (
    <>
      <div className="catolig conteaner">
        <div className="main-div">
          <h2 className="main-h2">Каталог</h2>
          <button className="main-btn">
            Весь каталог
            <img src={btnRasim} alt="" />
          </button>
        </div>
        <div className="catolig__main-div">
          <div className="catolig__div">
            <div className="catolig__rght">
              <p className="catolig__p">Люстры</p>
              <div className="catolig__text">
                <p className="catolig__p2">От 540₽</p>
                <img className="catolig__img" src={rasim9} alt="" />
              </div>
            </div>
            <div className="catolig__left">
              <img className="catolig__main-img" src={rasim10} alt="" />
            </div>
          </div>
          <div className="catolig__div">
            <div className="catolig__rght">
              <p className="catolig__p">Люстры</p>
              <div className="catolig__text">
                <p className="catolig__p2">От 540₽</p>
                <img className="catolig__img" src={rasim9} alt="" />
              </div>
            </div>
            <div className="catolig__left">
              <img
                className="catolig__main-img catolig__main-img-2"
                src={rasim10}
                alt=""
              />
            </div>
          </div>
          <div className="catolig__div  catolig__div-2">
            <div className="catolig__rght">
              <p className="catolig__p">Люстры</p>
              <div className="catolig__text">
                <p className="catolig__p2">От 540₽</p>
                <img className="catolig__img" src={rasim9} alt="" />
              </div>
            </div>
            <div className="catolig__left">
              <img className="catolig__main-img" src={rasim10} alt="" />
            </div>
          </div>
          <div className="catolig__div catolig__div-2">
            <div className="catolig__rght">
              <p className="catolig__p">Люстры</p>
              <div className="catolig__text">
                <p className="catolig__p2">От 540₽</p>
                <img className="catolig__img" src={rasim9} alt="" />
              </div>
            </div>
            <div className="catolig__left">
              <img className="catolig__main-img" src={rasim10} alt="" />
            </div>
          </div>
          <div className="catolig__div catolig__div-2">
            <div className="catolig__rght">
              <p className="catolig__p">Люстры</p>
              <div className="catolig__text">
                <p className="catolig__p2">От 540₽</p>
                <img className="catolig__img" src={rasim9} alt="" />
              </div>
            </div>
            <div className="catolig__left">
              <img className="catolig__main-img" src={rasim10} alt="" />
            </div>
          </div>
          <div className="catolig__div catolig__div-2">
            <div className="catolig__rght">
              <p className="catolig__p">Люстры</p>
              <div className="catolig__text">
                <p className="catolig__p2">От 540₽</p>
                <img className="catolig__img" src={rasim9} alt="" />
              </div>
            </div>
            <div className="catolig__left">
              <img className="catolig__main-img" src={rasim10} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catolig;
