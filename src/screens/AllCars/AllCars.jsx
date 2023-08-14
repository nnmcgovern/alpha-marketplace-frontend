import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CarPreview from '../../components/CarPreview/CarPreview';
import { getCars } from '../../services/cars';
import './AllCars.css';
import '../../components/Sidebar/Sidebar.css';

export default function AllCars() {
  const [cars, setCars] = useState([]);
  const [checked, setChecked] = useState({});

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
      <Sidebar checked={checked} setChecked={setChecked} />
      <div className='all-cars-grid'>
        {!Object.values(checked).includes(true) &&
          cars.map((car) => (
            <CarPreview car={car} key={car._id} /> // create list of image + make, model for each car
          ))}
        {cars
          .filter((car) => arr.includes(car.make.toLowerCase()))
          .map((car) => (
            <CarPreview car={car} key={car._id} />
          ))}
      </div>
    </div>
  );
}
//if (checked.all === true) {
//{cars.map(car => (CarPreview... />))}}
//else {cars.filter(car.make === )}
