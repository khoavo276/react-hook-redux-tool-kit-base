import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DefaultLayout.scss";

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      <div className="default-layout">
        <div className="container pt-4">{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
