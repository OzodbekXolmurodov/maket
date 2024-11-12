import React from "react";
import { NavLink } from "react-router-dom";
import rasim10 from "../../assets/Vector 5.svg";
import "./Was.scss";

const Was = () => {
  return (
    <>
      <div className="conteaner">
        <div className="companiya__text">
          <NavLink className="companiya__p" to={"/"}>
            Главная
          </NavLink>
          <img className="companiya__img" src={rasim10} alt="" />
          <p className="companiya__p-2">Возврат</p>
        </div>
        <div className="was">
          <div className="was__rght">
            <h1 className="was__h1">Возврат</h1>
          </div>
          <div className="was__left">
            <h2 className="was__h2">Обмен и возврат по желанию покупателя</h2>
            <p className="was__p">
              Если товар по каким-то причинам не подошел вам, вы имеете право
              вернуть его или обменять на другой в течение 7 дней* с момента
              покупки при соблюдении следующих условий:
            </p>
            <ul className="was__ul">
              <li className="was__li">
                Товар имеет первоначальный вид, имеется товарная кондиция; Товар
                имеет полную комплектацию, включая упаковочные материалы;
              </li>
              <li className="was__li">
                Товар не имеет следов подключался и не имеет признаков монтажа;
              </li>
              <li className="was__li">
                Упаковка товара не имеет повреждений, присутствует
                первоначальный товарный вид;
              </li>
              <li className="was__li">
                Есть документ, подтверждающий покупку в нашем интернет-магазине.
              </li>
              <li className="was__li">
                Для возврата товара необходимо привезти его к нам в офис.
              </li>
              <li className="was__li">
                Товар из других городов можно прислать нам транспортной
                компанией, при этом услуги транспортной компании  оплачиваются
                клиентом.
              </li>
              <li className="was__li">
                *В течение 14 дней для отдельных брендов. При оформлении заказа
                уточните у менеджера
              </li>
            </ul>

            <h2 className="was__h2">Обмен и возврат по ошибке продавца</h2>
            <p className="was__p">
              Причины обмена или возврата по ошибке продавца:
            </p>
            <ul className="was__ul">
              <li className="was__li">Неполная комплектация товарa</li>
              <li className="was__li">Брак или дефект товара</li>
              <li className="was__li">
                Если вы выявили дефект, брак или неполную комплектацию товара,
                необходимо сделать фото дефекта и отправить на
                почту mail@at-svet.ru, указав краткое описание характера брака/
              </li>
              <li className="was__li">
                Мы заменим бракованный товар или довезем недостающие части.
                Доставка будет осуществлена бесплатно
              </li>
            </ul>
            <h2 className="was__h2">Возврат денежных средств</h2>
            <p className="was__p">
              Возврат денежных средств осуществляется путем перевода на
              банковские реквизиты покупателя при наличии заявления от
              покупателя.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Was;
