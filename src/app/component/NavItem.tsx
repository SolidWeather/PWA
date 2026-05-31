import type { ReactNode } from "react"

export function NavItem({ children }: { children: ReactNode }) {
    return (
        <div className="item">
            {children}
        </div>
    )
}