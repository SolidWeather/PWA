import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router"
import {NotFound} from "./app/route/NotFound.tsx";
import {App} from "./app/route/App.tsx";

import "@/style/index.sass"

createRoot(document.getElementById("root")!)
    .render(<StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>)
