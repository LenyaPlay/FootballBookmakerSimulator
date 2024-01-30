import { ButtonV6 } from "src/components/buttons/ButtonV6";
import style from "./style.module.scss"
import { MouseEventHandler, useState } from "react";
import { getPoints, setPoints } from "src/utils/Utils";
import { useNavigate } from "react-router-dom";
import { PointsV6Components } from "src/components/points/PointsV6Component";

export function HelpScreenV6() {
    const [_points, _setPoints] = useState(getPoints());
    const navigate = useNavigate();


    const onBackClick: MouseEventHandler = (event) => {
        navigate('/menu');
    }


    return <div className={style.menu}>
        <div className={style.div1} onClick={onBackClick}>
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5881 28L0 14L13.5881 0L16 2.485L4.82378 14L16 25.515L13.5881 28Z" fill="#FFD600" />
            </svg>
            <h1>Обучение</h1>
        </div>

        <div >
            <h2 className={style.text1}>Выбор лиги</h2>
            <p className={style.text2}>Для начала необходимо выбрать лигу</p>
            <img src={require("src/assets/v6/help/1.png")} alt="" />
            <h2 className={style.text1}>Ставки</h2>
            <p className={style.text2}>После этого будет выведен список предстоящих матчей</p>
            <img src={require("src/assets/v6/help/2.png")} alt="" />
            <p className={style.text2}>Чтобы сделать ставку, нужно выбрать команду и ввести сумму</p>
            <img src={require("src/assets/v6/help/3.png")} alt="" />
            <p className={style.text2}>Далее будут произведён подсчёт результатов</p>
            <img src={require("src/assets/v6/help/4.png")} alt="" />
            <p className={style.text2}>И выведен результат турнира</p>
            <img src={require("src/assets/v6/help/5.png")} alt="" />
            <p className={style.text2}>Чтобы вернуться, нажмите на зеленую или красную область</p>

        </div>
    </div>
}