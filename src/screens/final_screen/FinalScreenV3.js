import { useContext, useState } from "react";
import { getPoints, getPointsBeforeChampionship } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css"
import { GameContext } from "src/App";
import { Stage } from "src/utils/Game";


function FinalScreenV3() {
    const navigate = useNavigate();
    const gameContext = useContext(GameContext);
    const [income, setIncome] = useState(gameContext.current.income);
    const prefix = income > 0 ? "+" : "";


    const onClickResult = (e) => {

        gameContext.current.setStage(Stage.StartChampionship);
        navigate('/menu');
    }


    return (
        <div className={`${style.finalScreen} ${style.v3} ${style.bg}`}>
            <div className={style.center}>
                <p className={style.finalText}>O Campeonato <br /> acabou!</p>
                <div onClick={onClickResult} className={`${style.result} ${income >= 0 ? style.win : style.lose}`}>
                    <p className={`${style.text}`}>Perda total:</p>
                    <p className={`${style.number} `}>{prefix + (~~income).toLocaleString('de-DE')}</p>
                </div>
            </div>
        </div>);
}

export default FinalScreenV3;
