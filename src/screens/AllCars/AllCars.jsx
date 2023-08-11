import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CarPreview from "../../components/CarPreview/CarPreview";
// import get all function from API

export default function AllCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    // const cars = ...
    // setCars(cars)
  }

  return (
    <div>
      <h1>All Cars</h1>
      <Sidebar />
      {cars.map((car) => (
        <CarPreview car={car} /> // create list of image + make, model for each car
      ))}
    </div>
  );
}
