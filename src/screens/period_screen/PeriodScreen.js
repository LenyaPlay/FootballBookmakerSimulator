import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS, getPoints,  setPoints, setPointsBeforeChampionship } from "../../utils/Utils";
import style from "./style.module.css"
import MatchBlue from "src/components/match/MatchBlue";
import { GameContext } from "src/App";

function PeriodScreen(props) {
  const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
  const navigate = useNavigate();

  const [points, _] = useState(getPoints());

  
  const gameContext = useContext(GameContext);
  const matches = gameContext.current.matches;
  
  useEffect(() => {
    setTimeout(() => setPeriodBorderHeight(0), 50);
  }, []);

  const onClickCalculate = (event) => {

    const sum = matches.map(m => m.bet.id != undefined && m.bet.bet != undefined ? m.bet.bet : 0).reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0);
    if (sum > getPoints()) {
      alert('As apostas são muito altas')
      return;
    }

    
    
    navigate('/load_result');
  }

  return (
    <div className={`${style.periodScreen}`}>
      <div className={style.periodBorderContainer}>
        <div style={{ top: periodBorderHeight * 100 + '%' }} className={`${style.periodBorder}`}>
          <p className={style.period}>{matches.length == 1 ? "" : `1/${matches.length} `}FINAL</p>
          <p className={style.points}>{(~~points).toLocaleString('de-DE')} pontos</p>
        </div>
      </div>

      {matches.map((match, index) => <Match key={index} match={match} number={index + 1}></Match>)}
      <button className={style.button} onClick={onClickCalculate} style={{
        marginTop: 72,
        marginBottom: 67,
      }} >Calcular o período de jogo</button>
    </div>
  );
}

export default PeriodScreen;
