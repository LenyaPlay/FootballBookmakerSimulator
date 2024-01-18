import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS, genereateMatches, getPoints} from "../../utils/Utils";
import style from "./style.module.scss"
import MatchResultBlue from "src/components/match/MatchResultBlue";
import { GameContext } from "src/App";
import { Stage } from "src/utils/Game";
import MatchResultV3 from "src/components/match/MatchResultV3";
import LoadResultScreenV3 from "../load_screen/LoadResultScreenV3";
import LoadResultScreenV4 from "../load_screen/LoadResultScreenV4";
import MatchResultV4 from "src/components/match/MatchResultV4";

function PeriodResultScreenV4(props) {
    const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const gameContext = useContext(GameContext);
    const matches = gameContext.current.matches;

    const [points, _] = useState(getPoints());

    useEffect(() => {
        setTimeout(() => setPeriodBorderHeight(0), 50);
    }, []);

    const onClickNext = (event) => {
        gameContext.current.setStage(Stage.StartMatch);
    }

    return (loading ?
        <LoadResultScreenV4 endLoading={() => {setLoading(false)}}></LoadResultScreenV4> :
        <div className={`${style.periodScreen} ${style.v4}`}>
            <div className={style.periodBorderContainer}>
                <div style={{ top: periodBorderHeight * 100 + '%' }} className={`${style.periodBorder}`}>
                    <p className={`${style.period} ${style.blue}`}>{matches.length == 1 ? "" : `1/${matches.length} `}FINAL</p>
                    <p className={`${style.points} ${style.blue}`}>{(~~points).toLocaleString('de-DE')} pontos</p>
                </div>
            </div>
            {matches.map((match, index) => <MatchResultV4 key={index} match={match} number={index + 1}></MatchResultV4>)}

            <button className={style.button} onClick={onClickNext} style={{
                marginTop: 67,
                marginBottom: 73
            }}>Próximo período de jogo</button>
        </div>
    );
}

export default PeriodResultScreenV4;
