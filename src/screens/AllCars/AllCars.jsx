import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CarPreview from "../../components/CarPreview/CarPreview";
import { getCars } from "../../services/cars";
import "./AllCars.css";

export default function AllCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    // const cars = ...
    // setCars(cars)
    const cars = await getCars();
    setCars(cars);
  }

  return (
    <div>
      <h1>All Cars</h1>
      <Sidebar />
      <div className="allcars-grid">
        {cars.map((car) => (
          <CarPreview car={car} key={car._id} /> // create list of image + make, model for each car
        ))}
      </div>
    </div>
  );
}
