import { useState } from "react";
import NewCarModal from "../../components/NewCarModal/NewCarModal";
import MyItem from "../../components/MyItem/MyItem";

export default function MyAccount() {
  const [showNewCarModal, setShowNewCarModal] = useState(false);
  const [myItems, setMyItems] = useState([]);
  // const items = [
  //   // example car
  //   {
  //     image: '',
  //     maker: 'Lamborghini',
  //     model: 'Urus',
  //     type: 'SUV',
  //     year: 2023,
  //     color: 'Yellow',
  //     price: 500000,
  //   },
  //   {
  //     image: '',
  //     maker: 'Porsche',
  //     model: '911 TurboS',
  //     type: 'Coupe',
  //     year: 2023,
  //     color: 'Red',
  //     price: 300000,
  //   },
  // ];
  return (
    <div>
      <div className="my-acct-sidebar">
        <button>My Listings</button>
        <button>My Favorites</button>
      </div>
      <div className="my-acct-listings-header">
        <h1>My Account</h1>
        <button>Add New</button>
      </div>
      {myItems.map((item) => (
        <MyItem car={item} />
      ))}
      {/* {items && <MyItems items={items} />} */}
      {showNewCarModal && (
        <NewCarModal setShowNewCarModal={setShowNewCarModal} /> // should appear when 'add new' button is clicked
      )}
    </div>
  );
}
