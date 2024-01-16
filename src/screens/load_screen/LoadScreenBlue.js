import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import rootStyle from "src/styles/styles.module.scss"
import style from "./style.module.scss"

function LoadScreenBlue() {
  const [fill, setFill] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFill(0.5), 300);
    setTimeout(() => setFill(1), 300);
    setTimeout(() => navigate('/menu'), 750);
  }, []);

  return (
    <div className={`${rootStyle.baseContainer} ${style.bg} ${style.blue}`}>
      <div className={style.center}>
        <img style={{
          width: '10%',
          aspectRatio: 1,
        }} src={require('src/assets/blue_design/ball.png')}></img>
        <p className={style.text} style={{
          marginTop: 24
        }}>Hora de fazer</p>
        <p className={`${style.mainText} ${style.blue}`} >aposta vencedora</p>
        <div className={`${style.progressBar} ${style.blue}`}>
          <div style={{
            width: fill * 100 + '%',
          }} className={`${style.full}`}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadScreenBlue;
