import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import rootStyle from "src/styles/styles.module.css"
import style from "./style.module.css"


function LoadScreen() {
  const [fill, setFill] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFill(0.5), 300);
    setTimeout(() => setFill(1), 300);
    setTimeout(() => navigate('/menu'), 750);
  }, []);

  return (
    <div className={`${rootStyle.baseContainer} ${style.bg}`}>
      <div className={style.center}>
        <p className={style.text}>Hora de fazer</p>
        <p className={style.mainText} >aposta vencedora</p>
        <div className={style.progressBar}>
          <div style={{
            width: fill * 100 + '%',
          }} className={style.full}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadScreen;
