import { useEffect, useState } from "react";
import NewCarModal from "../../components/NewCarModal/NewCarModal";
import MyItems from "../../components/MyItems/MyItems";
import { getUserIdByUsername } from "../../services/users";

export default function MyAccount({ user }) {
  const [showNewCarModal, setShowNewCarModal] = useState(false);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    fetchUserId();
  }, []);

  async function fetchUserId() {
    const userId = await getUserIdByUsername(user.username);
    console.log("user id: ", userId);
  }

  const handleClickNew = (e) => {
    setShowNewCarModal(true);
  };

  return (
    <div>
      {/* <div className="my-acct-sidebar">
        <button>My Listings</button>
        <button>My Favorites</button>
      </div> */}
      <h1>Welcome, {user.username}!</h1>
      <div className="my-acct-listings-header">
        <h1>My Listings</h1>
        <button onClick={handleClickNew}>Add New</button>
      </div>
      <MyItems items={myItems} />
      {showNewCarModal && (
        <NewCarModal user={user} setShowNewCarModal={setShowNewCarModal} /> // should appear when 'add new' button is clicked
      )}
    </div>
  );
}
