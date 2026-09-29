import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variante = 'gold' | 'claro' | 'escuro' | 'zap'

interface BotaoProps {
    children: ReactNode
    to?: string
    href?: string
    type?: 'button' | 'submit'
    variante?: Variante
    className?: string
    onClick?: () => void
}

const estilos: Record<Variante, string> = {
    gold: 'bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-[0_12px_30px_-12px_rgba(210,178,116,0.8)]',
    claro: 'border border-white/40 text-white hover:border-gold-400 hover:text-gold-300 backdrop-blur-sm',
    escuro: 'border border-navy-800/25 text-navy-800 hover:border-navy-800 hover:bg-navy-800 hover:text-white',
    zap: 'bg-verde-zap text-navy-950 hover:brightness-110 shadow-[0_12px_30px_-12px_rgba(37,211,102,0.7)]',
}

export const Botao = ({ children, to, href, type = 'button', variante = 'gold', className = '', onClick }: BotaoProps) => {
    const classes = `group inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${estilos[variante]} ${className}`

    if (to) {
        return <Link to={to} className={classes} onClick={onClick}>{children}</Link>
    }

    if (href) {
        return <a href={href} className={classes} target="_blank" rel="noreferrer" onClick={onClick}>{children}</a>
    }

    return <button type={type} className={classes} onClick={onClick}>{children}</button>
}
