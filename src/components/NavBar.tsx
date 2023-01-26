import React from 'react';

const NavBar = () => {
  return (
    <div className="flex w-full h-16 text-xl font-semibold">
      <div className="flex basis-3/5 justify-between">
        <div className="basis-56">Alejandro Landavazo</div>
        <div className="basis-44">Front end engineer at Parsable</div>
        <div>Based in Mexico</div>
      </div>

      <div className="flex justify-end basis-2/5">
        <div>Work, </div>
        <div>About, </div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
