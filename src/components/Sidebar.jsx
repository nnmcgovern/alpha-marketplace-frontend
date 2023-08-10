import React, { useState } from 'react';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null); //update the status of active menu

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  }; //event handle function to drop down the menu or not

  return (
    <div>
      <div onClick={() => handleMenuClick('make')}>Make</div>
      {activeMenu === 'make' && (
        <div>
          <div>Option 1</div>
          <div>Option 2</div>
        </div>
      )}
      {/*short-circuit evaluation; if both true, show the menu */}
    </div>
  );
}
