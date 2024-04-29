import { ReactElement } from "react"
import { useNavigate } from 'react-router-dom'

interface BotaoVoltarProps{
    children: string | ReactElement
}

export const BotaoVoltar = ({children}: BotaoVoltarProps) => {

const navigate = useNavigate()

    return(
        <button onClick={() => navigate(-1)} className="bg-yellow-400 text-2xl py-3 px-8 rounded-lg text-azul-pb mt-8">
            {children}
        </button>
    )
}