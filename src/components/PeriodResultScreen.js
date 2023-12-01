import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "./Match";
import MatchResult from "./MatchResult";
import { TEAMS, generateForces, genereateMatches, getPeriod, getPoints, hasPeriod, setPeriod } from "../Utils";


function PeriodResultScreen(props) {
  const [periodBorderHeight, setPeriodBorderHeight] = useState(0);
  const navigate = useNavigate();

  const [matches, setMatches] = useState(getPeriod());
  const [points, setPoints] = useState(getPoints());

    useEffect(() => {
        setTimeout(() => setPeriodBorderHeight(150), 50);
    }, []);

  const onClickNext = (event) => {
    navigate('/load_result');
  }

  return (
    <div className="period-screen">
      <div style={{height: periodBorderHeight}} className="period-border">
            <p className="period">1/8 FINAL</p>
            <p className="points">{points.toLocaleString('de-DE')} pontos</p>
      </div>
      {matches.map((match, index) => <MatchResult key={index} match={match} number={index+1}></MatchResult>)}
      <button onClick={onClickNext} style={{marginTop: '70px'}} className="default-button">Próximo período de jogo</button>
    </div>
  );
}

export default PeriodResultScreen;
