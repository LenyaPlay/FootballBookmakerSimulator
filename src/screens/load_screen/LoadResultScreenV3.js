import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css"
import rootStyle from "src/styles/styles.module.css"

function LoadResultScreenV3(props) {
    const [fill, setFill] = useState(0);

    useEffect(() => {
        setTimeout(() => setFill(1), 300);
        setTimeout(() => {
            if(props.endLoading) {
                props.endLoading();
            }
        }, 750);
    }, []);

    return (
        <div className={`${rootStyle.baseContainer} ${style.bg} ${style.v3}`}>
            <div className={style.center}>
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

export default LoadResultScreenV3;
