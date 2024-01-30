import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./style.module.scss"
import rootStyle from "src/styles/styles.module.scss"

function LoadResultScreenV5(props) {
    const [delays, setDelays] = useState([0, 250, 500, 750]); 

    useEffect(() => {
        setTimeout(() => {
            if(props.endLoading) {
               props.endLoading();
            }
        }, 750);
    }, []);

    return (
        <div className={`${rootStyle.baseContainer} ${style.bg} ${style.v5}`}>
            <div className={style.center}>
                <p className={`${style.text1}`} >jogo</p>
                <p className={`${style.text2}`} >em andamento</p>
                <div className={style.loadingCircles} style={{marginTop: 24}}>
                    {delays.map((delay, index) => <LoadingCircle key={index} delay={delay} />)}
                </div>
            </div>
        </div>
    );
}

export default LoadResultScreenV5;

function LoadingCircle(props) {
    const [time, setTime] = useState(0);
    
    const startAnimation = () => {
        setInterval(() => {
            setTime(t => t + 0.2);
        }, 1000 * 0.2);
    }

    useEffect(() => {    
        setTimeout(startAnimation, props.delay);         
    }, []);


    return <div className={style.loadingCircle} style={{ opacity: (Math.sin(time) + 1) * 0.45 + 0.1}}></div>
}