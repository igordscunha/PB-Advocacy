import { Outlet } from 'react-router-dom'
import { Header } from 'Components/Header'
import { Rodape } from 'Components/Rodape'
import { WhatsAppFlutuante } from 'Components/WhatsAppFlutuante'

export const Layout = () => {
    return (
        <>
            <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-navy-950">
                Pular para o conteúdo
            </a>
            <Header />
            <main id="conteudo">
                <Outlet />
            </main>
            <Rodape />
            <WhatsAppFlutuante />
        </>
    )
}
