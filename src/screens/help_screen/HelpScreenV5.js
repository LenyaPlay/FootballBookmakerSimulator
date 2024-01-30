import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../../utils/Utils";
import style from "./style.module.scss"

function HelpScreenV5() {
    const navigate = useNavigate();
    const [_, setRerender] = useState(0);

    const onBack = (e) => {
        navigate('/menu');
    }

    return (
        <div className={`${style.helpScreenBlue} ${style.v5}`}>
            <h1>Treinamento</h1>
            <p>No início você é levado a um menu onde pode iniciar o torneio, ver a lista de times ou ir às configurações</p>
            <img src={require("src/assets/v5/img/8.png")}></img>
            <p>Nas configurações você pode aprender e redefinir pontos</p>
            <img src={require("src/assets/v5/img/9.png")}></img>
            <p>O período atual do torneio é mostrado aqui</p>
            <img src={require("src/assets/v5/img/1.png")}></img>
            <p>Essa é a força do time, quanto maior a força, maiores as chances de vitória</p>
            <img src={require("src/assets/v5/img/2.png")}></img>
            <p>Aqui você faz uma aposta, precisa selecionar um time e inserir o valor</p>
            <img src={require("src/assets/v5/img/3.png")}></img>
            <p>É assim que o resultado é exibido</p>
            <img src={require("src/assets/v5/img/4.png")}></img>
            <p>Para saber os resultados, você deve clicar no seguinte botão</p>
            <img src={require("src/assets/v5/img/5.png")}></img>
            <p>Ao final do campeonato você saberá quanto ganhou ou perdeu nas apostas</p>
            <img src={require("src/assets/v5/img/6.png")}></img>
            <p>Ao final do campeonato você saberá quanto ganhou ou perdeu nas apostas</p>
            <img src={require("src/assets/v5/img/7.png")}></img>
            <p>Para ir ao menu, clique na sua renda</p>
            <button onClick={onBack} className={`${style.button}`}>Voltar ao menu</button>
        </div>
    );
}

export default HelpScreenV5;
