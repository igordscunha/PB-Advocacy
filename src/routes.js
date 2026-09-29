import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { Sobre } from './Pages/Sobre'
import { AreasAtuacao } from 'Pages/AreasAtuacao'
import { Contato } from 'Pages/Contato'
import { Layout } from 'Components/Layout'
import ScrollToTop from 'Components/ScrollToTop'
import { NotFound } from 'Components/NotFound'

export const AppRouter = () => {
    return(
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='sobre' element={<Sobre/>}/>
                    <Route path='areas-de-atuacao' element={<AreasAtuacao/>}/>
                    <Route path='contato' element={<Contato/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
