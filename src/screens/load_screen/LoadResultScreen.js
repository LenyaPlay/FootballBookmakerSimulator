import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css"
import rootStyle from "src/styles/styles.module.css"

function LoadResultScreen() {
  const [fill, setFill] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFill(1), 300);
    setTimeout(() => navigate('/period_result'), 750);
  }, []);

  return (
    <div className={`${rootStyle.baseContainer} ${style.bgResult}`}>
      <div className={style.center}>
        
        <p className={style.mainText} >Carregando <br/> resultados</p>
        <div className={style.progressBar}>
          <div style={{
            width: fill * 100 + '%',
          }} className={style.full}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadResultScreen;
