import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateWinner, getPeriod, getPoints, getWinner, setPeriod, setPoints } from "../../utils/Utils";
import style from "./style.module.css"


function MatchResultV3(props) {
    const navigate = useNavigate();
    const [topAnimation, setTopAnimation] = useState(0);
    const [animationTimeout] = useState((props.number) * 250);

    const [match, setMatch] = useState(props.match);
    const [money, setMoney] = useState(props.match.money);

    useEffect(() => {
        setTimeout(() => setTopAnimation(1), animationTimeout);
    })

    console.log(match);

    return (
        <div className={`${style.matchContainer} ${style.v3} ${style.blue}`}>
            <div style={{
                top: (topAnimation - 1) * 100 + "%",
                opacity: topAnimation,
                zIndex: 100 - props.number,
            }} className={`${style.match} ${style.blue} ${style.matchResult}`}>
                <p className={`${style.gameText} ${style.blue}`}>Jogo {props.number}. Resultado</p>
                <div className={style.countries}>
                    <Country goals={match.goals1} team={match.team1} winner={match.winnerId == match.team1.id}></Country>
                    <div className={style.v3Divider}><div></div></div>
                    <Country goals={match.goals2} team={match.team2} winner={match.winnerId == match.team2.id}></Country>
                </div>
                {match.bet && match.bet.id && money == 0 && <p className={`${style.moneyText} ${style.draw}`}>0</p>}
                {(money != undefined && money != 0) && <p className={`${style.moneyText} ${money > 0 ? style.win : style.lose}`}>GANHO: {money > 0 && '+'}{money.toFixed(0)}</p>}
            </div>
        </div>

    );
}

function Country({ goals, team, winner }) {
    return (
        <div className={style.country} >
            <div style={{ position: 'relative'}} className={`${style.countryImageContainer}`}>
                <img className={`${style.countryImage} ${style.blue}`} style={{ width: '100%', height: '100%' }} src={team.image}  />
                {winner && <img className={`${style.winImage}`} src={require('src/assets/v3/winner.png')}></img>}
            </div>
            <p className={style.v3CountryText}>{team.name}</p>
            <p className={style.v3GoalText}>{goals}</p>
        </div>);
}


export default MatchResultV3;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }