import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS, generateForces, genereateMatches, getPeriod, getPoints, hasPeriod, setPeriod } from "../../utils/Utils";
import style from "./style.module.css"
import MatchResultBlue from "src/components/match/MatchResultBlue";

function PeriodResultScreenBlue(props) {
    const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
    const navigate = useNavigate();

    const [matches, setMatches] = useState(getPeriod());
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
            navigate('/period');
        }
    }

    return (
        <div className={`${style.periodScreen} ${style.blue}`}>
            <div className={style.bluePeriodBorderContainer}>
                <div style={{ top: periodBorderHeight * 100 + '%' }} className={`${style.bluePeriodBorder}`}>
                    <p className={`${style.period} ${style.blue}`}>{matches.length == 1 ? "" : `1/${matches.length} `}FINAL</p>
                    <p className={`${style.points} ${style.blue}`}>{(~~points).toLocaleString('de-DE')} pontos</p>
                </div>
            </div>
            {matches.map((match, index) => <MatchResultBlue key={index} match={match} number={index + 1}></MatchResultBlue>)}

            <button className={style.blueButton} onClick={onClickNext} style={{
                marginTop: 67,
                marginBottom: 73
            }}>Próximo período de jogo</button>
        </div>
    );
}

export default PeriodResultScreenBlue;
