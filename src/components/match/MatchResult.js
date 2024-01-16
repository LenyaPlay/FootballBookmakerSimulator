import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateWinner, getPeriod, getPoints, getWinner, setPeriod, setPoints } from "../../utils/Utils";
import style from "./style.module.scss"


function MatchResult(props) {
    const navigate = useNavigate();
    const [topAnimation, setTopAnimation] = useState(0);
    const [animationTimeout] = useState((props.number) * 250);

    const image_size = window.innerWidth / 3.5;
    const [match, setMatch] = useState(props.match);
    const [money, setMoney] = useState(props.match.money);
    const [goals, _] = useState(~~(Math.random() * 7) + 1);

    useEffect(() => {
        setTimeout(() => setTopAnimation(1), animationTimeout);
    })

    return (
        <div className={style.matchContainer}>
            <div style={{
                top: (topAnimation - 1) * 100 + "%",
                opacity: topAnimation,
                zIndex: 100 - props.number,
            }} className={style.match}>
                <p className={style.gameText}>Jogo {props.number}. Resultado</p>
                {match.bet.id != undefined && money == 0 && <p className={`money-text draw`}>0</p>}
                {(money != undefined && money != 0) && <p className={`money-text ${money > 0 ? 'win' : 'lose'}`}>GANHO: {money > 0 && '+'}{money.toFixed(0)}</p>}

                <div className={style.countries}>
                    <Country goals={goals} team={match.team1} winner={match.winner != undefined && match.winner.id == match.team1.id}></Country>
                    <div style={{ height: '100%' }} className="divider"></div>
                    <Country goals={goals + getRandomInt(goals - 1) + 1} team={match.team2} winner={match.winner != undefined && match.winner.id == match.team2.id}></Country>
                </div>
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


export default MatchResult;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
