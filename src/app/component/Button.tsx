import type { ReactNode } from "react"

import "@/style/component/Button.sass"

export function Button({ children, onClick, primary }: {
    children: ReactNode,
    onClick?: () => void,
    primary?: boolean
}) {
    return (
        <button className={`Button${primary ? " primary" : ""}`} onClick={onClick ?? undefined}>
            {children}
        </button>
    )
}

export function IconButton({ children, onClick }: { children: ReactNode, onClick?: () => void }) {
    return (
        <button className="Button icon" onClick={onClick ?? undefined}>
            {children}
        </button>
    )
}