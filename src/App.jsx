import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>

      <Outlet></Outlet>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
