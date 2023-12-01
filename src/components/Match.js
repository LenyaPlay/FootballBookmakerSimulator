import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEAMS, generateForces, getMatches } from "../Utils";


function Match(props) {
  const navigate = useNavigate();
  const image_size = window.innerWidth / 3.5;

  const [match, setMatch] = useState(props.match);
  const [inputText, setInputText] = useState('');

  const betOnClick = (event, id) => {
    document.querySelectorAll('.bet-button').forEach((e) => {
      if (e == event.currentTarget) {
        return;
      }
      e.classList.remove('bet-button-active');
      e.querySelector('.inner-circle').classList.add('none');
    });

    if (event.currentTarget.classList.contains('bet-button-active')) {
      event.currentTarget.classList.remove('bet-button-active');
      event.currentTarget.querySelector('.inner-circle').classList.add('none');
      match.bet.id = undefined;
    } else {
      event.currentTarget.classList.add('bet-button-active');
      event.currentTarget.querySelector('.inner-circle').classList.remove('none');
      match.bet.id = id;
    }
  }

  const onChangeInput = (event) => {
    let input = event.currentTarget.value;
    let value = parseInt(event.currentTarget.value);

    if(input == '') {
      match.bet.bet = undefined;
      setInputText('');
      return;
    }

    if (isNaN(value) || value + '' != input) {
      if( match.bet.bet != undefined) {
        setInputText( match.bet.bet);
        console.log( 'setted 1');
      } else {
        setInputText('');
        console.log( 'setted 2');
      }
      return;
    }

    setInputText(input);
    
    match.bet.bet = value;
  }

  useEffect(() => {
    
  })


  return (
    <div className="match">
      <p className="game-text">Jogo {props.number}</p>
      <p className="bet-text">Escolha um vencedor e faça uma aposta</p>
      <div className="countries">
        <div className="country">
          <img style={{ width: image_size, height: image_size }} src={match.team1.image} className="country-image"></img>
          <p className="country-text">{match.team1.name}</p>
          <div className="force">
            <p>Força da equipe:</p>
            <p>{(~~match.team1.force).toLocaleString('de-DE')}</p>
          </div>
          <div onClick={(e) => betOnClick(e, match.team1.id)} className="bet-button">
            <div className="out-circle">
              <div className="inner-circle none"></div>
            </div>
            <div>
              <p>Vencedor 1</p>
              <p>Relação {match.team1.k.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="country">
          <img style={{ width: image_size, height: image_size }} src={match.team2.image} className="country-image"></img>
          <p className="country-text">{match.team2.name}</p>
          <div className="force">
            <p>Força da equipe:</p>
            <p>{(~~match.team1.force).toLocaleString('de-DE')}</p>
          </div>
          <div onClick={(e) => betOnClick(e, match.team2.id)} className="bet-button">
            <div className="out-circle">
              <div className="inner-circle none"></div>
            </div>
            <div>
              <p>Vencedor 2</p>
              <p>Relação {match.team2.k.toFixed(2)}</p>
            </div>
          </div>
        </div>



      </div>

      <input onChange={onChangeInput} value={inputText} placeholder="Insira o valor da aposta..." className="bet-input"></input>
    </div>
  );
}

export default Match;
