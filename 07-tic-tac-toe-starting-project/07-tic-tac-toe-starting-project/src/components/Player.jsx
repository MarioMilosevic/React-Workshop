import { useState } from "react";
const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input />}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};

export default Player;
