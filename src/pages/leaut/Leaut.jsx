import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Futer from "@/components/futer/Futer";

const Leaut = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Futer />
    </div>
  );
};

export default Leaut;
