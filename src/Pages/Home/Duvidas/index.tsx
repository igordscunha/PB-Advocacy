import { BotaoZap } from "Components/Botao/BotaoZap"


export const Duvidas = () => {
    return(
        <section className="p-12 bg-bg-branco md:p-24">
            <div className="flex justify-center">
                <h2 className="text-4xl font-semibold w-fit text-azul-pb border-b-2 border-amber-400 mb-16 md:text-6xl">Dúvidas?</h2>
            </div>
            <div>
                <p className="text-azul-pb text-xl leading-8 pb-10">
                    Tenha a disposição décadas de experiência jurídica.<br/>Fale agora mesmo com advogados especialistas que vão te ajudar.
                </p>

                <BotaoZap children={<i className="fi fi-brands-whatsapp"> Fale Conosco</i>}/>
            </div>
        </section>
    )
}