import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const roledice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore(prev => prev + randomNumber);
    } else {
      setScore(prev => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const reset = () => setScore(0);

  return (
    <main className="pt-[70px] px-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-around items-end mb-8 gap-8">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      {/* Dice Roller */}
      <RoleDice currDice={currentDice} roledice={roledice} />

      {/* Buttons */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          onClick={reset}
          className="px-6 py-2 border border-gray-500 rounded-md hover:bg-gray-200 transition"
        >
          Reset Score
        </button>
        <button
          onClick={() => setShowRules(prev => !prev)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>

      {/* Rules */}
      {showRules && <Rules />}
    </main>
  );
};

export default GamePlay;
