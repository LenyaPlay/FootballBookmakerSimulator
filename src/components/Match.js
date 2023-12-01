import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Match() {
  const navigate = useNavigate();

  const image_size = window.innerWidth / 3.5;

  const betOnClick = (event) => {
    console.log(event.target);
    event.currentTarget.classList.toggle('bet-button-active');

    event.currentTarget.querySelector('.inner-circle').classList.toggle('none');
  }

  return (
    <div className="match">
      <p className="game-text">Jogo 1</p>
      <p className="bet-text">Escolha um vencedor e faça uma aposta</p>
      <div className="countries">
        <div className="country">
          <img style={{ width: image_size, height: image_size }} src="/flags/Argentina.png" className="country-image"></img>
          <p className="country-text">Brasil</p>
          <div className="force">
            <p>Força da equipe:</p>
            <p>160</p>
          </div>
          <div onClick={betOnClick} className="bet-button">
            <div className="out-circle">
              <div className="inner-circle"></div>
            </div>
            <div>
              <p>Vencedor 1</p>
              <p>Vencedor 1</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="country">
          <img style={{ width: image_size, height: image_size }} src="/flags/Argentina.png" className="country-image"></img>
          <p className="country-text">Brasil</p>
          <div className="force">
            <p>Força da equipe:</p>
            <p>160</p>
          </div>
          <div onClick={betOnClick} className="bet-button">
            <div className="out-circle">
              <div className="inner-circle"></div>
            </div>
            <div>
              <p>Vencedor 1</p>
              <p>Vencedor 1</p>
            </div>
          </div>
        </div>



      </div>

      <input placeholder="Insira o valor da aposta..." className="bet-input"></input>
    </div>
  );
}

export default Match;
