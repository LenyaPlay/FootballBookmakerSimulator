import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "./Match";
import MatchResult from "./MatchResult";
import { TEAMS, generateForces, generateWinner, genereateMatches, getPeriod, getPoints, hasPeriod, setPeriod } from "../Utils";


function PeriodScreen(props) {
  const [periodBorderHeight, setPeriodBorderHeight] = useState(0);
  const navigate = useNavigate();

  const [matches, setMatches] = useState([]);
  const [points, setPoints] = useState(getPoints());

  useEffect(() => {
    if(hasPeriod()) {
      console.log('has');
      setMatches(getPeriod());
    } else {
      let _matches = genereateMatches();
      setMatches(_matches);
      setPeriod(_matches);
    }

    setTimeout(() => setPeriodBorderHeight(150), 50);
  }, []);

  const onClickCalculate = (event) => {

    matches.forEach(match => {
      if (match.winner == undefined) {
        generateWinner(match);
      };
  
      if (match.bet.id != undefined && match.bet.bet != undefined) {
        let _money = 0;
        if (match.winner == match.bet.id) {
          if (match.team1.id == match.winner.id) {
            _money = match.bet.bet * match.team1.k;
          } else {
            _money = match.bet.bet * match.team2.k;
          }
        } else {
          _money = -match.bet.bet;
        }

        match.money = _money;
      }
    })

    setPeriod(matches);
    console.log(getPeriod());
    navigate('/load_result');
  }

  return (
    <div className="period-screen">
      <div style={{height: periodBorderHeight}} className="period-border">
            <p className="period">1/8 FINAL</p>
            <p className="points">{points.toLocaleString('de-DE')} pontos</p>
      </div>
      {matches.map((match, index) => <Match key={index} match={match} number={index+1}></Match>)}
      <button onClick={onClickCalculate} style={{marginTop: '70px'}} className="default-button">Calcular o período de jogo</button>
    </div>
  );
}

export default PeriodScreen;
