import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"
import rootStyle from "src/styles/styles.module.scss"

function LoadResultScreenBlue() {
    const [fill, setFill] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setFill(1), 300);
        setTimeout(() => navigate('/period_result'), 750);
    }, []);

    return (
        <div className={`${rootStyle.baseContainer} ${style.bgResult} ${style.blue}`}>
            <div className={style.center}>
                <img style={{
                    width: '10%',
                    aspectRatio: 1,
                }} src={require('src/assets/blue_design/ball.png')}></img>
                <p style={{marginTop: 24}} className={`${style.mainText}`} >Carregando <br /> resultados</p>
                <div className={`${style.progressBar}`}>
                    <div style={{
                        width: fill * 100 + '%',
                    }} className={style.full}></div>
                </div>
            </div>
        </div>
    );
}

export default LoadResultScreenBlue;
