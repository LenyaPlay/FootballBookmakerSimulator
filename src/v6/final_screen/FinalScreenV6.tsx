import { MouseEventHandler, useContext, useState } from "react";
import { getPoints, getPointsBeforeChampionship } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"
import { GameContext } from "src/App";
import { Stage } from "src/utils/GameTypes";


export function FinalScreenV6() {
    const navigate = useNavigate();
    const gameContext = useContext(GameContext);
    const income = gameContext?.current?.income as number;
    const prefix = income > 0 ? "+" : "";

    const onClickResult : MouseEventHandler = (e) => {
        gameContext?.current?.setStage(Stage.StartChampionship);
        navigate('/menu');
    }

    const winClass = income > 0 ? style.win : income < 0 ? style.lose : "";

    return (
        <div className={style.finalScreen + ' ' + winClass}>
            <h1>общий выигрыш <br /> составил</h1>
    
            <div onClick={onClickResult} className={style.circle}>
                <p className={style.number + " " + winClass}>{prefix + (~~(income)).toLocaleString('de-DE').replaceAll('.', ' ')}</p>
            </div>
        </div>);
}

