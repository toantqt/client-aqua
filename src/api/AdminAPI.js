import axios from "axios";
import { getRole } from "../auth/auth";
const url = "https://truc-anh.herokuapp.com/api";

export const login = async (data) => {
  console.log(data);
  return await axios
    .post(`${url}/login`, data)
    .then(async (res) => {
      const token = {
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      };
      localStorage.setItem("userToken", JSON.stringify(token));
      let role;
      await getRole().then((user) => {
        role = user;
      });
      return role;
    })
    .catch((error) => {
      return error.response;
    });
};
