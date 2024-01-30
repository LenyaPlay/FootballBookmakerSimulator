import { MatchV6Type, Stage, TeamV6Type } from "src/utils/GameTypes"
import style from './style.module.scss'
import { useState } from "react";
import { GameV6 } from "src/utils/GameV6";

export interface MatchV6ComponentType {
    match: MatchV6Type,
    index: number,
}

type TeamComponentType = {
    team: TeamV6Type,
    k: number,
    onClick: (id: number) => void,
    selected: boolean,
}



export function MatchV6Component({ match, index }: MatchV6ComponentType) {
    const [inputText, setInputText] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);
   

    const betOnClick = (id: number) => {
        if (!match.bet) {
            match.bet = GameV6.getEmptyBet();
        }

        match.bet.teamId = id;
        if (id == match.team1.id && activeIndex == 0 || id == match.team2.id && activeIndex == 1) {
            setActiveIndex(-1);
            match.bet = GameV6.getEmptyBet();
            return;
        }

        if (id == match.team1.id) {
            setActiveIndex(0);
        }
        if (id == match.team2.id) {
            setActiveIndex(1);
        }
    };

    console.log(match.bet);

    const onChangeInput = (event: any) => {
        let input = event.currentTarget.value;
        let value = parseInt(event.currentTarget.value);

        if (!match.bet) {
            match.bet = GameV6.getEmptyBet();
        }

        if (input == '') {
            match.bet.sum = undefined;
            setInputText('');
            return;
        }

        if (isNaN(value) || value + '' != input) {
            if (match.bet.sum != undefined) {
                setInputText(match.bet.sum + '');
                console.log('setted 1');
            } else {
                setInputText('');
                console.log('setted 2');
            }
            return;
        }

        setInputText(input);

        match.bet.sum = value;
    }

    return <div className={style.match}>
        <h3 className={style.text1}>Игра {index + 1}</h3>
        <div className={style.teams}>
            <LeftTeamComponent team={match.team1} k={match.k1 as number} selected={activeIndex == 0 ? true : false} onClick={betOnClick} />
            <RightTeamComponent team={match.team2} k={match.k2 as number} selected={activeIndex == 1 ? true : false} onClick={betOnClick} />
        </div>
        <div className={style.inputContainer}><input onChange={onChangeInput} value={inputText} placeholder="введите сумму ставки"></input></div>
    </div>
}

function LeftTeamComponent({ team, k, onClick, selected }: TeamComponentType) {
    return <div className={style.teamLeft}>
        <span className={style.text2}>{team.name}</span>
        <div className={style.selector} onClick={() => onClick(team.id)}>
            <div><img src={team.image} /></div>
            <SelectCircleComponent selected={selected} />
        </div>
        <div className={style.params}>
            <span>коэффициент: {k.toFixed(2)}</span>
            <span>сила команды: {team.force}</span>
            <span>{team.isInHome ? "дома" : "в гостях"}</span>
            <span>сила тренера: {team.trainerForce}</span>
        </div>
    </div>
}

function RightTeamComponent({ team, k, onClick, selected }: TeamComponentType) {
    return <div className={style.teamRight}>
        <span className={style.text2}>{team.name}</span>
        <div className={style.selector} onClick={() => onClick(team.id)}>
            <SelectCircleComponent selected={selected} />
            <div><img src={team.image} /></div>
        </div>
        <div className={style.params}>
            <span>коэффициент: {k.toFixed(2)}</span>
            <span>сила команды: {team.force}</span>
            <span>{team.isInHome ? "дома" : "в гостях"}</span>
            <span>сила тренера: {team.trainerForce}</span>
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

