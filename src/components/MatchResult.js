import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MatchResult(props) {
    const navigate = useNavigate();

    const image_size = window.innerWidth / 3.5;



    return (
        <div className="match">
            <p className="game-text">Jogo 1. Resultado</p>
            {/* <p className="money-text win">GANHO: +1.190</p> */}
            <p className="money-text lose">GANHO: +1.190</p>
            <div className="countries">
                <div className="country">
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: image_size, height: image_size }} src="/flags/Argentina.png" className="country-image" />
                        <img className="win-image  left" src="/winner.png"></img>

                    </div>
                    <p className="country-text">Brasil</p>
                    <p className="goal-text">7</p>

                </div>
                <div style={{height: '100%'}} className="divider"></div>
                <div className="country">
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: image_size, height: image_size }} src="/flags/Argentina.png" className="country-image" />
                        <img className="win-image right" src="/winner.png"></img>
                    </div>
                    <p className="country-text">Brasil</p>
                    <p className="goal-text">4</p>
                </div>

            </div>

        </div>
    );
}

export default MatchResult;
