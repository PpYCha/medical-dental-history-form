import React, { useState } from "react";

function ToggleButton({ text }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleToggle}
        className={`${
          isToggled ? "bg-green-500" : "bg-gray-300"
        } relative h-6 w-12 rounded-full transition-colors duration-300`}
      >
        <div
          className={`${
            isToggled ? "translate-x-6" : "translate-x-0"
          } absolute top-1/2 h-5 w-5 -translate-y-1/2 transform rounded-full bg-white transition-transform duration-300`}
        ></div>
      </button>
      <p>{text}</p>
    </div>
  );
}

export default ToggleButton;
