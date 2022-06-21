import React, { useState, useEffect } from "react";
import api from "api/api.js";
import DefaultLayout from "layouts/DefaultLayout";
import Loading from "components/loading";
import "./ListUser.scss";

const ListUser = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await await api.get(`/users`);
      if (response) {
        setList(response);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
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
        <Loading visible={loading} />
      </DefaultLayout>
    </>
  );
};

export default ListUser;
