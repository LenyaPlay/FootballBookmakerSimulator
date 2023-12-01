import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../Utils";

function HelpScreen() {
  const navigate = useNavigate();
  const [_, setRerender] = useState(0);

  const onBack = (e) => {
    navigate('/menu');
  }



  return (
    <div className="help-screen">
      <p>O período atual do torneio é mostrado aqui</p>
        <img src="img/1.png"></img>
        <p>Essa é a força do time, quanto maior a força, maiores as chances de vitória</p>
        <img src="img/2.png"></img>
        <p>Aqui você faz uma aposta, precisa selecionar um time e inserir o valor</p>
        <img src="img/3.png"></img>
        <p>É assim que o resultado é exibido</p>
        <img src="img/4.png"></img>
        <p>Para saber os resultados, você deve clicar no seguinte botão</p>
        <img src="img/5.png"></img>
        <p>Ao final do campeonato você saberá quanto ganhou ou perdeu nas apostas</p>
        <img src="img/6.png"></img>
        <p>Ao final do campeonato você saberá quanto ganhou ou perdeu nas apostas</p>
        <img src="img/7.png"></img>
        <p>Para ir ao menu, clique na sua renda</p>
        <button onClick={onBack} className="default-button">Voltar ao menu</button>
    </div>
  );
}

export default HelpScreen;
