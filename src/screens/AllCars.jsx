import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CarDetailModal from "../components/CarDetailModal";

export default function AllCars() {
  const [showCarDetailModal, setShowCarDetailModal] = useState(false);

  return (
    <div>
      <div>AllCars</div>
      <Sidebar />
    </div>
  );
}
