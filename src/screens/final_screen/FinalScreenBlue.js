import { useContext, useState } from "react";
import { getPoints, getPointsBeforeChampionship } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css"
import { GameContext } from "src/App";
import { Stage } from "src/utils/Game";


function FinalScreenBlue() {
    const navigate = useNavigate();
    const [income, setIncome] = useState(getPoints() - getPointsBeforeChampionship());
    const prefix = income > 0 ? "+" : "";
    const gameContext = useContext(GameContext);

    const onClickResult = (e) => {
        gameContext.current.setStage(Stage.StartChampionship);
    }


    return (
        <div className={`${style.finalScreen} ${style.bg} ${style.blue}`}>
            <div className={style.center}>
                <p className={style.finalText}>O Campeonato <br /> acabou!</p>
                <div onClick={onClickResult} className={`${style.result} ${income >= 0 ? style.win : style.lose}`}>
                    <p className={`${style.text}`}>Perda total:</p>
                    <p className={`${style.number} `}>{prefix + (~~income).toLocaleString('de-DE')}</p>
                </div>
            </div>
        </div>);
}

export default FinalScreenBlue;
