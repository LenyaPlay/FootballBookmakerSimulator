import { useContext, useState } from "react";
import { getPoints, getPointsBeforeChampionship } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"
import { GameContext } from "src/App";
import { Stage } from "src/utils/GameTypes";


function FinalScreenV5() {
    const navigate = useNavigate();
    const gameContext = useContext(GameContext);
    const [income, setIncome] = useState(gameContext.current.income);
    const prefix = income > 0 ? "+" : "";


    const onClickResult = (e) => {

        gameContext.current.setStage(Stage.StartChampionship);
        navigate('/menu');
    }


    const textPrefix = income > 0 ? "Ganhos" : "Perda";

    return (
        <div className={`${style.finalScreen} ${style.v5}`}>
            <div className={style.center}>
                <p className={style.text1}>O torneio terminou</p>
                <p className={style.text2}>Seu resultado</p>
                <div onClick={onClickResult} className={`${style.result} ${income >= 0 ? style.win : style.lose}`}>
                    <p className={`${style.number} `}>{prefix + (~~income).toLocaleString('en-UK')}</p>
                </div>
            </div>
        </div>);
}

export default FinalScreenV5;
