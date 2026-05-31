import { Navbar } from "@/app/component/Navbar.tsx"
import { NavItem } from "@/app/component/NavItem.tsx"
import { IconButton } from "@/app/component/Button.tsx"
import { Icon } from "@/app/component/Icon.tsx"
import { useState } from "react"
import type { Position } from "@/lib/position.ts"

export function App() {

    // const [ position, setPosition ] = useState<Position>()

    return (
        <>
            <Navbar brand="SolidWeather">
                <NavItem>
                    <IconButton>
                        <Icon name="search" />
                    </IconButton>
                </NavItem>
            </Navbar>

            <main>

            </main>
        </>
    )
}