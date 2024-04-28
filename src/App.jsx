/* eslint-disable react/prop-types */

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./pizzaData/Menu";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App

