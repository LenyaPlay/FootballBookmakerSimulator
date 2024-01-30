import { PropsWithChildren } from "react";


export function TestCenterScreen(props : PropsWithChildren) {
    return <div style={{
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white'
    }}>
        {props.children}
    </div>
}