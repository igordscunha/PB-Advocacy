import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

interface PageHeroProps {
    eyebrow: string
    titulo: string
    descricao: string
    imagem: string
}

export const PageHero = ({ eyebrow, titulo, descricao, imagem }: PageHeroProps) => {
    return (
        <section className="grain relative flex min-h-[70vh] items-end overflow-hidden bg-navy-950 pb-20 pt-40 md:min-h-[78vh] md:pb-28">
            <img src={imagem} alt="" aria-hidden className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />

            <div className="container relative">
                <nav aria-label="Trilha" className="mb-8 flex animate-fade-up items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
                    <Link to="/" className="transition-colors hover:text-gold-300">Início</Link>
                    <FiChevronRight aria-hidden />
                    <span className="text-gold-300">{eyebrow}</span>
                </nav>
                <h1 className="max-w-3xl animate-fade-up text-5xl font-medium leading-[1.02] text-white [animation-delay:120ms] md:text-7xl">
                    {titulo}
                </h1>
                <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/70 [animation-delay:240ms] md:text-lg">
                    {descricao}
                </p>
            </div>
        </section>
    )
}
