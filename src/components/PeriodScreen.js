import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "./Match";
import MatchResult from "./MatchResult";
import { TEAMS, generateForces, generateWinner, genereateMatches, getPeriod, getPoints, hasPeriod, setPeriod, setPoints, setPointsBeforeChampionship } from "../Utils";


function PeriodScreen(props) {
  const [periodBorderHeight, setPeriodBorderHeight] = useState(0);
  const navigate = useNavigate();

  const [matches, setMatches] = useState([]);
  const [points, _] = useState(getPoints());

  useEffect(() => {
    if(hasPeriod()) {
      console.log('has');
      setMatches(getPeriod());
    } else {
      let _matches = genereateMatches(TEAMS);
      setMatches(_matches);
      setPeriod(_matches);
      setPointsBeforeChampionship(getPoints());
    }

    setTimeout(() => setPeriodBorderHeight(150), 50);
  }, []);

  const onClickCalculate = (event) => {
    
    const sum = matches.map(m => m.bet.id != undefined && m.bet.bet != undefined ? m.bet.bet : 0).reduce((accumulator, currentValue) => {return accumulator + currentValue
    }, 0);
    if(sum > getPoints()) {
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
          setPoints(getPoints() - match.bet.bet + _money );
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
    <div className="period-screen">
      <div style={{height: periodBorderHeight}} className="period-border">
            <p className="period">{matches.length == 1 ? "" : `1/${matches.length} `}FINAL</p>
            <p className="points">{(~~points).toLocaleString('de-DE')} pontos</p>
      </div>
      {matches.map((match, index) => <Match key={index} match={match} number={index+1}></Match>)}
      <button onClick={onClickCalculate} style={{marginTop: '70px'}} className="default-button">Calcular o período de jogo</button>
    </div>
  );
}

export default PeriodScreen;
