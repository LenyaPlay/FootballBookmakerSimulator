import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"

function Match(props) {
  const navigate = useNavigate();
  const [topAnimation, setTopAnimation] = useState(0);
  const [animationTimeout] = useState((props.number) * 250);

  const [match, setMatch] = useState(props.match);
  const [inputText, setInputText] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  const betOnClick = (id) => {
    match.bet.id = id;
    if(id == match.team1.id) {
      setActiveIndex(0);
    }
    if(id == match.team2.id) {
      setActiveIndex(1);
    }
  };

  const onChangeInput = (event) => {
    let input = event.currentTarget.value;
    let value = parseInt(event.currentTarget.value);

    if (input == '') {
      match.bet.bet = undefined;
      setInputText('');
      return;
    }

    if (isNaN(value) || value + '' != input) {
      if (match.bet.bet != undefined) {
        setInputText(match.bet.bet);
        console.log('setted 1');
      } else {
        setInputText('');
        console.log('setted 2');
      }
      return;
    }

    setInputText(input);

    match.bet.bet = value;
  }

  useEffect(() => {
    setTimeout(()=> setTopAnimation(1), animationTimeout);
  })


  return (
    <div className={style.matchContainer}>
      <div style={{
        top: (topAnimation - 1) * 100 + "%",
        opacity: topAnimation,
      }} className={`${style.match} game-${props.number}`}>
        <p className={style.gameText}>Jogo {props.number}</p>
        <p className={style.betText}>Escolha um vencedor e faça uma aposta</p>
        <div className={style.countries}>
          <Country active={activeIndex == 0} team={match.team1} betOnClick={betOnClick}></Country>
          <div><div className={style.divider}></div></div>
          <Country active={activeIndex == 1} team={match.team2} betOnClick={betOnClick}></Country>
        </div>

        <input className={style.input} onChange={onChangeInput} value={inputText} placeholder="Insira o valor da aposta..."></input>
      </div>
    </div>

  );
}

function Country({ team, betOnClick, active }) {
  const image_size = window.innerWidth / 3.5;

  return (
    <div className={style.country} >
      <img style={{ width: image_size, height: image_size }} src={team.image} className={style.countryImage}></img>
      <p className={style.countryText}>{team.name}</p>
      <div className={style.force}>
        <p>Força da equipe:</p>
        <p>{(~~team.force).toLocaleString('de-DE')}</p>
      </div>
      <div onClick={(e) => betOnClick(team.id)} className={`${style.betButton} ${active && style.active}`}>
        <div className={style.outCircle}>
          <div className={`${style.innerCircle} ${!active && style.none}`}></div>
        </div>
        <div>
          <p>Vencedor 1</p>
          <p>Relação {team.k.toFixed(2)}</p>
        </div>
      </div>
    </div>);
}

export default Match;
