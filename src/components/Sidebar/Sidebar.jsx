import { useState } from 'react';
import { checked, setChecked } from '../../screens/AllCars/AllCars.jsx';
export default function Sidebar({ checked, setChecked }) {
  const [activeMenu, setActiveMenu] = useState(false); //update the status of active menu

  const [activeModel, setActiveModel] = useState(false);

  const handleMenuClick = (menu) => {
    if (menu === 'make') {
      setActiveMenu((prev) => !prev);
    } else if (menu === 'model') {
      setActiveModel((prev) => !prev);
    }
  }; //event handle function to drop down the menu or not

  const handleCheckedChange = (e) => {
    const { name, checked } = e.target;
    setChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
    //if (all boxes unchecked) { setChecked({all:true}) return }
  };
  //if none of the boxes are checked, all true, then return
  //if one or more of the boxes are chekcked, make all false. and make appropriate boxes true
  //setChecked(...prev., [name]: checked,)

  //in all cars, filter through... all cars and return just the cars that are checked. then map through that
  //returned filter and render those on the page
  //
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
              value={checked.box1}
              onChange={handleCheckedChange}
            />
            <label htmlFor='Audi'>Audi</label>
          </div>
          <div className='checkbox-group'>
            <input
              type='checkbox'
              id='BMW'
              name='bmw'
              value={checked.box2}
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

      <div onClick={() => handleMenuClick('model')}>Model</div>
      {activeModel && (
        <select>
          <optgroup label='BMW'>
            <option value='X1'>X1</option>
            <option value='X3'>X3</option>
            <option value='X5'>X5</option>
          </optgroup>
          <optgroup label='Nissan'>
            <option value='Altima'>Altima</option>
            <option value='Rogue'>Rogue</option>
            <option value='Leaf'>Leaf</option>
          </optgroup>
        </select>
      )}
    </div>
  );
}
