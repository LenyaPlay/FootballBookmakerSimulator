import { PropsWithChildren } from "react"
import style from "./style.module.css"

interface HeaderV6Type extends PropsWithChildren {
    className? : string
}

export function HeaderV6 (props: HeaderV6Type) {
    return <div className={`${style.headerV6} ${props.className}`}>
        {props.children}
    </div>
}
