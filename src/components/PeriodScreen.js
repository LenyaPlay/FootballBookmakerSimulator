import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "./Match";
import MatchResult from "./MatchResult";


function PeriodScreen() {
  const [periodBorderHeight, setPeriodBorderHeight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setPeriodBorderHeight(150), 50);
  }, []);


  return (
    <div className="period-screen">
      <div style={{height: periodBorderHeight}} className="period-border">
            <p className="period">1/8 FINAL</p>
            <p className="points">10.000 pontos</p>
      </div>
      <MatchResult></MatchResult>
      <Match></Match>
      <Match></Match>
    </div>
  );
}

export default PeriodScreen;
