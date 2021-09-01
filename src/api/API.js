import axios from "axios";

const url = "https://truc-anh.herokuapp.com/api";

export const getHomeBanner = async (slug) => {
  return await axios
    .get(`${url}/get-banner/${slug}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};
