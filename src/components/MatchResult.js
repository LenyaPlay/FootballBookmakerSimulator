import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateWinner, getPeriod, getPoints, getWinner, setPeriod, setPoints } from "../Utils";


function MatchResult(props) {
    const navigate = useNavigate();

    const image_size = window.innerWidth / 3.5;
    const [match, setMatch] = useState(props.match);
    const [money, setMoney] = useState(props.match.money);
    const [goals, _] = useState(~~(Math.random() * 7) + 1);

    return (
        <div className="match">
            <p className="game-text">Jogo {props.number}</p>
            {match.bet.id != undefined && money == 0 && <p className={`money-text draw`}>0</p>}
            {(money != undefined && money != 0) && <p className={`money-text ${money > 0 ? 'win' : 'lose'}`}>GANHO: {money > 0 && '+' }{money.toFixed(0)}</p>}

            <div className="countries">
                <div className="country">
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: image_size, height: image_size }} src={match.team1.image} className="country-image" />
                        {match.winner != undefined && match.winner.id == match.team1.id && <img className="win-image left" src="winner.png"></img>}
                    </div>
                    <p className="country-text">{match.team1.name}</p>
                    <p className="goal-text">{goals}</p>
                </div>
                <div style={{height: '100%'}} className="divider"></div>
                <div className="country">
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: image_size, height: image_size }} src={match.team2.image} className="country-image" />
                        {match.winner != undefined && match.winner.id == match.team2.id && <img className="win-image left" src="winner.png"></img>}
                    </div>
                    <p className="country-text">{match.team2.name}</p>
                    <p className="goal-text">{match.winner.id == match.team2.id ? goals + getRandomInt(goals - 1) + 1 : goals - 1 - getRandomInt(goals - 1)}</p>
                </div>

            </div>

        </div>
    );
}

export default MatchResult;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  