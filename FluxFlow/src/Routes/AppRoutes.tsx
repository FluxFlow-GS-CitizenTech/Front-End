import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Sobre from '../Pages/Sobre/Sobre'
import NotFound from '../Pages/NotFound/NotFound'
import QuemSomos from '../Pages/QuemSomos/QuemSomos'
import Sistema from '../Pages/Sistema/Sistema'
import Sistema2 from '../Pages/Sistema2/Sistema2'
import Faq from '../Pages/Faq/Faq'
import Contato from '../Pages/Contato/Contato'
import Cadastro from '../Pages/Cadastro/Cadastro'
import Login from '../Pages/Login/Login'
import Principal from '../Pages/Principal/Principal'
{/*import { ProtectedRoute } from '../Components/ProtectedRoute/ProtectedRoute'*/}

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/sistema" element={<Sistema />} />
            <Route path="/sistema2" element={<Sistema2 />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/principal" element={<Principal />} />
            <Route path="/*" element={<NotFound/>}/>

            {/*<Route element={<ProtectedRoute />}>
            <Route path="/postagens" element={<Postagens />} />

                
                
            </Route>*/}
        </Routes>
    )
}