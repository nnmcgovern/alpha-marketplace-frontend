import { useEffect, useState } from "react";
import NewCarModal from "../../components/NewCarModal/NewCarModal";
import MyItems from "../../components/MyItems/MyItems";
import { getUserIdByUsername } from "../../services/users";

export default function MyAccount() {
  const [showNewCarModal, setShowNewCarModal] = useState(false);
  const [myItems, setMyItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); // to fix error where user becomes undefined on account page reload

  // console.log("myacct user: ", user);

  useEffect(() => {
    fetchUserId();
    // console.log("may acct useeffect user: ", user);
  }, []);

  async function fetchUserId() {
    const userId = await getUserIdByUsername(user.username);
    console.log("user id: ", userId.id);
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
