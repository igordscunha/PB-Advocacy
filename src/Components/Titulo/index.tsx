import { ReactNode } from 'react'
import { Reveal } from 'Components/Reveal'

interface TituloProps {
    eyebrow: string
    children: ReactNode
    descricao?: string
    claro?: boolean
    centralizado?: boolean
    className?: string
}

export const Titulo = ({ eyebrow, children, descricao, claro = false, centralizado = false, className = '' }: TituloProps) => {
    return (
        <Reveal className={`${centralizado ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className={`mt-5 text-4xl font-medium leading-[1.1] md:text-5xl lg:text-[3.4rem] ${claro ? 'text-white' : 'text-navy-900'}`}>
                {children}
            </h2>
            {descricao && (
                <p className={`mt-6 text-base leading-relaxed md:text-lg ${claro ? 'text-white/70' : 'text-ink/70'}`}>
                    {descricao}
                </p>
            )}
        </Reveal>
    )
}
