import { useEffect, useState } from "react";
import NewCarModal from "../../components/NewCarModal/NewCarModal";
import MyItem from "../../components/MyItem/MyItem";
// import { getUserIdByUsername } from "../../services/users";
import { getCarByUserId } from "../../services/cars";

export default function MyAccount() {
  const [showNewCarModal, setShowNewCarModal] = useState(false);
  const [myItems, setMyItems] = useState([]);
  const [rerender, setRerender] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); // to fix error where user becomes undefined on account page reload

  console.log("myacct user: ", user);

  useEffect(() => {
    fetchItems();
  }, [rerender]);

  async function fetchItems() {
    const items = await getCarByUserId(user.id);
    console.log("user id: ", user.id);
    console.log("items: ", items);

    if (items) {
      setMyItems(items);
    }
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
      {/* <MyItems items={myItems} /> */}
      {myItems.map((item) => (
        <MyItem car={item} />
      ))}
      {showNewCarModal && (
        <NewCarModal
          user={user}
          setRerender={setRerender}
          setShowNewCarModal={setShowNewCarModal}
        /> // should appear when 'add new' button is clicked
      )}
    </div>
  );
}
