import { LoadingCircle } from "src/components/loading_circle/LoadingCircle";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './style.module.scss'
import { GameContext, GameContextType, GameTypes } from "src/App";

export function LoadingResultScreenV6 (props : any) {
    const navigate = useNavigate();
    const gameContext = useContext<GameContextType | null>(GameContext);

    
    useEffect(() => {
        setTimeout(() => {
            if(props.endLoading) {
               props.endLoading();
            }
        }, 750);
    }, []);

    
    const backgroundClass = gameContext?.current?.name == GameTypes.basketball ? style.basketball :
    gameContext?.current?.name == GameTypes.football ? style.football :
        gameContext?.current?.name == GameTypes.hockey ? style.hockey :
            gameContext?.current?.name == GameTypes.volleyball ? style.volleyball :
                "";


    return <div className={style.loadingScreen + " " + backgroundClass}>
        <h1>идет подсчет<br />результатов игры</h1>
        <LoadingCircle color="#FFD600"/>
    </div>
}