
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const Rout = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
