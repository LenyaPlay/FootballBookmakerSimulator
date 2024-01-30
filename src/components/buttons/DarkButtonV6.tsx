import { MouseEventHandler, PropsWithChildren } from "react"
import style from "./style.module.scss"

export interface PropsButtonV6 extends PropsWithChildren  {
    borderTop?: number,
    borderBottom?: number,
    onClick?: MouseEventHandler | undefined;
    className? : string | undefined;
}

export function DarkButtonV6 (props : PropsButtonV6) {
    return <button onClick={props.onClick} className={`${style.darkButtonV6} ${props.className}`} style={{
        borderTop: props.borderTop,
        borderBottom: props.borderBottom,
    }}>
        <span>{props.children ?? "Button"}</span>
    </button>
}