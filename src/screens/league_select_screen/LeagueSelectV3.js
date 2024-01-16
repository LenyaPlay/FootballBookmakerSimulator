import React, { useContext } from 'react'
import rootStyle from "src/styles/styles.module.scss"
import style from "./style.module.scss"
import { useNavigate } from 'react-router-dom'
import { GameContext } from 'src/App';
import { Stage } from 'src/utils/Game';

export default function LeagueSelectV3() {
    const navigate = useNavigate();
    const gameContext = useContext(GameContext);

    const navigateToFootball = () =>  {
        gameContext.current = gameContext.football;
        navigate(gameContext.current.setStage(Stage.StartMatch));
    }
    
    const navigateToBasketball = () =>  {
         gameContext.current = gameContext.basketball;
        navigate(gameContext.current.setStage(Stage.StartMatch));
    }
    
    const navigateToHockey = () =>  {
        gameContext.current = gameContext.hockey;
        navigate(gameContext.current.setStage(Stage.StartMatch));
    }

    return (
        <div className={`${rootStyle.baseContainer} ${style.v3} ${style.bg}`}>
            <div className={`${style.center}`}>
                <p className={`${style.mainText}`}>Escolha uma liga:</p>
                <button className={`${style.button}`} onClick={navigateToFootball} >Liga Mundial de futebol</button>
                <button className={`${style.button}`} onClick={navigateToBasketball}>Liga Mundial de Basquete</button>
                <button className={`${style.button}`} onClick={navigateToHockey}>Liga Mundial de Hóquei</button>
            </div>
        </div>
    )
}
