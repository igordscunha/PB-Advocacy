import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import Logo from 'Assets/logo.png'
import { escritorio } from 'Data/escritorio'

export const links = [
    { to: '/', label: 'Início' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/areas-de-atuacao', label: 'Áreas de Atuação' },
    { to: '/contato', label: 'Contato' },
]

export const Header = () => {
    const [rolou, setRolou] = useState(false)
    const [aberto, setAberto] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        const aoRolar = () => setRolou(window.scrollY > 40)
        aoRolar()
        window.addEventListener('scroll', aoRolar, { passive: true })
        return () => window.removeEventListener('scroll', aoRolar)
    }, [])

    useEffect(() => setAberto(false), [pathname])

    useEffect(() => {
        document.body.style.overflow = aberto ? 'hidden' : ''
        const aoTeclar = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
        window.addEventListener('keydown', aoTeclar)
        return () => window.removeEventListener('keydown', aoTeclar)
    }, [aberto])

    const solido = rolou || aberto

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                solido ? 'bg-navy-950/90 py-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md' : 'py-6'
            }`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" aria-label="Pontes & Britto — página inicial" className="relative z-50">
                    <img src={Logo} alt="Pontes & Britto Advocacia" className={`transition-all duration-500 ${solido ? 'w-28' : 'w-32 md:w-40'}`} />
                </Link>

                <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end
                            className={({ isActive }) =>
                                `link-underline text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                                    isActive ? 'is-active text-gold-300' : 'text-white/80 hover:text-white'
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    <a
                        href={escritorio.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 border border-gold-400/60 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-300 transition-all hover:bg-gold-400 hover:text-navy-950"
                    >
                        Fale conosco
                        <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </nav>

                <button
                    type="button"
                    onClick={() => setAberto(!aberto)}
                    aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={aberto}
                    aria-controls="menu-mobile"
                    className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
                >
                    <span className={`block h-px w-7 bg-white transition-all duration-300 ${aberto ? 'translate-y-[3.5px] rotate-45' : ''}`} />
                    <span className={`block h-px w-7 bg-white transition-all duration-300 ${aberto ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
                </button>
            </div>

            {/* ##### MOBILE ###### */}
            <div
                id="menu-mobile"
                className={`fixed inset-0 z-40 flex h-[100dvh] flex-col bg-navy-950 px-8 pb-10 pt-32 transition-all duration-500 lg:hidden ${
                    aberto ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                <nav aria-label="Menu móvel" className="flex flex-col">
                    {links.map(({ to, label }, i) => (
                        <NavLink
                            key={to}
                            to={to}
                            end
                            style={{ transitionDelay: aberto ? `${120 + i * 70}ms` : '0ms' }}
                            className={({ isActive }) =>
                                `flex items-baseline gap-4 border-b border-white/10 py-5 font-serif text-4xl transition-all duration-500 ${
                                    aberto ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                } ${isActive ? 'text-gold-300' : 'text-white'}`
                            }
                        >
                            <span className="font-sans text-xs text-gold-500">0{i + 1}</span>
                            {label}
                        </NavLink>
                    ))}
                </nav>
                <div className="mt-auto space-y-1 text-sm text-white/60">
                    <p>{escritorio.telefones[0]}</p>
                    <p>{escritorio.emails[0]}</p>
                </div>
            </div>
        </header>
    )
}
