import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navegate = useNavigate();
  return (
    <div>
      <button onClick={() => navegate("/")}>На главную</button>
    </div>
  );
};

export default Blog;
