import { useState } from "react";
const Player = ({ initialName, symbol, isActive }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    // setPlayerName('')
  };

  const handleInputChange = (e) => {
    setPlayerName((prev) => {
      return prev = e.target.value;
    });
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input value={playerName} onChange={handleInputChange} />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
