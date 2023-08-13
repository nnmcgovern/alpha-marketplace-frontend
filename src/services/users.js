import jwtDecode from "jwt-decode";
import api from "./apiConfig";

export const getUser = async (id) => {
  try {
    const res = await api.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const res = await api.post("/login", credentials);
    // console.log(res.data);
    localStorage.setItem("token", res.data.token);
    const user = jwtDecode(res.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/signup", credentials);
    localStorage.setItem("token", res.data.token);
    const user = jwtDecode(res.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const verify = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/verify");
    return res.data;
  }
  return false;
};

export const logout = () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};
