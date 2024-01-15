import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../../utils/Utils";
import rootStyle from "src/styles/styles.module.css"
import style from "./style.module.css"

function MenuScreenBlue() {
  const navigate = useNavigate();
  const [_, setRerender] = useState(0);

  const onPlayClick = (e) => {
    navigate('/period');
  }

  const onTeamsClick = (e) => {
    navigate('/national_teams');
  }

  const resetPoints = (e) => {
    setRerender(x => x + 1);
    setPoints(10000);
  }

  const onHelpClick = (e) => {
    navigate('/help');
  }

  return (
    <div className={`${rootStyle.baseContainer} ${style.bg} ${style.blue}`}>
      <div className={`${style.center} ${style.blue}`}>
        <button className={`${style.blueButton}`} onClick={onPlayClick}>Jogar o Campeonato</button>
        <button className={`${style.blueButton}`} onClick={onTeamsClick}>Equipes nacionais</button>
        <button className={`${style.blueButton}`} onClick={resetPoints}>Repor os óculos</button>
        <button className={`${style.blueButton}`} onClick={onHelpClick}>Um pouco de treino</button>
      </div>
    </div>
  );
}

export default MenuScreenBlue;
