import React from "react";
import Loader from "react-loader-spinner";
import "./loading.scss";

const Loading = ({ visible }) => {
  return (
    <div className={!visible ? "d-none" : "loading-wrapper"}>
      <div className="loading-inner">
        <Loader
          type="Oval"
          color="#00BFFF"
          height={50}
          width={50}
          visible={visible}
        />
      </div>
    </div>
  );
};

Loading.defaultProps = {
  visible: false,
};

export default Loading;
