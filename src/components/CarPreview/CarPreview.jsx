import { useState } from "react";
import CarDetailModal from "../CarDetailModal/CarDetailModal";
import "./CarPreview.css";

export default function CarPreview({ car }) {
  const [showCarDetailModal, setShowCarDetailModal] = useState(false);

  const handleClick = (e) => {
    setShowCarDetailModal(true);
  };

  return (
    <div className="car-preview-container">
      <div className="car-preview-info" onClick={handleClick}>
        <img src={car.image} width="300px" alt={`${car.make} ${car.model}`} />
        <p>{`${car.make} ${car.model}`}</p>
      </div>
      {showCarDetailModal && (
        <CarDetailModal
          car={car}
          setShowCarDetailModal={setShowCarDetailModal}
        />
      )}
    </div>
  );
}
