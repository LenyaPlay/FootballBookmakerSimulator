import { getPoints } from "src/utils/Utils";
import style from './style.module.scss'

export function PointsV6Components() {
    return <div className={style.pointsV6}>
        <img width={29} height={29} src={require("src/assets/v6/icons/icon1.png")}></img>
        <span>{(~~getPoints()).toLocaleString('de-DE').replaceAll('.', ' ')}</span>
    </div>
}