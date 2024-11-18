import React from "react";
import "./Modul.scss";

const Modul = ({ children, close }) => {
  // children to'g'ri yozildi
  console.log(children);
  return (
    <div className="modul">
      <div onClick={() => close(false)} className="modul__overlay"></div>
      <div className="modul__content">{children}</div>{" "}
      {/* children to'g'ri ishlatilmoqda */}
    </div>
  );
};

export default Modul;
