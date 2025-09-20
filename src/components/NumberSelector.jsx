const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const numHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-end">
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="flex gap-6">
        {arr.map((value, i) => {
          const isSelected = value === selectedNumber;
          return (
            <div
              key={i}
              onClick={() => numHandler(value)}
              className={`w-[72px] h-[72px] grid place-items-center text-2xl font-bold border border-black cursor-pointer
                ${isSelected ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {value}
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-xl font-bold">Select Number</p>
    </div>
  );
};

export default NumberSelector;
