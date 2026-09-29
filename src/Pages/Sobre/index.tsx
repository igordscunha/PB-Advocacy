import { FiMail, FiPhone } from 'react-icons/fi'
import { PageHero } from 'Components/PageHero'
import { Reveal } from 'Components/Reveal'
import { Titulo } from 'Components/Titulo'
import { Chamada } from 'Components/Chamada'
import socios from 'Data/socios.json'

const valores = [
    {
        titulo: 'Proximidade',
        texto: 'Relações de amizade e confiança, construídas ao longo de décadas com aqueles que representamos.',
    },
    {
        titulo: 'Clareza',
        texto: 'Assuntos e institutos complexos traduzidos em linguagem simples, para decisões conscientes.',
    },
    {
        titulo: 'Prevenção',
        texto: 'Análise do negócio para antecipar riscos e evitar infortúnios legais antes que aconteçam.',
    },
    {
        titulo: 'Atualização',
        texto: 'Acompanhamento constante das inovações, da doutrina e da jurisprudência mais recentes.',
    },
]

// Ordem de exibição dos perfis: Bruno, Hugo e Marcos
const ordem = [2, 1, 3]
const perfis = ordem.map((id) => socios.find((s) => s.id === id)!)

export const Sobre = () => {
    return (
        <>
            <PageHero
                eyebrow="Sobre"
                titulo="Tradição, técnica e proximidade."
                descricao="Conheça o escritório e as pessoas que fazem da Pontes & Britto uma referência em assessoria jurídica personalizada."
                imagem="/images/hero-colunas.jpg"
            />

            {/* ##### O ESCRITÓRIO ##### */}
            <section className="py-24 md:py-36">
                <div className="container grid gap-16 lg:grid-cols-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <Titulo eyebrow="Nossa história">
                            Da fusão de experiências nasceu um escritório <em className="text-gold-600">completo</em>.
                        </Titulo>
                    </div>
                    <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-ink/75 md:text-lg lg:col-span-7 lg:pt-12">
                        <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-gold-500">
                            A Pontes & Britto tem a marca da assessoria jurídica empresarial full service: ágil, eficiente e personalizada. A operação de fusão do escritório ampliou a oferta de serviços jurídicos e beneficiou centenas de clientes.
                        </p>
                        <p>
                            Oferecemos assessoria nas questões mais complexas de clientes de grande porte, bem como no atendimento integral das empresas do chamado middle market e startups — e também de pessoas que buscam orientação segura em momentos decisivos.
                        </p>
                        <p>
                            Nossos advogados, constantemente atualizados sobre as novas exigências legais, asseguram o cumprimento sistemático e consistente da legislação por parte do cliente, com o qual buscamos construir uma parceria estratégica.
                        </p>
                    </Reveal>
                </div>

                <div className="container mt-20 md:mt-28">
                    <Reveal className="relative aspect-[16/9] overflow-hidden shadow-card md:aspect-[21/9]">
                        <img src="/images/escritorio.jpg" alt="Ambiente do escritório" loading="lazy" className="h-full w-full object-cover" />
                    </Reveal>
                </div>
            </section>

            {/* ##### VALORES ##### */}
            <section className="grain relative overflow-hidden bg-navy-900 py-24 md:py-32">
                <div className="container relative">
                    <Titulo eyebrow="O que nos guia" claro>
                        Princípios que orientam cada caso.
                    </Titulo>
                    <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                        {valores.map(({ titulo, texto }, i) => (
                            <Reveal key={titulo} delay={i * 100} className="h-full bg-navy-900">
                                <div className="group h-full p-8 transition-colors duration-500 hover:bg-navy-800 md:p-10">
                                    <span className="font-serif text-5xl font-medium text-gold-400/30 transition-colors duration-500 group-hover:text-gold-400">0{i + 1}</span>
                                    <h3 className="mt-6 text-3xl font-medium text-white">{titulo}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/70">{texto}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ##### SÓCIOS ##### */}
            <section className="py-24 md:py-36">
                <div className="container">
                    <Titulo eyebrow="Por trás da tela" centralizado descricao="Trajetórias diferentes, um mesmo compromisso: defender os seus interesses com excelência.">
                        Nossos sócios.
                    </Titulo>

                    <div className="mt-20 space-y-24 md:mt-28 md:space-y-36">
                        {perfis.map((socio, i) => (
                            <article key={socio.id} id={socio.slug} className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-12 lg:gap-20">
                                <Reveal className={`relative lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                                    <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200 shadow-card">
                                        <img src={socio.imagem2} alt={socio.nome} loading="lazy" className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div className={`absolute -bottom-5 -z-10 h-full w-full border border-gold-400/60 ${i % 2 ? '-left-5' : '-right-5'}`} />
                                </Reveal>

                                <Reveal delay={120} className={`lg:col-span-7 ${i % 2 ? 'lg:order-1' : ''}`}>
                                    <span className="eyebrow">{socio.oab}</span>
                                    <h3 className="mt-4 text-5xl font-medium text-navy-900 md:text-6xl">{socio.nome}</h3>
                                    <ul className="mt-6 flex flex-wrap gap-2">
                                        {socio.areaatuacao.split(/, | e /).map((area) => (
                                            <li key={area} className="border border-navy-800/20 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-800">
                                                {area}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 space-y-4 leading-relaxed text-ink/75">
                                        {socio.longdesc.split('\n\n').map((paragrafo) => <p key={paragrafo.slice(0, 24)}>{paragrafo}</p>)}
                                    </div>
                                    <div className="mt-10 flex flex-col gap-4 border-t border-navy-800/10 pt-8 text-sm sm:flex-row sm:gap-10">
                                        <a href={`mailto:${socio.email}`} className="inline-flex items-center gap-3 text-navy-800 transition-colors hover:text-gold-600">
                                            <FiMail className="text-gold-600" /> {socio.email}
                                        </a>
                                        <a href={`tel:${socio.telefone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center gap-3 text-navy-800 transition-colors hover:text-gold-600">
                                            <FiPhone className="text-gold-600" /> {socio.telefone}
                                        </a>
                                    </div>
                                </Reveal>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Chamada />
        </>
    )
}
