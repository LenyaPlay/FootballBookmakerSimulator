import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../../utils/Utils";
import style from "./style.module.scss"

function HelpScreenV4() {
    const navigate = useNavigate();
    const [_, setRerender] = useState(0);

    const onBack = (e) => {
        navigate('/menu');
    }

    return (
        <div className={`${style.helpScreenBlue} ${style.v3} ${style.blue}`}>
            <p>Primeiro você precisa selecionar uma liga, após escolher uma liga o campeonato começará</p>
            <img src={require("src/assets/v3/img/8.png")}></img>
            <p>O período atual do torneio é mostrado aqui</p>
            <img src={require("src/assets/v3/img/1.png")}></img>
            <p>Essa é a força do time, quanto maior a força, maiores as chances de vitória</p>
            <img src={require("src/assets/v3/img/2.png")}></img>
            <p>Aqui você faz uma aposta, precisa selecionar um time e inserir o valor</p>
            <img src={require("src/assets/v3/img/3.png")}></img>
            <p>É assim que o resultado é exibido</p>
            <img src={require("src/assets/v3/img/4.png")}></img>
            <p>Para saber os resultados, você deve clicar no seguinte botão</p>
            <img src={require("src/assets/v3/img/5.png")}></img>
            <p>Ao final do campeonato você saberá quanto ganhou ou perdeu nas apostas</p>
            <img src={require("src/assets/v3/img/6.png")}></img>
            <p>Ao final do campeonato você saberá quanto ganhou ou perdeu nas apostas</p>
            <img src={require("src/assets/v3/img/7.png")}></img>
            <p>Para ir ao menu, clique na sua renda</p>
            <button onClick={onBack} className={`${style.blueButton}`}>Voltar ao menu</button>
        </div>
    );
}

export default HelpScreenV4;
