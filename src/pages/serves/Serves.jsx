import React, { useState } from "react";
import Modul from "../../components/modul/Modul";

const Serves = () => {
  const [show, setShow] = useState(null);

  return (
    <>
      <button onClick={() => setShow(true)}> salsom</button>
      {show && (
        <Modul close={setShow}>
          <div>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda aspernatur quod minima deserunt voluptas sit odio, eius
              omnis esse vero rem a vitae mollitia odit praesentium! Facilis
              eveniet similique reiciendis.
            </h2>
          </div>
        </Modul>
      )}
    </>
  );
};
//
export default Serves;
