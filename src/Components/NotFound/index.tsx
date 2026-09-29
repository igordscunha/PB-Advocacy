import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Botao } from 'Components/Botao'

export const NotFound = () => {
    const navigate = useNavigate()

    return (
        <section className="grain relative flex min-h-screen items-center overflow-hidden bg-navy-950 pb-20 pt-40">
            <img src="/images/hero-colunas.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 to-navy-950" />
            <div className="container relative text-center">
                <p className="animate-fade-up font-serif text-[9rem] font-medium leading-none text-gold-400/90 md:text-[14rem]">404</p>
                <h1 className="mt-4 animate-fade-up text-4xl font-medium text-white [animation-delay:120ms] md:text-5xl">Página não encontrada</h1>
                <p className="mx-auto mt-5 max-w-md animate-fade-up leading-relaxed text-white/70 [animation-delay:240ms]">
                    O endereço que você procura não existe ou foi movido. Mas estamos aqui para ajudar.
                </p>
                <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 [animation-delay:360ms] sm:flex-row">
                    <Botao variante="claro" onClick={() => navigate(-1)}>
                        <FiArrowLeft /> Voltar
                    </Botao>
                    <Botao to="/">Ir para o início</Botao>
                </div>
            </div>
        </section>
    )
}
