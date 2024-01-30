import { HeaderV6 } from "src/components/headers/HeaderV6";
import style from './style.module.scss'
import { PointsV6Components } from "src/components/points/PointsV6Component";
import { DarkButtonV6 } from "src/components/buttons/DarkButtonV6";
import { MatchV6Component, MatchV6ComponentType } from "./MatchV6Component";
import { GameContext, GameContextType, GameTypes } from "src/App";
import { MouseEventHandler, useContext } from "react";
import { MatchV6Type, Stage } from "src/utils/GameTypes";
import { getPoints } from "src/utils/Utils";

export function PeriodScreenV6 () {
    const gameContext = useContext<GameContextType | null>(GameContext);

    const onClickCalculate : MouseEventHandler = (event) => {
        const matches = gameContext?.current?.matches as MatchV6Type[];
        
        const sum = matches.map(m =>
            m.bet && m.bet.teamId && m.bet.sum  ? m.bet.sum : 0).reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0);
        if (sum > getPoints()) {
            alert('Недостаточно денег')
            return;
        }

        gameContext?.current?.setStage(Stage.FinishMatch);
    }

    const backgroundClass = gameContext?.current?.name == GameTypes.basketball ? style.basketball :
        gameContext?.current?.name == GameTypes.football ? style.football :
            gameContext?.current?.name == GameTypes.hockey ? style.hockey :
                gameContext?.current?.name == GameTypes.volleyball ? style.volleyball :
                    "";

    return <div className={style.periodScreen}>
        <HeaderV6 className={style.header + " " + backgroundClass}>
            <div className={style.info}>
                <pre><h1>{gameContext?.current?.getLeague()?.replace(" ", "\n")}</h1></pre>
                <pre><h2>{gameContext?.current?.getPeriod()?.replace(" ", "\n")}</h2></pre>
            </div>
            <div className={style.balance}>
                <span>Баланс: </span>
                <PointsV6Components/>
            </div>
        </HeaderV6>

        <div className={style.content}>
            <div>
                {gameContext?.current?.matches.map((v, i) => <MatchV6Component key={i} index={i} match={v as MatchV6Type}/>)}
            </div>
            <DarkButtonV6 onClick={onClickCalculate}>Рассчитать результат игры</DarkButtonV6>
        </div>
    </div>
}