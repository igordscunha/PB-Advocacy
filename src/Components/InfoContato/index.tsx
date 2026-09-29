import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { escritorio } from 'Data/escritorio'

interface InfoContatoProps {
    claro?: boolean
}

export const InfoContato = ({ claro = false }: InfoContatoProps) => {
    const titulo = `font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow ${claro ? 'text-gold-400' : 'text-gold-600'}`
    const texto = `mt-3 space-y-1 leading-relaxed ${claro ? 'text-white/75' : 'text-ink/75'}`
    const icone = `mt-1 flex h-10 w-10 shrink-0 items-center justify-center border ${claro ? 'border-white/20 text-gold-300' : 'border-navy-800/20 text-navy-800'}`
    const link = `transition-colors ${claro ? 'hover:text-gold-300' : 'hover:text-gold-600'}`

    const itens = [
        {
            Icone: FiMapPin,
            titulo: 'Endereço',
            conteudo: (
                <p>{escritorio.endereco.linha1}<br />{escritorio.endereco.linha2}<br />CEP {escritorio.endereco.cep}</p>
            ),
            largo: false,
        },
        {
            Icone: FiPhone,
            titulo: 'Telefones',
            conteudo: escritorio.telefones.map((tel) => (
                <p key={tel}><a href={`tel:+55${tel.replace(/\D/g, '')}`} className={link}>{tel}</a></p>
            )),
            largo: false,
        },
        {
            Icone: FiClock,
            titulo: 'Atendimento',
            conteudo: <p>{escritorio.horario}</p>,
            largo: false,
        },
        {
            Icone: FiMail,
            titulo: 'E-mails',
            largo: true,
            conteudo: escritorio.emails.map((email) => (
                <p key={email}><a href={`mailto:${email}`} className={link}>{email}</a></p>
            )),
        },
    ]

    return (
        <ul className="grid gap-x-8 gap-y-10 text-[0.95rem] sm:grid-cols-2">
            {itens.map(({ Icone, titulo: t, conteudo, largo }) => (
                <li key={t} className={`flex min-w-0 gap-4 ${largo ? 'sm:col-span-2' : ''}`}>
                    <span className={icone}><Icone /></span>
                    <div className="min-w-0 [overflow-wrap:anywhere]">
                        <h3 className={titulo}>{t}</h3>
                        <div className={texto}>{conteudo}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
