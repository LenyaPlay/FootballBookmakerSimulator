import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPeriod, setPoints } from "../../utils/Utils";
import rootStyle from "src/styles/styles.module.css"
import style from "./style.module.css"

function MenuScreenV3() {
  const navigate = useNavigate();
  const [_, setRerender] = useState(0);

  const onPlayClick = (e) => {
    navigate('/game');
  }

  const onHelpClick = (e) => {
    navigate('/help');
  }

  const resetPoints = (e) => {
    setRerender(x => x + 1);
    setPoints(10000);
  }


  return (
    <div className={`${rootStyle.baseContainer} ${style.bg} ${style.v3}`}>
      <div className={`${style.center}`}>
        <button className={`${style.button}`} onClick={onPlayClick}>Jogar</button>
        <button className={`${style.button}`} onClick={resetPoints}>Zerar os pontos</button>
        <button className={`${style.button}`} onClick={onHelpClick}>Treinamento</button>
     </div>
    </div>
  );
}

export default MenuScreenV3;
