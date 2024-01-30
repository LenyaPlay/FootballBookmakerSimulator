import { ButtonV6 } from "src/components/buttons/ButtonV6";
import style from "./style.module.scss"
import { MouseEventHandler, useState } from "react";
import { getPoints, setPoints } from "src/utils/Utils";
import { useNavigate } from "react-router-dom";
import { PointsV6Components } from "src/components/points/PointsV6Component";

export function MyPointsScreenV6() {
    const [_points, _setPoints] = useState(getPoints());
    const navigate = useNavigate();


    const onBackClick: MouseEventHandler = (event) => {
        navigate('/menu');
    }

    const onResetPointsClick: MouseEventHandler = (event) => {
        _setPoints(100000);
        setPoints(100000);
    }

    return <div className={style.menu}>
        <div className={style.div1} onClick={onBackClick}>
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5881 28L0 14L13.5881 0L16 2.485L4.82378 14L16 25.515L13.5881 28Z" fill="#FFD600" />
            </svg>
            <h1>мои очки</h1>
        </div>

        <div className={style.div2}>
            <span>Баланс:</span>
            <PointsV6Components/>
        </div>

        <div className={style.div3}><ButtonV6 onClick={onResetPointsClick}>сбросить очки</ButtonV6></div>
        <div >
            <h1 className={style.text1}>как получать<br />очки</h1>
            <p className={style.text2}>
                <span>Анализируйте Команды.</span> <br />
                <span>Учитывайте место проведения матча и погодные условия, так как они могут влиять на результаты.</span><br />
                <span>Информация о тренерах может дать представление о возможном исходе игры.</span><br />
                <span>Сравните коэффициенты, чтобы найти наиболее выгодные ставки.</span><br />
                <span>Определяйте размер ставок в зависимости от вашего бюджета и стратегии управления средствами.</span><br />
                <span>За каждую успешную ставку вы получаете очки. </span><br />
                <span>Размер выигрыша зависит от коэффициентов и суммы ставки.</span><br />
                <span>Чем активнее вы делаете ставки и анализируете игры, тем больше шансов накопить значительное количество очков.</span><br />
            </p>
        </div>
    </div>
}