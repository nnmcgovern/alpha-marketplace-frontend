import { useState } from 'react';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null); //update the status of active menu
  const [checked, setChecked] = useState({
    box1: false,
    box2: false,
  });

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  }; //event handle function to drop down the menu or not

  const handleCheckedChange = (e) => {
    const { name, checked } = e.target;
    setChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const models = {
    bmw: ['X5', 'X3', 'X1'],
    nissan: ['Altima', 'Rogue', 'Leaf'],
  };

  return (
    <div>
      <div onClick={() => handleMenuClick('make')}>Make</div>
      {activeMenu === 'make' && (
        <div>
          <input
            type='checkbox'
            id='BMW'
            name='bmw'
            value={checked.box1}
            onChange={handleCheckedChange}
          />
          <label for='BMW'>BMW</label>
          <input
            type='checkbox'
            id='Nissan'
            name='nissan'
            value={checked.box2}
            onChange={handleCheckedChange}
          />
          <label for='Nissan'>Nissan</label>
        </div>
      )}
      {/*short-circuit evaluation; if both true, show the menu */}

      <div onClick={() => handleMenuClick('model')}>Model</div>
      {activeMenu === 'model' && (
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
