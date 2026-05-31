import type { ReactNode } from "react"

import "@/style/component/Navbar.sass"

export function Navbar({ brand, children }: { brand: string, children?: ReactNode }) {
    return (
        <nav className="navbar">
            <a className="brand" href="/">{brand}</a>
            <div className="items">
                {children}
            </div>
        </nav>
    )
}