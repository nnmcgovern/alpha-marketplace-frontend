import { useState } from "react";
import CarDetailModal from "../CarDetailModal/CarDetailModal";

export default function CarPreview({ car }) {
  const [showCarDetailModal, setShowCarDetailModal] = useState(false);

  const handleClick = (e) => {
    setShowCarDetailModal(true);
  };

  return (
    <div onClick={handleClick}>
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <p>{`${car.make} ${car.model}`}</p>
      {showCarDetailModal ? (
        <CarDetailModal
          car={car}
          setShowCarDetailModal={setShowCarDetailModal} // pass set function so that close button on modal can change state
        />
      ) : (
        <></>
      )}
    </div>
  );
}
