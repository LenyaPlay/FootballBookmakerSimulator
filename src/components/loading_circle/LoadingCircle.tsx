import style from "./style.module.scss"

export type PropsLoadingCircle = {
    size?: number
    circles? : number,
    circleSize? : number,
    delay? : number,
    color? : string,
}

export function LoadingCircle(props : PropsLoadingCircle) {
    const count = props.circles ?? 8;
    const delay = props.delay ?? 150;

    return <div className={style.loading_circle} style={{width: props.size, height: props.size}}>    
        {new Array(count).fill(0).map((v, i) => {
                return <div key={i} style={{
                    transform: `rotate(${360 / count * i}deg)`,
                    animationDelay: `${delay * i}ms`,
                    animationDuration: `${delay * count}ms`,
                    height: props.circleSize,
                }}>
                    <div style={{
                        backgroundColor: props.color
                    }}></div>
                </div>
            })}
    </div>
}