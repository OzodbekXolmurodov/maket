import React from "react";
import "./Futer.scss";
import futer from "../../assets/Group 65.svg";
import rasim7 from "../../assets/image 1.svg";
import futer2 from "../../assets/Group 59.svg";

const Futer = () => {
  return (
    <>
      <div className="futer">
        <div className="conteaner futer__div-category">
          <div className="futer__main-div">
            <img className="futer__logo" src={futer} alt="" />
            <h3 className="futer__h3">8 (800) 890-46-56</h3>
            <img className="futer__img" src={rasim7} alt="" />
            <p className="futer__p">Политика конфидециальности</p>
            <p className="futer__p">Пользовательское соглашение</p>
            <div className="futer__div">
              <img className="futer__imgs" src={futer2} alt="" />
              <img className="futer__imgs" src={futer2} alt="" />
              <img className="futer__imgs" src={futer2} alt="" />
            </div>
          </div>
          <div>
            <h2 className="futer__h2">Покупателям</h2>
            <p className="futer__main-p">О компании</p>
            <p className="futer__main-p">Доставка и оплата</p>
            <p className="futer__main-p">Возврат</p>
            <p className="futer__main-p">Гарантии</p>
            <p className="futer__main-p">Контакты</p>
            <p className="futer__main-p">Блог</p>
          </div>
          <div>
            <h2 className="futer__h2">Товары</h2>
            <p className="futer__main-p">Люстры</p>
            <p className="futer__main-p">Светильники</p>
            <p className="futer__main-p">Бра</p>
            <p className="futer__main-p">Торшеры</p>
            <p className="futer__main-p">Комплектуюшие</p>
            <p className="futer__main-p">Настольные лампы</p>
          </div>
          <div>
            <p className="futer__main-p">Споты</p>
            <p className="futer__main-p">Трековые светильники</p>
            <p className="futer__main-p">Уличные светильники</p>
            <p className="futer__main-p">Технические светильники</p>
            <p className="futer__main-p">Светодиодные ленты</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Futer;
