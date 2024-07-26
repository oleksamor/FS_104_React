import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Users from "../pages/Users/Users";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
