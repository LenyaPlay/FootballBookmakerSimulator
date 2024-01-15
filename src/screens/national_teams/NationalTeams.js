import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../../components/match/Match";
import MatchResult from "../../components/match/MatchResult";
import { TEAMS } from "../../utils/Utils";
import style from "./style.module.css"
import MatchResultBlue from "src/components/match/MatchResultBlue";

function PeriodResultScreenBlue(props) {
    const [periodBorderHeight, setPeriodBorderHeight] = useState(-1);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setPeriodBorderHeight(0), 50);
    }, []);

    const onBackClick = () => {
        navigate('/menu');
    }

    const pairs = createPairs(TEAMS);

    return (
        <div className={`${style.periodScreen} ${style.blue}`}>
            <div className={style.bluePeriodBorderContainer}>
                <div style={{ top: periodBorderHeight * 100 + '%' }} className={`${style.bluePeriodBorder}`}>
                    <p className={`${style.text} ${style.blue}`}>Equipes <br /> nacionais</p>
                </div>
            </div>

            <div >
                {pairs.map((team) => {
                    return <div className={style.countries}>
                        <Country team={team[0]}></Country>
                        <Country team={team[1]}></Country>
                    </div>
                })}
            </div>


            <button className={style.blueButton} onClick={onBackClick} style={{
                marginTop: 40,
                marginBottom: 40
            }}>Atrás</button>
        </div>
    );
}

function Country({ team }) {
    return (<div className={style.country} >
        <div>
            <img className={`${style.countryImage} ${style.blue}`} src={team.image} />
        </div>
        <p className={style.blueCountryText}>{team.name}</p>
    </div>);
}



export default PeriodResultScreenBlue;

const createPairs = (array) => {
    const pairs = [];
  
    // Check if the array length is odd, and adjust the loop limit accordingly
    const loopLimit = array.length % 2 === 0 ? array.length : array.length - 1;
  
    for (let i = 0; i < loopLimit; i += 2) {
      const pair = [array[i], array[i + 1]];
      pairs.push(pair);
    }
  
    // If the array length is odd, add the last element as a single element pair
    if (array.length % 2 !== 0) {
      pairs.push([array[array.length - 1]]);
    }
  
    return pairs;
  };