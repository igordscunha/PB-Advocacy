import { useState, FormEvent } from 'react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { Botao } from 'Components/Botao'
import { areas } from 'Data/areas'

const campo = 'peer w-full border-0 border-b border-navy-800/20 bg-transparent px-0 pb-3 pt-6 text-base text-navy-900 placeholder-transparent transition-colors focus:border-gold-500 focus:outline-none focus:ring-0'
const rotulo = 'pointer-events-none absolute left-0 top-6 text-sm text-ink/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.68rem] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-gold-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.68rem] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.18em]'

export const Formulario = () => {
    const [enviado, setEnviado] = useState(false)

    const enviar = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEnviado(true)
        event.currentTarget.reset()
    }

    if (enviado) {
        return (
            <div className="flex min-h-[420px] flex-col items-start justify-center" role="status">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-2xl text-navy-950"><FiCheck /></span>
                <h3 className="mt-8 text-4xl font-medium text-navy-900">Mensagem enviada.</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-ink/70">
                    Obrigado pelo contato. Um de nossos advogados retornará o mais breve possível.
                </p>
                <button type="button" onClick={() => setEnviado(false)} className="link-underline mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
                    Enviar outra mensagem
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={enviar} className="grid gap-8 md:grid-cols-2">
            <div className="relative">
                <input id="nome" name="nome" placeholder="Nome" required autoComplete="name" className={campo} />
                <label htmlFor="nome" className={rotulo}>Nome completo</label>
            </div>
            <div className="relative">
                <input id="email" name="email" type="email" placeholder="E-mail" required autoComplete="email" className={campo} />
                <label htmlFor="email" className={rotulo}>E-mail</label>
            </div>
            <div className="relative">
                <input id="telefone" name="telefone" type="tel" placeholder="Telefone" required autoComplete="tel" inputMode="tel" className={campo} />
                <label htmlFor="telefone" className={rotulo}>Telefone (DDD + número)</label>
            </div>
            <div className="relative">
                <select id="area" name="area" defaultValue="" required className={`${campo} cursor-pointer appearance-none`}>
                    <option value="" disabled hidden></option>
                    {areas.map(({ slug, titulo }) => <option key={slug} value={slug}>Direito {titulo}</option>)}
                    <option value="outro">Outro assunto</option>
                </select>
                <label htmlFor="area" className="pointer-events-none absolute left-0 top-0 text-[0.68rem] uppercase tracking-[0.18em] text-ink/50">Área de interesse</label>
            </div>
            <div className="relative md:col-span-2">
                <textarea id="mensagem" name="mensagem" placeholder="Mensagem" required rows={4} className={`${campo} resize-none`} />
                <label htmlFor="mensagem" className={rotulo}>Como podemos ajudar?</label>
            </div>
            <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xs text-xs leading-relaxed text-ink/50">
                    Suas informações são tratadas com sigilo profissional e em conformidade com a LGPD.
                </p>
                <Botao type="submit" variante="gold">
                    Enviar mensagem <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Botao>
            </div>
        </form>
    )
}
