import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuScreen() {
  const [fill, setFill] = useState(1 / 5);
  const navigate = useNavigate();

  const onPlayClick = (e) => {
    navigate('/period');
  }

  return (
    <div className="menu-screen">
      <div className="center">
        <button onClick={onPlayClick}className="default-button">Jogar o Campeonato</button>
        <button className="default-button">Repor os óculos</button>
        <button className="default-button">Um pouco de treino</button>

        {/* <button onClick={() => {setFill(Math.random())}}>de</button> */}
      </div>
    </div>
  );
}

export default MenuScreen;
