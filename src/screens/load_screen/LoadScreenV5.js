import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import rootStyle from "src/styles/styles.module.scss"
import style from "./style.module.scss"


function LoadScreenV5() {
    const [delays, setDelays] = useState([0, 250, 500, 750]); 
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/menu'), 1500);
    }, []);

    return (
        <div className={`${rootStyle.baseContainer} ${style.v5}`}>
            <div className={style.center}>
                <p className={style.text1}>Tempo</p>
                <p className={style.mainText}>de aposta</p>
                <div className={style.loadingCircles} style={{marginTop: 24}}>
                    {delays.map((delay, index) => <LoadingCircle key={index} delay={delay} />)}
                </div>
            </div>
        </div>
    );
}

export default LoadScreenV5;

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