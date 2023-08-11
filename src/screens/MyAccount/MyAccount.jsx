import { useState } from "react";
import NewCarModal from "../../components/NewCarModal/NewCarModal";

export default function MyAccount() {
  const [showNewCarModal, setShowNewCarModal] = useState(false);

  return (
    <div>
      <h1>My Account</h1>
      {showNewCarModal ? (
        <NewCarModal setShowNewCarModal={setShowNewCarModal} />
      ) : (
        <></>
      )}
    </div>
  );
}
