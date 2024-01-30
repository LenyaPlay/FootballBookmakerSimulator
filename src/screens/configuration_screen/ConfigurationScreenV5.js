import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../../utils/Utils";
import rootStyle from "src/styles/styles.module.scss"
import style from "./style.module.scss"

function ConfigurationScreenV5() {
  const navigate = useNavigate();
  const [_, setRerender] = useState(0);

  const onResetClick = (e) => {
    setRerender(x => x + 1);
    setPoints(30000);
  }

  const onHelpClick = (e) => {
    navigate('/help');
  }


  return (
    <div className={`${rootStyle.baseContainer} ${style.bg} ${style.v5}`}>
      <div className={`${style.center}`}>
        <h1 style={{marginBottom: 52}}>Configurações</h1>
        <button className={`${style.button}`} onClick={onHelpClick}>Treinamento</button>
        <button className={`${style.button}`} onClick={onResetClick}>Redefinição das <br/>pontuações finais</button>
     </div>
    </div>
  );
}

export default ConfigurationScreenV5;
