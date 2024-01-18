import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateWinner, getPeriod, getPoints, getWinner, setPeriod, setPoints } from "../../utils/Utils";
import style from "./style.module.scss"


function MatchResultV4(props) {
    const navigate = useNavigate();
    const [topAnimation, setTopAnimation] = useState(0);
    const [animationTimeout] = useState((props.number) * 250);

    const [match, setMatch] = useState(props.match);
    const [money, setMoney] = useState(props.match.money);

    useEffect(() => {
        setTimeout(() => setTopAnimation(1), animationTimeout);
    })

    console.log(match);

    const moneyPrefix = money > 0 ? "GANHO: " : money < 0 ? "PERDA: " : "";

    return (
        <div className={`${style.matchContainer} ${style.v4}`}>
            <div style={{
                top: (topAnimation - 1) * 100 + "%",
                opacity: topAnimation,
                zIndex: 100 - props.number,
            }} className={`${style.match} ${style.matchResult}`}>
                <p className={`${style.gameText}`} style={{ marginBottom: 10}}>Jogo {props.number}. Resultado</p>
                <div className={style.countries}>
                    <Country goals={match.goals1} team={match.team1} winner={match.winnerId == match.team1.id}></Country>
                    <div className={style.divider}><div></div></div>
                    <Country goals={match.goals2} team={match.team2} winner={match.winnerId == match.team2.id}></Country>
                </div>
                {match.bet && match.bet.id && money == 0 && <p className={`${style.moneyText} ${style.draw}`}>0</p>}

                {!(money != undefined && money != 0) &&
                    <div className={`${style.moneyText}`}>
                        <p>{0}</p>
                    </div>}

                {(money != undefined && money != 0) &&
                    <div className={`${style.moneyText} ${money > 0 ? style.win : style.lose}`}>
                        <p>{moneyPrefix}<br />{money > 0 && '+'}{(~~money).toLocaleString('de-DE')}</p>
                    </div>}
            </div>
        </div>

    );
}

function Country({ goals, team, winner }) {
    return (
        <div className={style.country} >
            <div className={style.textImageContainer}>
                <p className={style.countryText}>{team.name}</p>
                {winner && <img className={`${style.winImage}`} src={require('src/assets/v4/winner.png')}></img>}
            </div>
            <img className={`${style.countryImage}`} src={team.image} />
            <p className={style.goalText}>{goals}</p>
        </div>);
}


export default MatchResultV4;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}