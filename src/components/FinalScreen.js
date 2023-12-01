import { useState } from "react";
import { getPoints, getPointsBeforeChampionship } from "../Utils";
import { useNavigate } from "react-router-dom";

function FinalScreen() {
  const navigae = useNavigate();
  const [income, setIncome] = useState(getPoints() - getPointsBeforeChampionship());

  const onClickResult = (e) => {
    navigae('/menu');
  }


  return (
    <div className="final-screen">
      
      <div className="center">
        <p className="final-text">O Campeonato <br/> acabou!</p>
        <div onClick={onClickResult} className="result">
            <p className="text">Ganhos totais:</p>
            <p className={`number ${income >= 1 ? 'win' : income <= -1 ? 'lose' : 'draw'}`}>{(~~income).toLocaleString('de-DE')}</p>
        </div>

        {/* <button onClick={() => {setFill(Math.random())}}>de</button> */}
      </div>
    </div>
  );
}

export default FinalScreen;
