import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { Botao } from 'Components/Botao'
import { Reveal } from 'Components/Reveal'
import { Titulo } from 'Components/Titulo'
import { Mapa } from 'Components/Mapa'
import { Chamada } from 'Components/Chamada'
import { InfoContato } from 'Components/InfoContato'
import socios from 'Data/socios.json'
import { areas } from 'Data/areas'
import { escritorio } from 'Data/escritorio'

const numeros = [
    { valor: '33+', rotulo: 'anos de experiência' },
    { valor: '5', rotulo: 'áreas de atuação' },
    { valor: '3', rotulo: 'sócios especialistas' },
    { valor: 'RJ · PT', rotulo: 'Brasil e Portugal' },
]

const pilares = [
    { titulo: 'Ágil', texto: 'Respostas rápidas às novas exigências legais e às demandas do seu negócio.' },
    { titulo: 'Eficiente', texto: 'Cumprimento sistemático e consistente da legislação, com foco em resultado.' },
    { titulo: 'Personalizada', texto: 'Uma parceria estratégica construída a partir da realidade de cada cliente.' },
]

const publicacoes = ['redesocial3', 'redesocial6', 'redesocial2', 'redesocial4', 'redesocial5', 'redesocial1']

function Home() {
    return (
        <>
            {/* ##### HERO ##### */}
            <section className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-950">
                <img src="/images/hero-biblioteca.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-55" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />

                <div className="container relative flex flex-1 flex-col justify-center pb-16 pt-36">
                    <span className="eyebrow animate-fade-up">Rio de Janeiro · Portugal</span>
                    <h1 className="mt-7 max-w-4xl animate-fade-up text-[3.2rem] font-medium leading-[0.98] text-white [animation-delay:120ms] sm:text-7xl lg:text-[6.2rem]">
                        Advocacia estratégica para <em className="font-medium text-gold-300">decisões</em> que importam.
                    </h1>
                    <p className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-white/70 [animation-delay:240ms] md:text-lg">
                        Assessoria jurídica full service — ágil, eficiente e personalizada — para pessoas, empresas do middle market e startups.
                    </p>
                    <div className="mt-11 flex animate-fade-up flex-col gap-4 [animation-delay:360ms] sm:flex-row">
                        <Botao to="/contato">
                            Agende uma consulta <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Botao>
                        <Botao to="/areas-de-atuacao" variante="claro">Áreas de atuação</Botao>
                    </div>
                </div>

                <div className="relative border-t border-white/10 bg-navy-950/40 backdrop-blur-sm">
                    <div className="container grid grid-cols-2 lg:grid-cols-4">
                        {numeros.map(({ valor, rotulo }, i) => (
                            <div
                                key={rotulo}
                                className={`animate-fade-up py-6 md:py-8 ${i % 2 ? 'pl-6' : ''} ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''} ${i < 2 ? 'border-b border-white/10 lg:border-b-0' : ''}`}
                                style={{ animationDelay: `${480 + i * 100}ms` }}
                            >
                                <p className="font-serif text-3xl font-medium text-gold-300 md:text-4xl">{valor}</p>
                                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-white/70">{rotulo}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <FiArrowDown aria-hidden className="absolute bottom-40 right-8 hidden animate-scroll-hint text-xl text-white/50 lg:block" />
            </section>

            {/* ##### O ESCRITÓRIO ##### */}
            <section className="overflow-hidden py-24 md:py-36">
                <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    <Reveal className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/5] overflow-hidden shadow-card sm:aspect-[4/4] lg:aspect-[4/5]">
                            <img src="/images/escritorio.jpg" alt="Sala de reuniões do escritório" loading="lazy" className="h-full w-full object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -right-4 hidden w-1/2 border-8 border-ivory-100 shadow-card sm:block md:-right-10">
                            <img src="/images/assinatura.jpg" alt="Assinatura de contrato" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                        </div>
                        <div className="absolute -left-4 -top-4 -z-10 h-2/3 w-2/3 border border-gold-400/60 md:-left-8 md:-top-8" />
                    </Reveal>

                    <div className="order-1 lg:order-2">
                        <Titulo eyebrow="O escritório">
                            Uma parceria estratégica, <em className="text-gold-600">não apenas</em> uma prestação de serviço.
                        </Titulo>
                        <Reveal delay={120} className="mt-8 space-y-5 text-base leading-relaxed text-ink/75 md:text-lg">
                            <p>
                                A Pontes & Britto tem a marca da assessoria jurídica empresarial full service. Oferecemos assessoria nas questões mais complexas de clientes de grande porte, bem como no atendimento integral das empresas do chamado middle market e startups.
                            </p>
                            <p>
                                Nossos advogados, constantemente atualizados sobre as novas exigências legais, asseguram o cumprimento sistemático e consistente da legislação por parte do cliente.
                            </p>
                        </Reveal>
                        <Reveal delay={200} className="mt-12 grid gap-8 border-t border-navy-800/10 pt-10 sm:grid-cols-3">
                            {pilares.map(({ titulo, texto }, i) => (
                                <div key={titulo}>
                                    <span className="font-serif text-sm italic text-gold-600">0{i + 1}</span>
                                    <h3 className="mt-1 text-2xl font-medium text-navy-900">{titulo}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{texto}</p>
                                </div>
                            ))}
                        </Reveal>
                        <Reveal delay={260} className="mt-12">
                            <Link to="/sobre" className="link-underline inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
                                Conheça nossa história <FiArrowRight />
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ##### ÁREAS DE ATUAÇÃO ##### */}
            <section className="grain relative overflow-hidden bg-navy-900 py-24 md:py-36">
                <div className="container relative">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <Titulo eyebrow="Áreas de atuação" claro descricao="Soluções jurídicas completas, do contencioso à consultoria preventiva.">
                            Especialistas no que é essencial para você.
                        </Titulo>
                        <Reveal>
                            <Botao to="/areas-de-atuacao" variante="claro">
                                Ver todas <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Botao>
                        </Reveal>
                    </div>

                    <div className="-mx-5 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
                        {areas.map(({ slug, titulo, resumo, imagem }, i) => (
                            <Reveal key={slug} delay={i * 90} className="w-[72%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
                                <Link
                                    to={`/areas-de-atuacao#${slug}`}
                                    className="group relative block aspect-[2/3] overflow-hidden bg-navy-950"
                                >
                                    <img src={imagem} alt="" loading="lazy" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-45" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                                        <span className="font-serif text-lg italic text-gold-300">0{i + 1}</span>
                                        <FiArrowUpRight className="text-xl text-white/0 transition-all duration-500 group-hover:text-gold-300" />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-6">
                                        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/50">Direito</p>
                                        <h3 className="mt-1 text-3xl font-medium text-white">{titulo}</h3>
                                        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] max-lg:grid-rows-[1fr]">
                                            <p className="overflow-hidden text-sm leading-relaxed text-white/70">
                                                <span className="block pt-3">{resumo}</span>
                                            </p>
                                        </div>
                                        <span className="mt-5 block h-px w-10 bg-gold-400 transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ##### CITAÇÃO ##### */}
            <section className="bg-ivory-200 py-24 md:py-32">
                <Reveal className="container max-w-4xl text-center">
                    <span aria-hidden className="block font-serif text-8xl leading-none text-gold-500">“</span>
                    <blockquote className="-mt-6 font-serif text-3xl font-medium italic leading-snug text-navy-900 md:text-5xl">
                        Empresário bem-sucedido é empresário bem assessorado. Na Justiça, a prevenção é mais efetiva que qualquer defesa.
                    </blockquote>
                    <p className="mt-10 text-xs font-semibold uppercase tracking-eyebrow text-ink/60">
                        {socios[0].nome} <span className="mx-2 text-gold-500">—</span> Sócio
                    </p>
                </Reveal>
            </section>

            {/* ##### SÓCIOS ##### */}
            <section className="py-24 md:py-36">
                <div className="container">
                    <Titulo eyebrow="Os sócios" centralizado descricao="Advogados que unem sólida formação acadêmica, experiência de mercado e proximidade com cada cliente.">
                        Quem está ao seu lado.
                    </Titulo>

                    <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
                        {socios.map((socio, i) => (
                            <Reveal key={socio.id} delay={i * 120}>
                                <Link to={`/sobre#${socio.slug}`} className="group block">
                                    <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200">
                                        <img
                                            src={socio.imagem1}
                                            alt={socio.nome}
                                            loading="lazy"
                                            className="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <span className="absolute bottom-5 left-5 inline-flex translate-y-3 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                            Ver perfil <FiArrowRight />
                                        </span>
                                    </div>
                                    <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-600">{socio.areaatuacao}</p>
                                    <h3 className="mt-2 text-3xl font-medium text-navy-900">{socio.nome}</h3>
                                    <p className="mt-1 text-sm text-ink/50">{socio.oab}</p>
                                    <p className="mt-4 text-sm leading-relaxed text-ink/70">{socio.shortdesc}</p>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ##### PUBLICAÇÕES ##### */}
            <section className="border-t border-navy-800/10 bg-ivory-50 py-24 md:py-32">
                <div className="container">
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <Titulo eyebrow="Conteúdo" descricao="Decisões relevantes, análises e orientações jurídicas explicadas de forma simples.">
                            Acompanhe nas redes.
                        </Titulo>
                        <Reveal>
                            <Botao href={escritorio.redes.instagram} variante="escuro">
                                <FaInstagram className="text-base" /> Seguir no Instagram
                            </Botao>
                        </Reveal>
                    </div>

                    <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
                        {publicacoes.map((post, i) => (
                            <Reveal key={post} delay={(i % 3) * 100}>
                                <a href={escritorio.redes.instagram} target="_blank" rel="noreferrer" className="group relative block overflow-hidden">
                                    <img src={`/images/${post}.png`} alt="Publicação do escritório nas redes sociais" loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/60">
                                        <FaInstagram className="scale-75 text-3xl text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ##### ONDE ESTAMOS ##### */}
            <section className="grid lg:grid-cols-2">
                <div className="grain relative bg-navy-950 px-5 py-24 sm:px-10 md:py-32 lg:px-16 xl:pl-[max(4rem,calc((100vw-1240px)/2+2rem))]">
                    <Titulo eyebrow="Onde estamos" claro>
                        No coração do Centro do Rio.
                    </Titulo>
                    <Reveal delay={120} className="mt-14">
                        <InfoContato claro />
                    </Reveal>
                </div>
                <Mapa className="min-h-[420px]" />
            </section>

            <Chamada />
        </>
    )
}

export default Home
