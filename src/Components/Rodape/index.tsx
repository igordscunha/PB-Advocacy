import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import Logo from 'Assets/logo.png'
import socios from 'Data/socios.json'
import { areas } from 'Data/areas'
import { escritorio } from 'Data/escritorio'
import { links } from 'Components/Header'

const redes = [
    { href: escritorio.redes.instagram, label: 'Instagram', Icone: FaInstagram },
    { href: escritorio.redes.linkedin, label: 'LinkedIn', Icone: FaLinkedinIn },
    { href: escritorio.redes.facebook, label: 'Facebook', Icone: FaFacebookF },
    { href: escritorio.redes.youtube, label: 'YouTube', Icone: FaYoutube },
]

export const Rodape = () => {
    return (
        <footer className="grain relative overflow-hidden bg-navy-950 text-white/70">
            <div className="container relative grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                    <img src={Logo} alt="Pontes & Britto Advocacia" className="w-44" />
                    <p className="mt-6 max-w-xs text-sm leading-relaxed">
                        Assessoria jurídica full service: ágil, eficiente e personalizada. Rio de Janeiro e Portugal.
                    </p>
                    <div className="mt-8 flex gap-3">
                        {redes.map(({ href, label, Icone }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center border border-white/20 text-sm transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
                            >
                                <Icone />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow text-gold-400">Navegação</h3>
                    <ul className="mt-6 space-y-3 text-sm">
                        {links.map(({ to, label }) => (
                            <li key={to}><Link to={to} className="transition-colors hover:text-gold-300">{label}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow text-gold-400">Áreas de atuação</h3>
                    <ul className="mt-6 space-y-3 text-sm">
                        {areas.map(({ slug, titulo }) => (
                            <li key={slug}><Link to={`/areas-de-atuacao#${slug}`} className="transition-colors hover:text-gold-300">Direito {titulo}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow text-gold-400">Contato</h3>
                    <address className="mt-6 space-y-3 text-sm not-italic leading-relaxed">
                        <p>{escritorio.endereco.linha1}<br />{escritorio.endereco.linha2}<br />CEP {escritorio.endereco.cep}</p>
                        <p><a href={`mailto:${escritorio.emails[0]}`} className="transition-colors hover:text-gold-300">{escritorio.emails[0]}</a></p>
                        <p>{escritorio.telefones[0]}</p>
                    </address>
                </div>
            </div>

            <div className="relative border-t border-white/10">
                <div className="container flex flex-col gap-4 py-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} Pontes & Britto Advocacia. Todos os direitos reservados.</p>
                    <p className="flex flex-wrap gap-x-4 gap-y-1">
                        {socios.map((socio) => <span key={socio.id}>{socio.oab}</span>)}
                    </p>
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 self-start uppercase tracking-[0.18em] transition-colors hover:text-gold-300 md:self-auto"
                    >
                        Topo <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    )
}
