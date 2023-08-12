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
    const cars = await getCars();
    setCars(cars);
    console.log(cars);
  }

  return (
    <div className="all-cars-screen">
      <Sidebar />
      <div className="all-cars-grid">
        {cars.map((car) => (
          <CarPreview car={car} key={car._id} /> // create list of image + make, model for each car
        ))}
      </div>
    </div>
  );
}
