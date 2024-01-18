import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"
import { Game } from "src/utils/Game";
import type { Match } from "src/utils/Game";
import { TEAMS } from "src/utils/Utils";

function MatchV4(props : any) {
    const navigate = useNavigate();
    const [topAnimation, setTopAnimation] = useState(0);
    const [animationTimeout] = useState((props.number - 1) * 150);

    const [match, setMatch] = useState<Match>(props.match);
    const [inputText, setInputText] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);



    const betOnClick = (id : number) => {
        if (!match.bet) {
            match.bet = Game.getEmptyBet();
        }
        match.bet.teamId = id;
        if (id == match.team1.id) {
            setActiveIndex(0);
        }
        if (id == match.team2.id) {
            setActiveIndex(1);
        }
    };

    const onChangeInput = (event : any) => {
        let input = event.currentTarget.value;
        let value = parseInt(event.currentTarget.value);

        if(!match.bet) {
            match.bet = Game.getEmptyBet();
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

    useEffect(() => {
        setTimeout(() => setTopAnimation(1), animationTimeout);
    })

    return (
        <div className={`${style.matchContainer} ${style.v4}`}>
            <div style={{
                top: (topAnimation - 1) * 100 + "%",
                opacity: topAnimation,
                zIndex: 100 - props.number,
            }} className={`${style.match} game-${props.number}`}>
                <p className={`${style.gameText}`}>Jogo {props.number}</p>
                <p className={`${style.betText}`}>Escolha um vencedor e faça uma aposta</p>

                <div className={style.countries}>
                    <Country k={match.k1} active={activeIndex == 0} team={match.team1} betOnClick={betOnClick}></Country>
                    <div className={style.divider}><div></div></div>
                    <Country k={match.k2} active={activeIndex == 1} team={match.team2} betOnClick={betOnClick}></Country>
                </div>
                <div className={style.buttons} >
                        <Country2 k={match.k1} active={activeIndex == 0} team={match.team1} betOnClick={betOnClick}/>
                        <Country2 k={match.k2} active={activeIndex == 1} team={match.team2} betOnClick={betOnClick}/>
                </div>
                <input className={style.input} onChange={onChangeInput} value={inputText} placeholder="Insira o valor da aposta..."></input>

            </div>
        </div>

    );
}

function Country(props : any) {
    const { k, team, betOnClick, active } = props;

    return (
        <div className={style.country} >
           <p className={style.countryText}>{team.name}</p>
           <img className={`${style.countryImage}`} src={team.image} />
            <div className={style.force}>
                <p>Força da equipe:</p>
                <p>{(~~team.force).toLocaleString('de-DE')}</p>
            </div>
        </div>);
}


function Country2(props : any) {
    const { k, team, betOnClick, active } = props;

    return (
        <div onClick={(e) => betOnClick(team.id)} className={`${style.betButton} ${active && style.active}`}>
                <div className={style.outCircle}>
                    <div className={`${style.innerCircle} ${!active && style.none}`}></div>
                </div>
                <div className={style.buttonText}>
                    <p>Vencedor 1</p>
                    <p>Relação {k.toFixed(2)}</p>
                </div>
            </div>);
}

export default MatchV4;
