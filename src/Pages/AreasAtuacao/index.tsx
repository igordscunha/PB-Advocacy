import { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { PageHero } from 'Components/PageHero'
import { Reveal } from 'Components/Reveal'
import { Titulo } from 'Components/Titulo'
import { Chamada } from 'Components/Chamada'
import { areas } from 'Data/areas'

export const AreasAtuacao = () => {
    const [ativa, setAtiva] = useState(areas[0].slug)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => entrada.isIntersecting && setAtiva(entrada.target.id))
            },
            { rootMargin: '-45% 0px -50% 0px' }
        )
        areas.forEach(({ slug }) => {
            const el = document.getElementById(slug)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <PageHero
                eyebrow="Áreas de atuação"
                titulo="Onde e como atuamos."
                descricao="Do consultivo ao contencioso, oferecemos soluções jurídicas completas para pessoas e empresas, no Brasil e em Portugal."
                imagem="/images/hero-justica.jpg"
            />

            <section className="py-24 md:py-36">
                <div className="container grid gap-16 lg:grid-cols-12">
                    {/* Índice fixo */}
                    <aside className="hidden lg:col-span-3 lg:block">
                        <nav aria-label="Áreas" className="sticky top-32">
                            <p className="eyebrow">Índice</p>
                            <ul className="mt-8 space-y-1 border-l border-navy-800/10">
                                {areas.map(({ slug, titulo }, i) => (
                                    <li key={slug}>
                                        <a
                                            href={`#${slug}`}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' })
                                                window.history.replaceState(null, '', `#${slug}`)
                                            }}
                                            className={`-ml-px flex items-baseline gap-4 border-l-2 py-3 pl-6 transition-all duration-300 ${
                                                ativa === slug ? 'border-gold-500 text-navy-900' : 'border-transparent text-ink/50 hover:text-navy-800'
                                            }`}
                                        >
                                            <span className="font-serif text-sm italic text-gold-600">0{i + 1}</span>
                                            <span className="font-serif text-2xl font-medium">{titulo}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <div className="lg:col-span-9">
                        <Titulo eyebrow="Especialidades" descricao="Cada área conta com advogados especializados e uma metodologia de trabalho que prioriza a prevenção, a transparência e a eficiência.">
                            Cinco frentes, um mesmo padrão de excelência.
                        </Titulo>

                        <div className="mt-20 space-y-24 md:space-y-32">
                            {areas.map(({ slug, titulo, descricao, servicos, imagem }, i) => (
                                <article key={slug} id={slug} className="scroll-mt-28">
                                    <Reveal className="grid gap-10 md:grid-cols-5 md:gap-12">
                                        <div className="relative aspect-[3/2] overflow-hidden md:col-span-2 md:aspect-[2/3]">
                                            <img src={imagem} alt={`Direito ${titulo}`} loading="lazy" className="h-full w-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                                            <span className="absolute bottom-5 left-5 font-serif text-6xl font-medium text-white/90">0{i + 1}</span>
                                        </div>
                                        <div className="md:col-span-3">
                                            <p className="text-[0.68rem] font-semibold uppercase tracking-eyebrow text-gold-600">Direito</p>
                                            <h3 className="mt-2 text-5xl font-medium text-navy-900 md:text-6xl">{titulo}</h3>
                                            <p className="mt-6 leading-relaxed text-ink/75">{descricao}</p>
                                            <h4 className="mt-10 text-[0.68rem] font-semibold uppercase tracking-eyebrow text-ink/50">Como podemos ajudar</h4>
                                            <ul className="mt-5 divide-y divide-navy-800/10 border-y border-navy-800/10">
                                                {servicos.map((servico) => (
                                                    <li key={servico} className="flex gap-4 py-3.5 text-sm leading-relaxed text-ink/80">
                                                        <FiCheck className="mt-1 shrink-0 text-gold-600" />
                                                        {servico}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Reveal>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Chamada />
        </>
    )
}
