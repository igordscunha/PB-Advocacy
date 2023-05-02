import { Banner } from "Components/Banner"
import { OndeVcPodeNosAchar } from "./Onde voce pode nos achar"
import { Rodape } from "Components/Rodape"
import { Formulario } from "Components/Formulario"
import { Mapa } from "Components/Mapa"

export const Contato = () => {
    return(
        <section>

            {/* ##### MOBILE ###### */}
            <div className="lg:hidden">
                {/* <Banner/> */}
                <div className="bg-bg-branco">
                    <Formulario a={'Seu nome'} b={'Seu email'} c={'Seu telefone (DDD + Número)'} d={'Digite aqui sua mensagem...'}/>

                    <div className="flex justify-center">
                        <p className="p-12 text-2xl font-semibold italic">Conte com a experiência da nossa equipe. Entre em contato com um advogado online e resolva seu problema.</p>
                    </div>
                </div>
                <OndeVcPodeNosAchar/>
                <div className="flex justify-center pb-16 bg-bg-branco">
                    <Mapa/>
                </div>
                <Rodape/>
            </div>

            {/* ##### DESKTOP ###### */}
            <div className="hidden lg:block bg-bg-branco">
                {/* <Banner/> */}

                <div className="grid grid-cols-2 gap-4">
                    <OndeVcPodeNosAchar/>
                    <div className="bg-bg-branco">
                        <Formulario a={'Seu nome'} b={'Seu email'} c={'Seu telefone (DDD + Número)'} d={'Digite aqui sua mensagem...'}/>
                    </div>
                </div>

                <div className="grid grid-cols-2 pb-24 pl-24 pr-16">
                    <div className="flex justify-center flex-wrap">
                        <Mapa/>
                    </div>

                    <div className="flex justify-center">
                        <p className="p-12 text-2xl font-semibold italic w-3/4">Conte com a experiência da nossa equipe. Entre em contato com um advogado online e resolva seu problema.</p>
                    </div>
                </div>

                <Rodape/>
            </div>
        </section>
    )
}