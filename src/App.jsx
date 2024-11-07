import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Routes, Route } from "react-router-dom";
import Shopping from "./pages/shopping/Shopping";
import Header from "./components/header/Header";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Cantacts from "./pages/cantacts/Cantacts";
import Masla from "./pages/masla/Masla";
import Bloks from "./pages/bloks/Bloks";
import Futer from "./components/futer/Futer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/cantacts" element={<Cantacts />} />
        <Route path="/bloks" element={<Bloks />} />
        <Route path="*" element={<Masla />} />
      </Routes>
      <Futer />
    </>
  );
}

export default App;
