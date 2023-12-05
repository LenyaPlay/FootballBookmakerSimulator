import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS, generateForces, generateWinner, genereateMatches, getPeriod, getPoints, hasPeriod, setPeriod, setPoints, setPointsBeforeChampionship } from "../../utils/Utils";
import style from "./style.module.css"
import MatchBlue from "src/components/match/MatchBlue";

function PeriodScreen(props) {
  const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
  const navigate = useNavigate();

  const [matches, setMatches] = useState([]);
  const [points, _] = useState(getPoints());

  useEffect(() => {
    if (hasPeriod()) {
      console.log('has');
      setMatches(getPeriod());
    } else {
      let _matches = genereateMatches(TEAMS);
      setMatches(_matches);
      setPeriod(_matches);
      setPointsBeforeChampionship(getPoints());
    }

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

    matches.forEach(match => {
      generateWinner(match);

      if (match.bet.id != undefined && match.bet.bet != undefined) {
        let _money = 0;
        if (match.winner.id == match.bet.id) {
          if (match.team1.id == match.winner.id) {
            _money = match.bet.bet * match.team1.k;
          } else {
            _money = match.bet.bet * match.team2.k;
          }
          setPoints(getPoints() - match.bet.bet + _money);
        } else {
          _money = -match.bet.bet;
          setPoints(getPoints() - match.bet.bet);
        }
        match.money = _money;
      }
    })

    setPeriod(matches);
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
