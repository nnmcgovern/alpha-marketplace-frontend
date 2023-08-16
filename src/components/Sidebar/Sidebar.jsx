import { useState } from 'react';
import {
  checked,
  setChecked,
  setSelectedMake,
  selectedMake,
} from '../../screens/AllCars/AllCars.jsx';

export default function Sidebar({
  checked,
  setChecked,
  selectedMake,
  setSelectedMake,
}) {
  const [activeMenu, setActiveMenu] = useState(false); //update the status of active menu

  const handleMenuClick = () => {
    setActiveMenu((prev) => !prev);
  }; //event handle function to drop down the menu or not

  const handleCheckedChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedMake(name);
    } else if (selectedMake === name) {
      setSelectedMake('');
    }
    setChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className='sidebar'>
      <div onClick={() => handleMenuClick('make')}>Make</div>
      {activeMenu && (
        <div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Audi'
              name='audi'
              value={checked.audi}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Audi'>Audi</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='BMW'
              name='bmw'
              value={checked.bmw}
              onChange={handleCheckedChange}
            />
            <label htmlFor='BMW'>BMW</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Chevrolet'
              name='chevrolet'
              value={checked.box3}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Chevrolet'>Chevrolet</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Dodge'
              name='dodge'
              value={checked.box4}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Dodge'>Dodge</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Ford'
              name='ford'
              value={checked.box5}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Ford'>Ford</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Honda'
              name='honda'
              value={checked.box6}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Honda'>Honda</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Hyundai'
              name='hyundai'
              value={checked.box7}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Hyundai'>Hyundai</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Jeep'
              name='jeep'
              value={checked.box8}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Jeep'>Jeep</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Kia'
              name='kia'
              value={checked.box9}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Kia'>Kia</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Mazda'
              name='mazda'
              value={checked.box10}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Mazda'>Mazda</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Mercedes-Benz'
              name='mercedes-benz'
              value={checked.box11}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Mercedes-Benz'>Mercedes-Benz</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Nissan'
              name='nissan'
              value={checked.box12}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Nissan'>Nissan</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Subaru'
              name='subaru'
              value={checked.box13}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Subaru'>Subaru</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='Volkswagen'
              name='volkswagen'
              value={checked.box14}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Volkswagen'>Volkswagen</label>
          </div>
        </div>
      )}
      {/*short-circuit evaluation; if both true, show the menu */}
    </div>
  );
}
