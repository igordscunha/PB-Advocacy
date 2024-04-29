import { BotaoVoltar } from "Components/Botao/BotaoVoltar"
import { Nav } from "Components/Nav"

export const NotFound = () => {
    return(
        <div>
            <div className="bg-azul-pb h-32">
                <Nav/>
            </div>
            <div className="bg-[url('/public/images/notfound.png')] bg-center md:bg-top bg-no-repeat bg-contain h-screen">
                <div className="flex justify-start pl-40 pt-12">
                    <BotaoVoltar>
                        {'< Voltar'}
                    </BotaoVoltar>
                </div>
            </div>
        </div>
    )
}