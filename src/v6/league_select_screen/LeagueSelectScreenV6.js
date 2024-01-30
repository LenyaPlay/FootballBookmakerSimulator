import React, { useContext } from 'react'

import style from "./style.module.scss"
import { useNavigate } from 'react-router-dom'
import { GameContext } from 'src/App';
import { Stage } from "src/utils/GameTypes";
import { ButtonV6 } from 'src/components/buttons/ButtonV6';

export function LeagueSelectScreenV6() {
    const navigate = useNavigate();
    const gameContext = useContext(GameContext);

    const onBackClick = () => {
        navigate('/menu');
    }

    const navigateToFootball = () => {
        gameContext.current = gameContext.football;
        navigate(gameContext.current.setStage(Stage.StartMatch));
    }

    const navigateToBasketball = () => {
        gameContext.current = gameContext.basketball;
        navigate(gameContext.current.setStage(Stage.StartMatch));
    }

    const navigateToHockey = () => {
        gameContext.current = gameContext.hockey;
        navigate(gameContext.current.setStage(Stage.StartMatch));
    }

    const navigateToVolleyball = () => {
        gameContext.current = gameContext.volleyball;
        navigate(gameContext.current.setStage(Stage.StartMatch));
    }

    return (
        <div className={style.leagueSelect}>
            <div className={style.div1} onClick={onBackClick}>
                <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5881 28L0 14L13.5881 0L16 2.485L4.82378 14L16 25.515L13.5881 28Z" fill="#FFD600" />
                </svg>
                <h1>мои очки</h1>
            </div>
            <div>
                <ButtonV6 borderBottom={0} onClick={navigateToFootball} >Футбол</ButtonV6>
                <ButtonV6 borderBottom={0} onClick={navigateToHockey}>Хоккей</ButtonV6>
                <ButtonV6 borderBottom={0} onClick={navigateToBasketball}>Баскетбол</ButtonV6>
                <ButtonV6 onClick={navigateToVolleyball}>Волейбол</ButtonV6>
            </div>
        </div>
    )
}
