import { useState } from "react";
import { getPoints, getPointsBeforeChampionship } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"


function FinalScreen() {
  const navigae = useNavigate();
  const [income, setIncome] = useState(getPoints() - getPointsBeforeChampionship());

  const onClickResult = (e) => {
    
    navigae('/menu');
  }


  return (
    <div className={`${style.finalScreen} ${style.bg}`}>
      
      <div className={style.center}>
        <p className={style.finalText}>O Campeonato <br/> acabou!</p>
        <div onClick={onClickResult} className={style.result}>
            <p className={`${style.text}`}>Ganhos totais:</p>
            <p className={`${style.number} ${income >= 1 ? style.win : income <= -1 ? style.lose: style.draw}`}>{(~~income).toLocaleString('de-DE')}</p>
        </div>

        {/* <button onClick={() => {setFill(Math.random())}}>de</button> */}
      </div>
    </div>
  );
}

export default FinalScreen;
