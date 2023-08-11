import api from "./apiConfig";

export const getCars = async () => {
  try {
    const res = await api.get("/cars");
    return res.data;
  } catch (err) {
    console.log("Error at getCars(): ", err);
  }
};
