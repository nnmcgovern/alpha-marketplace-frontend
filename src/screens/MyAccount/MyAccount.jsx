import { useState } from 'react';
import NewCarModal from '../../components/NewCarModal/NewCarModal';
import MyItems from '../MyItems/MyItems';

export default function MyAccount() {
  const [showNewCarModal, setShowNewCarModal] = useState(false);
  const [showItemsModal, setShowItemsModal] = useState(true);
  const items = [
    // example car
    {
      image: '',
      maker: 'Lamborghini',
      model: 'Urus',
      type: 'SUV',
      year: 2023,
      color: 'Yellow',
      price: 500000,
    },
    {
      image: '',
      maker: 'Porsche',
      model: '911 TurboS',
      type: 'Coupe',
      year: 2023,
      color: 'Red',
      price: 300000,
    },
  ];
  return (
    <div>
      <h1>My Account</h1>
      {showItemsModal && <MyItems items={items} />}
      {showNewCarModal && (
        <NewCarModal setShowNewCarModal={setShowNewCarModal} />
      )}
    </div>
  );
}
