import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS, getPoints, setPoints, setPointsBeforeChampionship } from "../../utils/Utils";
import style from "./style.module.css"
import MatchBlue from "src/components/match/MatchBlue";
import { GameContext } from "src/App";
import MatchV3 from "src/components/match/MatchV3";
import { Stage } from "src/utils/Game";

function PeriodScreenV3(props) {
    const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
    const navigate = useNavigate();
    const gameContext = useContext(GameContext);
    const matches = gameContext.current.matches;
  
    const [points, _] = useState(getPoints());


    useEffect(() => {
        setTimeout(() => setPeriodBorderHeight(0), 50);
    }, []);

    const onClickCalculate = (event) => {
        const sum = matches.map(m =>
            m.bet && m.bet.teamId && m.bet.sum  ? m.bet.sum : 0).reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0);
        if (sum > getPoints()) {
            alert('As apostas são muito altas')
            return;
        }

        gameContext.current.setStage(Stage.FinishMatch);
    }

    return (
        <div className={`${style.periodScreen} ${style.v3}`}>
            <div className={style.periodBorderContainer}>
                <div style={{ top: periodBorderHeight * 100 + '%' }} className={`${style.periodBorder}`}>
                    <p className={`${style.period}`}>{gameContext.current.matches.length == 1 ? "" : `1/${gameContext.current.matches.length} `}FINAL</p>
                    <p className={`${style.points}`}>{(~~points).toLocaleString('de-DE')} pontos</p>
                </div>
            </div>

            {gameContext.current.matches.map((match, index) => <MatchV3 key={index} match={match} number={index + 1}></MatchV3>)}
            <button className={style.blueButton} onClick={onClickCalculate} style={{ margin: '37px 0px' }} >Calcular o período de jogo</button>
        </div>
    );
}

export default PeriodScreenV3;
