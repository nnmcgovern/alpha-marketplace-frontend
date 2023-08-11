import { useState } from "react";
import CarDetailModal from "../CarDetailModal/CarDetailModal";

export default function CarPreview({ car }) {
  const [showCarDetailModal, setShowCarDetailModal] = useState(false);

  const handleClick = (e) => {
    setShowCarDetailModal(true);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <img src={car.image} width="300px" alt={`${car.make} ${car.model}`} />
        <p>{`${car.make} ${car.model}`}</p>
      </div>
      {showCarDetailModal && (
        <CarDetailModal
          car={car}
          setShowCarDetailModal={setShowCarDetailModal} // pass set function so that close button on modal can change state
        />
      )}
    </div>
  );
}
