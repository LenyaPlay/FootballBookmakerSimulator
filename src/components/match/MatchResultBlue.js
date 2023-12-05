import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateWinner, getPeriod, getPoints, getWinner, setPeriod, setPoints } from "../../utils/Utils";
import style from "./style.module.css"


function MatchResultBlue(props) {
    const navigate = useNavigate();
    const [topAnimation, setTopAnimation] = useState(0);
    const [animationTimeout] = useState((props.number) * 250);

    const image_size = window.innerWidth / 3.5;
    const [match, setMatch] = useState(props.match);
    const [money, setMoney] = useState(props.match.money);

    const avg_goals = getRandomInt(1, 4);
    let [goals1, goals2] = [getRandomInt(0, avg_goals), getRandomInt(avg_goals, 7)];
    if(match.team1.id == match.winner.id) {
        [goals1, goals2] = [goals2, goals1] 
    }

    useEffect(() => {
        setTimeout(() => setTopAnimation(1), animationTimeout);
    })

    return (
        <div className={`${style.matchContainer} ${style.blue}`}>
            <div style={{
                top: (topAnimation - 1) * 100 + "%",
                opacity: topAnimation,
                zIndex: 100 - props.number,
            }} className={`${style.match} ${style.blue} ${style.matchResult}`}>
                <p className={`${style.gameText} ${style.blue}`}>Jogo {props.number}. Resultado</p>
                <div className={style.countries}>
                    <Country goals={goals1} team={match.team1} winner={match.winner != undefined && match.winner.id == match.team1.id}></Country>
                    <div style={{ height: '100%' }} className="divider"></div>
                    <Country goals={goals2} team={match.team2} winner={match.winner != undefined && match.winner.id == match.team2.id}></Country>
                </div>
                {match.bet.id != undefined && money == 0 && <p className={`${style.moneyText} ${style.draw}`}>0</p>}
                {(money != undefined && money != 0) && <p className={`${style.moneyText} ${money > 0 ? style.win : style.lose}`}>GANHO: {money > 0 && '+'}{money.toFixed(0)}</p>}
            </div>
        </div>

    );
}

function Country({ goals, team, winner }) {
    const image_size = window.innerWidth / 3.5;

    return (
        <div className={style.country} >
            <div style={{ position: 'relative' }}>
                <img className={`${style.countryImage} ${style.blue}`} style={{ width: image_size, height: image_size }} src={team.image}  />
                {winner && <img className={`${style.winImage}`} src={require('src/assets/blue_design/winner.png')}></img>}
            </div>
            <p className={style.blueCountryText}>{team.name}</p>
            <p className={style.goalText}>{goals}</p>
        </div>);
}


export default MatchResultBlue;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }