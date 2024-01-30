import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS, TEAMS2, getPoints, setPoints, setPointsBeforeChampionship } from "../../utils/Utils";
import style from "./style.module.scss"
import MatchBlue from "src/components/match/MatchBlue";
import { GameContext } from "src/App";
import MatchV3 from "src/components/match/MatchV3";
import { Stage } from "src/utils/Game";
import MatchV4 from "src/components/match/MatchV4";
import MatchV5 from "src/components/match/MatchV5";

function TeamsScreenV5(props) {
    const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
    const navigate = useNavigate();
    const [pairs, setPairs] = useState([]);


    useEffect(() => {
        setTimeout(() => setPeriodBorderHeight(0), 50);
        for (let i = 0; i < TEAMS2.length / 2; i++) {
            pairs.push([TEAMS2[i], TEAMS2[i + TEAMS2.length / 2]]);
            setPairs(pairs);
        }
        console.log(pairs);
    }, []);

    const onBackClick = (event) => {
        navigate('/');
    }

    return (
        <div className={`${style.periodScreen} ${style.v5}`}>
            <div className={`${style.header} ${style.bg5}`}>
                <p className={style.text1}><br /></p>
                <p className={style.text2}>todas<br />as equipes</p>
            </div>

            {pairs.map((pair) => <Pair t1={pair[0]} t2={pair[1]} />)}
            <button className={style.button} onClick={onBackClick} style={{ margin: '37px 0px' }} >Atrás</button>
        </div>
    );
}

export default TeamsScreenV5;

function Pair({ t1, t2 }) {

    return <div className={style.pair}>
        <div className={style.left}>
            <div>
                {t1.name.split('\n').map((name) => <p className={style.countryText}>{name}</p>)}
            </div>

            <img src={t1.image} />
        </div>
        <div className={style.right}>
            <img src={t2.image} />
            <div>
                {t2.name.split('\n').map((name) => <p className={style.countryText}>{name}</p>)}
            </div>
        </div>
    </div>
}
