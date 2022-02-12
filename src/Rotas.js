import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Main} from './pages/main'

export function Rotas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>} />
            </Routes>
        </BrowserRouter>
    )
}