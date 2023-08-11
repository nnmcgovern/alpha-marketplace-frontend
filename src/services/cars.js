import api from "./apiConfig";

// GET ALL CARS
export const getCars = async () => {
  try {
    const res = await api.get("/cars");
    return res.data;
  } catch (err) {
    console.log("Error at getCars(): ", err);
  }
};

// GET ONE CAR
export const getCar = async (id) => {
  try {
    const res = await api.get(`/cars/${id}`);
    return res.data;
  } catch (err) {
    console.log("Error at getCar(): ", err);
  }
};

// CREATE CAR
export const createCar = async (car) => {
  try {
    const res = await api.post("/cars", car);
    return res.data;
  } catch (err) {
    console.log("Error at createCar(): ", err);
  }
};

// UPDATE CAR
export const updateCar = async (id, car) => {
  try {
    const res = await api.put(`/cars/${id}`, car);
    return res.data;
  } catch (err) {
    console.log("Error at updateCar(): ", err);
  }
};

// DELETE CAR
export const deleteCar = async (id) => {
  try {
    const res = await api.delete(`/cars/${id}`);
    return res.data;
  } catch (err) {
    console.log("Error at deleteCar(): ", err);
  }
};

// SEARCH BY MAKE
export const searchMake = async (make) => {
  try {
    const res = await api.get(`/cars/make/${make}`);
    return res.data;
  } catch (err) {
    console.log("Error at searchMake(): ", err);
  }
};

// SEARCH BY MODEL
export const searchModel = async (model) => {
  try {
    const res = await api.get(`/cars/model/${model}`);
    return res.data;
  } catch (err) {
    console.log("Error at searchModel(): ", err);
  }
};

// SEARCH BY TYPE
export const searchType = async (type) => {
  try {
    const res = await api.get(`/cars/type/${type}`);
    return res.data;
  } catch (err) {
    console.log("Error at searchType(): ", err);
  }
};

// SEARCH BY YEAR
export const searchYear = async (year) => {
  try {
    const res = await api.get(`/cars/year/${year}`);
    return res.data;
  } catch (err) {
    console.log("Error at searchYear(): ", err);
  }
};

// SEARCH BY COLOR
export const searchColor = async (color) => {
  try {
    const res = await api.get(`/cars/color/${color}`);
    return res.data;
  } catch (err) {
    console.log("Error at searchColor(): ", err);
  }
};

// SEARCH BY PRICE
export const searchPrice = async (minPrice, maxPrice) => {
  try {
    const res = await api.get(`/cars/price`, {
      params: {
        minPrice: minPrice,
        maxPrice: maxPrice,
      },
    });
    return res.data;
  } catch (err) {
    console.log("Error at searchPrice(): ", err);
  }
};
