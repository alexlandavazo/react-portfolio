import React from 'react';

const NavBar = () => {
  return (
    <div className="flex w-full h-16 text-xl font-semibold">
      <div className="flex basis-3/5 justify-between">
        <span className="basis-56">Alejandro Landavazo</span>
        <span className="basis-44">Front end engineer</span>
        <span>Based in Mexico</span>
      </div>

      <div className="flex justify-end basis-2/5 gap-2">
        <span>Work,</span>
        <span>About,</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default NavBar;
