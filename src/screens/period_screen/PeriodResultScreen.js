import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS, getPoints} from "../../utils/Utils";
import style from "./style.module.css"
import LoadResultScreenV3 from "../load_screen/LoadResultScreenV3";

function PeriodResultScreen(props) {
    const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [points, _] = useState(getPoints());

    useEffect(() => {
        setTimeout(() => setPeriodBorderHeight(0), 50);
    }, []);

    const onClickNext = (event) => {
        let teams = matches.map(m => m.winner);
        if (teams.length == 1) {
            setPeriod([]);
            navigate('/final');
        } else {
            setPeriod(genereateMatches(teams));
            navigate();
        }
    }

    return ( loading ?
        <LoadResultScreenV3 endLoading={() => {setLoading(false)}}></LoadResultScreenV3> :
        <div className={style.periodScreen}>
            <div className={style.periodBorderContainer}>
                <div style={{ top: periodBorderHeight * 100 + '%' }} className={`${style.periodBorder}`}>
                    <p className={style.period}>{matches.length == 1 ? "" : `1/${matches.length} `}FINAL</p>
                    <p className={style.points}>{(~~points).toLocaleString('de-DE')} pontos</p>
                </div>
            </div>
            {matches.map((match, index) => <MatchResult key={index} match={match} number={index + 1}></MatchResult>)}

            <button className={style.button} onClick={onClickNext} style={{
                marginTop: 67,
                marginBottom: 73
            }}>Próximo período de jogo</button>
        </div>
    );
}

export default PeriodResultScreen;
