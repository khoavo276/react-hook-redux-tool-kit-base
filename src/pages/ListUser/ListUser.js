import React, { useState, useEffect } from "react";
import api from "../../api/api.js";
import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout";
import "./ListUser.scss";

const ListUser = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const response = await await api.get(`/users`);
      if (response) {
        setList(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <DefaultLayout>
        <div className="list-user">
          {list &&
            list.map((user, index) => (
              <div key={index}>
                <img className="user-avatar" src={user.avatar_url} alt="" />
                <p>Name: {user.login}</p>
              </div>
            ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export default ListUser;
