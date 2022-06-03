import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Pendentes from './pages/pendentes';
import Login from './pages/login'; 

export default function SiteRoutes() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/home'      element= {<Home />} />
            <Route path='/cadastro'  element= {<Cadastro />} />
            <Route path='/login'     element= {<Login />} />
            <Route path="/pendentes" element= {<Pendentes />} />
        </Routes>
    </BrowserRouter>
)
}