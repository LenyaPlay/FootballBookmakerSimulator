import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateWinner, getPeriod, getPoints, getWinner, setPeriod, setPoints } from "../Utils";


function MatchResult(props) {
    const navigate = useNavigate();

    const image_size = window.innerWidth / 3.5;
    const [match, setMatch] = useState(props.match);
    const [money, setMoney] = useState(0);

    useEffect(() => {




    }, []);

    return (
        <div className="match">
            <p className="game-text">Jogo {props.number}</p>
            {/* <p className="money-text win">GANHO: +1.190</p> */}
            {match.bet.id != undefined && money == 0 && <p className={`money-text draw`}>0</p>}
            {money != 0 && <p className={`money-text ${money > 0 ? 'win' : 'lose'}`}>GANHO: {money > 0 && '+' }{money.toFixed(0)}</p>}

            <div className="countries">
                <div className="country">
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: image_size, height: image_size }} src={match.team1.image} className="country-image" />
                        {match.winner != undefined && match.winner.id == match.team1.id || <img className="win-image left" src="/winner.png"></img>}
                    </div>
                    <p className="country-text">Brasil</p>
                    <p className="goal-text">7</p>
                </div>
                <div style={{height: '100%'}} className="divider"></div>
                <div className="country">
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: image_size, height: image_size }} src={match.team2.image} className="country-image" />
                        {match.winner != undefined && match.winner.id == match.team2.id || <img className="win-image left" src="/winner.png"></img>}
                    </div>
                    <p className="country-text">Brasil</p>
                    <p className="goal-text">4</p>
                </div>

            </div>

        </div>
    );
}

export default MatchResult;
