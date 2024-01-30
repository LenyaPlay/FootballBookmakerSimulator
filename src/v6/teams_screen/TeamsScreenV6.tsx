import { HeaderV6 } from "src/components/headers/HeaderV6"
import style from "./style.module.scss"
import { TEAMS3 } from "src/utils/Utils"
import { MouseEventHandler, PropsWithChildren } from "react"
import { Team } from "src/utils/Game"
import { DarkButtonV6 } from "src/components/buttons/DarkButtonV6"
import { useNavigate } from "react-router-dom"

export function TeamsScreenV6() {
    const navigate = useNavigate();

    const onBackClick : MouseEventHandler = (e) => {
        navigate('/menu');
    }
    
    return <div className={style.teamScreen}>
        <HeaderV6 className={style.header}>
            <h1>команды<br />спортивной<br />лиги</h1>
            <span>В спортивных лигах представлены<br />команды следующих городов:</span>
        </HeaderV6>

        <div className={style.teams}>
            {TEAMS3.map(team => <TeamComponent team={team} />)}
        </div>
        <DarkButtonV6 onClick={onBackClick} borderBottom={4}>Вернуться в главное меню</DarkButtonV6>
    </div>
}

interface TeamComponentType extends PropsWithChildren {
    team : Team;
}

function TeamComponent(props : TeamComponentType) {
    return <div className={style.team}>
        <span>{props.team.name}</span>
        <div className={style.imageContainer}>
            <img src={props.team.image} />
        </div>
    </div>
}