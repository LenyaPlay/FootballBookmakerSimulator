import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../../utils/Utils";
import rootStyle from "src/styles/styles.module.scss"
import style from "./style.module.scss"

function MenuScreenV5() {
  const navigate = useNavigate();
  const [_, setRerender] = useState(0);

  const onPlayClick = (e) => {
    navigate('/game');
  }

  const onTeamsClick = (e) => {
    navigate('/teams');
  }

  const onConfigClick = (e) => {
    navigate('/config');
  }


  const resetPoints = (e) => {
    setRerender(x => x + 1);
    setPoints(30000);
  }


  return (
    <div className={`${rootStyle.baseContainer} ${style.bg} ${style.v5}`}>
      <div className={`${style.center}`}>
        <h1 style={{marginBottom: 52}}>Menu</h1>
        <button className={`${style.button}`} onClick={onPlayClick}>Iniciar Torneio</button>
        <button className={`${style.button}`} onClick={onTeamsClick}>Lista de equipes</button>
        <button className={`${style.button}`} onClick={onConfigClick}>Configurações</button>
     </div>
    </div>
  );
}

export default MenuScreenV5;
