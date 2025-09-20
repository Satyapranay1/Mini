import React from 'react';

const RoleDice = ({ roledice, currDice }) => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="cursor-pointer" onClick={roledice}>
        <img src={`/images/dice/dice_${currDice}.png`} alt={`dice ${currDice}`} />
      </div>
      <p className="text-2xl mt-4">Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
