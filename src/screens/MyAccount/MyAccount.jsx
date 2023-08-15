import { useEffect, useState } from "react";
import NewCarModal from "../../components/NewCarModal/NewCarModal";
import MyItem from "../../components/MyItem/MyItem";
import { getCarByUserId } from "../../services/cars";
import "./MyAccount.css";

export default function MyAccount() {
  const [showNewCarModal, setShowNewCarModal] = useState(false);
  const [myItems, setMyItems] = useState([]);
  const [rerender, setRerender] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); // to fix error where user becomes undefined on account page reload

  useEffect(() => {
    fetchItems();
  }, [rerender]);

  async function fetchItems() {
    const items = await getCarByUserId(user.id);

    if (items) {
      setMyItems(items);
    }
  }

  const handleClickNew = (e) => {
    setShowNewCarModal(true);
    document.body.classList.add("modal-open");
  };

  return (
    <div className="my-acct">
      {/* <div className="my-acct-sidebar">
        <button>My Listings</button>
        <button>My Favorites</button>
      </div> */}
      <h1 className="my-acct-welcome">
        Welcome, <span className="my-acct-user">{user.username}</span>!
      </h1>
      <div className="my-acct-listings-header">
        <h1>My Listings</h1>
        <button onClick={handleClickNew}>Add New</button>
      </div>
      {myItems.map((item) => (
        <MyItem car={item} setRerender={setRerender} />
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
