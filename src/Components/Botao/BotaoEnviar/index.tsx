import { ReactElement } from "react"

interface BotaoEnviarProps {
    children: ReactElement | string
}

export const BotaoEnviar = ({children}: BotaoEnviarProps) => {

    return(
        <button type="submit" className="bg-yellow-400 py-3 px-8 rounded-lg text-azul-pb mt-8">
            {children}
        </button>
    )
}