import { ReactElement } from "react"

interface BotaoZapProps {
    children: ReactElement | string
}

export const BotaoZap = ({children}: BotaoZapProps) => {
    return(
        <button className="bg-verde-zap py-3 px-5 rounded-3xl text-azul-pb">
            {children}
        </button>
    )
}