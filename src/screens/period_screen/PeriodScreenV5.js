import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEAMS, getPoints, setPoints, setPointsBeforeChampionship } from "../../utils/Utils";
import style from "./style.module.scss"
import { GameContext } from "src/App";
import MatchV5 from "src/components/match/MatchV5";

function PeriodScreenV5(props) {
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
        <div className={`${style.periodScreen} ${style.v5}`}>
            <div className={style.header}>
                <p className={style.text1}>fazer <br/>uma aposta</p>
                <p className={style.text2}>e escolher<br/>o vencedo</p>
            </div>
            <div className={style.periodBorderContainer}>
                <div style={{ top: periodBorderHeight * 100 + '%' }} className={`${style.periodBorder}`}>
                    <p className={`${style.period}`}>{gameContext.current.matches.length == 1 ? "" : `1/${gameContext.current.matches.length} `}FINAL</p>
                    <p className={`${style.points}`}>{(~~getPoints()).toLocaleString('de-DE')} pontos</p>
                </div>
            </div>

            {gameContext.current.matches.map((match, index) => <MatchV5 key={index} match={match} number={index + 1}/>)}
            <button className={style.button} onClick={onClickCalculate} style={{ margin: '37px 0px' }} >Продолжить турнир</button>
        </div>
    );
}

export default PeriodScreenV5;
