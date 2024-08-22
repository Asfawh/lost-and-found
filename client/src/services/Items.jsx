/* react */
import { useContext } from "react";

/* axios */
import axios from "axios";

/* react router */
import { Outlet } from "react-router-dom";

/* local */
import { AuthContext } from "../context/AuthContext";

function Items() {
  const baseURL = "http://localhost:8004/api/";

  // construct axios config object
  const {
    state: { user },
  } = useContext(AuthContext);
  let authConfig = {};
  if (user) {
    authConfig.headers = {
      Authorization: `Bearer ${user.token}`,
    };
  }

  const http = axios.create({ baseURL });

  const addItem = async (item) => {
    try {
      const response = await http.post("items", item, authConfig);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const getAllItems = async () => {
    try {
      const response = await http.get("items");
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const editOneItem = async (item) => {
    try {
      const response = await http.put(`items/${item._id}`, item);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const getOneItem = async (id) => {
    try {
      const response = await http.get(`items/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const deleteOneItem = async (id) => {
    try {
      const response = await http.delete(`items/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const likeItem = async (itemId, userId) => {
    try {
      const response = await http.post("items/like", { itemId, userId });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const api = {
    addItem,
    getAllItems,
    getOneItem,
    editOneItem,
    deleteOneItem,
    likeItem,
  };

  return (
    <div>
      <Outlet context={api} />
    </div>
  );
}

export default Items;
