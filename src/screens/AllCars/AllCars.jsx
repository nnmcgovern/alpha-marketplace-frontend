import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CarPreview from "../../components/CarPreview/CarPreview";
import { getCars } from "../../services/cars";
import "./AllCars.css";
import "../../components/Sidebar/Sidebar.css";

export default function AllCars() {
  const [cars, setCars] = useState([]);
  const [checked, setChecked] = useState({});
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedMake, setSelectedMake] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    const cars = await getCars();
    setCars(cars);
  }

  let arr = [];
  for (const make in checked) {
    if (checked[make]) arr.push(make.toLowerCase());
  }

  return (
    <div>
      <Sidebar
        checked={checked}
        setChecked={setChecked}
        setSelectedModel={setSelectedModel}
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
      />
      <div className="all-cars-grid">
        {!Object.values(checked).includes(true) &&
          cars
            .filter((car) => !selectedModel || car.model === selectedModel)
            .map((car) => (
              <CarPreview car={car} key={car._id} /> // create list of image + make, model for each car
            ))}
        {cars
          .filter(
            (car) =>
              arr.includes(car.make.toLowerCase()) &&
              (!selectedModel || car.model === selectedModel)
          )
          .map((car) => (
            <CarPreview car={car} key={car._id} />
          ))}
      </div>
    </div>
  );
}
