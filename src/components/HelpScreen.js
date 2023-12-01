import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../Utils";

function HelpScreen() {
  const navigate = useNavigate();
  const [_, setRerender] = useState(0);

  const onPlayClick = (e) => {
    navigate('/period');
  }

  const resetPoints = (e) => {
    setRerender(x => x + 1);
    setPoints(10000);
    setPeriod([]);
  }

  return (
    <div className="menu-screen">
      <div className="center">
        <button onClick={onPlayClick}className="default-button">Jogar o Campeonato</button>
        <button onClick={resetPoints} className="default-button">Repor os óculos</button>
        <button className="default-button">Um pouco de treino</button>

        {/* <button onClick={() => {setFill(Math.random())}}>de</button> */}
      </div>
    </div>
  );
}

export default HelpScreen;
