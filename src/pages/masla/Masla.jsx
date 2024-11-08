import React from "react";
import { useNavigate } from "react-router-dom";
import masala from "../../assets/404.svg";
import Header from "../../components/header/Header";

const Blog = () => {
  const navegate = useNavigate();
  return (
    <div className="conteaner">
      <Header />
      <img className="img" src={masala} alt="404" />
      <p className="p-text">Похоже, ничего не нашлось :(</p>
      <button className="btn" onClick={() => navegate("/")}>
        На главную
      </button>
    </div>
  );
};

export default Blog;
