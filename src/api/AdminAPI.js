import axios from "axios";
import { getRole } from "../auth/auth";
import { getAccessToken } from "../auth/auth";
import moment from "moment";

export const covertDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

const url = "https://truc-anh.herokuapp.com/api";
const headers = { Authorization: `${getAccessToken()}` };
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

export const getAllBanner = async (slug) => {
  return await axios
    .get(`${url}/get-all-banner`, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getDetailsBanner = async (bannerID) => {
  return await axios
    .get(`${url}/get-details-banner/${bannerID}`, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const deleteBanner = async (data) => {
  console.log(data);
  return await axios
    .post(`${url}/delete-banner`, data, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};

export const getAllCategory = async () => {
  return await axios
    .get(`${url}/get-all-category`, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const updateBanner = async (data) => {
  const formData = new FormData();
  if (data.image.file) {
    formData.append("image", data.image.file);
  } else {
    formData.append("image", data.image.url);
  }
  formData.append("categoryID", data.categoryID);
  formData.append("index", data.index);
  formData.append("bannerID", data.bannerID);

  return await axios
    .post(`${url}/update-banner`, formData, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};

export const getDetailsCategory = async (categoryID) => {
  return await axios
    .get(`${url}/get-details-category/${categoryID}`, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const updateCategory = async (data) => {
  return await axios
    .post(`${url}/update-category`, data, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const addSubCategory = async (data) => {
  return await axios
    .post(`${url}/add-sub-category`, data, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const deleteSubCategory = async (data) => {
  return await axios
    .post(`${url}/delete-sub-category`, data, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const updateSubCategory = async (data) => {
  return await axios
    .post(`${url}/update-sub-category`, data, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const addCategory = async (data) => {
  return await axios
    .post(`${url}/add-category`, data, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const deleteCategory = async (data) => {
  return await axios
    .post(`${url}/delete-category`, data, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const updateImage = async (data) => {
  const formData = new FormData();
  if (data.image.file) {
    formData.append("image", data.image.file);
  } else {
    formData.append("image", data.image.url);
  }
  formData.append("title", data.title);
  formData.append("imageID", data.imageID);

  return await axios
    .post(`${url}/update-image`, formData, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};

export const deleteImage = async (data) => {
  return await axios
    .post(`${url}/delete-image`, data, {
      headers: headers,
    })
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const addImage = async (data) => {
  const formData = new FormData();
  formData.append("image", data.image.file);

  formData.append("title", data.title);

  return await axios
    .post(`${url}/add-image`, formData, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};
