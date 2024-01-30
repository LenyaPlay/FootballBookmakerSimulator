import { ButtonV6 } from "src/components/buttons/ButtonV6";
import { LoadingCircle } from "src/components/loading_circle/LoadingCircle";
import style from "./style.module.scss"
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

export function MenuScreenV6 () {
    const navigate = useNavigate();

    const onSelectLeagueClick : MouseEventHandler = (e) => {
        navigate('/game');
      }

    const onMyPointsClick : MouseEventHandler = (e) => {
        navigate('/mypoints');
    }

    const onTeamListClick : MouseEventHandler = (e) => {
        navigate('/teams');
    }

    const onHelpClick : MouseEventHandler = (e) => {
        navigate('/help');
    }

    return <div className={style.menu}>
        <h1>Меню</h1>
        <div>
            <ButtonV6 onClick={onSelectLeagueClick} borderBottom={0}>выбрать спортивную лигу</ButtonV6>
            <ButtonV6 onClick={onMyPointsClick} borderBottom={0}>мои очки</ButtonV6>
            <ButtonV6 onClick={onHelpClick} borderBottom={0}>обучение</ButtonV6>
            <ButtonV6 onClick={onTeamListClick}>список участников</ButtonV6>
        </div>
    </div>
}