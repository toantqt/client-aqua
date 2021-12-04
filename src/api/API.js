import axios from "axios";

const url = "https://aquavn.herokuapp.com/api";
// const url = "http://localhost:6699/api";

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

export const getSubCategory = async (categoryID) => {
  return await axios
    .get(`${url}/get-subCategory/${categoryID}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getNewCategory = async (categoryID, page) => {
  return await axios
    .get(`${url}/get-news/${categoryID}/${page}`)
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

export const getIntroduce = async (slug) => {
  return await axios
    .get(`${url}/get-introduce`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getAchievements = async (slug) => {
  return await axios
    .get(`${url}/get-achievements`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getProduct = async (categoryID, page) => {
  return await axios
    .get(`${url}/get-product/${categoryID}/${page}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getAllProduct = async (categoryID, page) => {
  return await axios
    .get(`${url}/get-all-product/${categoryID}/${page}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getProductHighlight = async () => {
  return await axios
    .get(`${url}/get-product-highlight`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getDetailsProduct = async (productID) => {
  return await axios
    .get(`${url}/get-details-product/${productID}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getInformation = async () => {
  return await axios
    .get(`${url}/get-information`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getImage = async () => {
  return await axios
    .get(`${url}/get-image`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getDetailsImage = async (imgID) => {
  return await axios
    .get(`${url}/get-details-image/${imgID}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getVideo = async () => {
  return await axios
    .get(`${url}/get-video`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getDetailsVideo = async (videoID) => {
  return await axios
    .get(`${url}/get-details-video/${videoID}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getHomeProduct = async () => {
  return await axios
    .get(`${url}/get-home-product`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getHomeNews = async () => {
  return await axios
    .get(`${url}/get-home-news`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getCategoryType = async (type) => {
  return await axios
    .get(`${url}/get-category-type/${type}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};
