import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Details from "./page/details";
import "./App.css";
import Cart from "./page/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/details" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
