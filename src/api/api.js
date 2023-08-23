import axios from "axios";

const api = axios.create({
  baseURL: "https://bhadas-server.onrender.com/api",
});

export default api;

export const baseUrl = `https://bhadas-server.onrender.com/api`;

export const post = async (url, data) => {
  try {
    const user = await localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      const headers = {
        authorization: `Bearer ${userData.token}`,
      };
      const res = await axios.post(baseUrl + url, data, { headers: headers });
      return { statusCode: res.status, data: res.data };
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: e?.response?.data?.error?.statusCode || 404,
      message:
        e.response.data === undefined
          ? e?.message
          : e?.response?.data?.error?.message,
    };
  }
};

export const patch = async (url, data) => {
  try {
    const res = await axios.patch(baseUrl + url, data);
    return { statusCode: res.status, data: res.data };
  } catch (e) {
    console.log(e);
    return {
      statusCode: e?.response?.data?.error?.statusCode || 404,
      message:
        e.response.data === undefined
          ? e?.message
          : e?.response?.data?.error?.message,
    };
  }
};

export const get = async (url) => {
  try {
    const user = await localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      const headers = {
        authorization: `Bearer ${userData.token}`,
      };
      const res = await axios.get(baseUrl + url, { headers: headers });
      return { statusCode: res.status, data: res.data };
    } else {
      return { statusCode: 401, data: { message: "no userFound" } };
    }
  } catch (err) {
    console.log(err);
  }
};

export const deletethis = async (url) => {
  try {
    const res = await axios.delete(baseUrl + url);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    console.log(err);
  }
};
