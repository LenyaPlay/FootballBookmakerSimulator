import { MatchV6Type,  TeamV6Type } from "src/utils/GameTypes"
import style from './style.module.scss'

export interface MatchV6ComponentType {
    match: MatchV6Type,
    index: number,
}

type TeamComponentType = {
    team: TeamV6Type,
    k: number,
    onClick?: (id: number) => void,
    selected: boolean,
    goals: number,
}


export function MatchResultV6Component({ match, index }: MatchV6ComponentType) {
    
    
    const moneyClass = match.money as number > 0 ? style.win :  match.money as number < 0 ? style.lose : "";

    return <div className={`${style.match} ${style.result}`}>
        <h3 className={style.text1}>Игра {index + 1}</h3>
        <div className={style.teams}>
            <LeftTeamComponent goals={match.goals1 as number } team={match.team1} k={match.k1 as number} selected={match.winnerId == match.team1.id}  />
            <RightTeamComponent goals={match.goals2 as number} team={match.team2} k={match.k1 as number} selected={match.winnerId == match.team2.id} />
        </div>
        <div className={style.money}>
            <p className={moneyClass}>{match.money && match.money > 0 && '+'}{(~~(match.money as number)).toLocaleString('de-DE').replaceAll('.', ' ')}</p>
        </div>
    </div>
}

function LeftTeamComponent({ team, k, onClick, selected, goals }: TeamComponentType) {
    return <div className={`${style.teamLeft} ${selected == true ? style.winner : ""}`}>
        <span className={style.text2}>{team.name}</span>
        <div className={style.selector}>
            <div><img src={team.image} /></div>
            <span className={style.textGoals}>{goals}</span>
        </div>
    </div>
}

function RightTeamComponent({ team, k, onClick, selected, goals}: TeamComponentType) {
    return <div className={`${style.teamRight} ${selected == true ? style.winner : ""}`}>
        <span className={style.text2}>{team.name}</span>
        <div className={style.selector}>
            <span className={style.textGoals}>{goals}</span>
            <div><img src={team.image} /></div>
        </div>
    </div>
}

function SelectCircleComponent({ selected }: { selected?: boolean }) {
    return selected ?
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="9.5" stroke="#006835" strokeWidth="2" />
            <path d="M7.66667 18L1 11.1915L3.33333 8.80851L7.66667 13.234L18.6667 2L21 4.38298L7.66667 18Z" fill="#FFD600" />
        </svg>
        :
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="9.5" stroke="#006835" strokeWidth="2" />
        </svg>
}

