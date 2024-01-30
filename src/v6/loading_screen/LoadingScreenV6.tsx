import { LoadingCircle } from "src/components/loading_circle/LoadingCircle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './style.module.scss'

export function LoadingScreenV6 () {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/menu');
        }, 750);
    }, []);

    return <div className={style.loadingScreen}>
        <h1>Ставки<br/>на спортивные лиги</h1>
        <LoadingCircle color="#FFD600"/>
    </div>
}