import React, { useEffect, useState } from "react";
import "./style.scss";
import api from "../../api";

const List = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const response = await await api.get("users");
      if (response) {
        setList(response?.data);
        console.log("list: ", list);
        console.log("response: ", response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="container-list">LIST</div>;
};

export default List;
