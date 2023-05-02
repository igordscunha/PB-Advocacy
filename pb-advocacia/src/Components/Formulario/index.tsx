import { BotaoEnviar } from "Components/Botao/BotaoEnviar"
import { useState, useRef } from "react"
import './form.css'

interface FormularioProps{
    a: string
    b: string
    c: string
    d: string
}

export const Formulario = ({a, b, c, d}: FormularioProps) => {

const [mostrarMensagem, setMostrarMensagem] = useState(false)
const formRef = useRef<HTMLFormElement>(null)

const mensagem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMostrarMensagem(true)
    formRef.current?.reset()
}

    return(
        <div className="p-12 md:pr-32 md:w-full">
            <div className="md:flex md:justify-center">
                <h2 className="text-4xl w-fit text-azul-pb p-1 mb-16 border-b-2 border-amber-400 md:mb-24 md:text-center">Entre em contato</h2>
            </div>
            <form onSubmit={mensagem} ref={formRef} className="flex flex-col space-y-6 py-4 bg-white md:p-24 md:rounded-xl">
                <input placeholder={a} required={true} className="text-left p-2 border-b-2 border-stone-300 placeholder:italic placeholder:text-slate-400"/>
                <input placeholder={b} required={true} type="email" className="text-left p-2 border-b-2 border-stone-300 placeholder:italic placeholder:text-slate-400"/>
                <input placeholder={c} required={true} type="number" className="text-left p-2 border-b-2 border-stone-300 placeholder:italic placeholder:text-slate-400 input-number"/>
                <textarea placeholder={d} required={true} className="text-left p-2 border-b-2 border-stone-300 resize-none h-40 placeholder:italic placeholder:text-slate-400"/>
            
                <div className="w-full">
                    <BotaoEnviar>
                    Enviar
                    </BotaoEnviar>
                </div>

                {mostrarMensagem && (<p className="pt-6 italic p-6 md:p-0 md:pt-6">Obrigado pela sua mensagem. Entraremos em contato assim que possível!</p>)}
            </form>
        </div>
    )
}