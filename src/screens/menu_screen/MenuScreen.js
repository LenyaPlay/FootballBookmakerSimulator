import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../../utils/Utils";
import rootStyle from "src/styles/styles.module.css"
import style from "./style.module.css"

function MenuScreen() {
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
    setPeriod([]);
  }

  const onHelpClick = (e) => {
    navigate('/help');
  }

  return (
    <div className={`${rootStyle.baseContainer} ${style.bg}`}>
      <div className={`${style.center}`}>
        <button className={style.button} onClick={onPlayClick}>Jogar o Campeonato</button>
        <button className={style.button} onClick={onTeamsClick}>Equipes nacionais</button>
        <button className={style.button} onClick={resetPoints}>Repor os óculos</button>
        <button className={style.button} onClick={onHelpClick}>Um pouco de treino</button>
      </div>
    </div>
  );
}

export default MenuScreen;