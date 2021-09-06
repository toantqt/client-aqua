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

export const getCategory = async (slug) => {
  return await axios
    .get(`${url}/get-category/${slug}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getNewsCategory = async (categoryID, subCategoryID, page) => {
  return await axios
    .get(`${url}/get-news/${categoryID}/${subCategoryID}/${page}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getDetailsNews = async (slug) => {
  return await axios
    .get(`${url}/get-details-news/${slug}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};
