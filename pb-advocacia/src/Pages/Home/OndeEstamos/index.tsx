import { Mapa } from "Components/Mapa"

export const OndeEstamos = () => {
    return(
        <section className="bg-azul-pb p-12">
            <h2 className="text-4xl font-semibold ml-6 md:ml-16 w-fit text-white border-b-2 border-amber-400 mb-8 md:text-7xl">Onde Estamos</h2>
            
            {/* ##### MOBILE ##### */}
            <div className="md:hidden">
                <div className="text-white text-left text-xl flex flex-col items-center">
                        <div>
                            <h4 className="uppercase font-semibold py-8">Endereço</h4>
                            <p>Praça Tiradentes, n. 9, sala 712, Centro, Rio de Janeiro, RJ<br/>CEP: 20060-070<br/></p>
                        </div>

                        <div>
                            <h4 className="uppercase font-semibold py-8">E-mail</h4>
                            <p>contato@pontesebritto.adv.br<br/>bruno@pontesebritto.adv.br<br/>hugo@pontesebritto.adv.br<br/>marcos@pontesebritto.adv.br</p>
                        </div>

                        <div>
                            <h4 className="uppercase font-semibold py-8">Telefones</h4>
                            <p>(21) 9 7275-0395<br/>(21) 9 8664-7284<br/>(21) 9 9643-3372</p>
                        </div>

                    <Mapa/>
                </div>
            </div>

            {/* ##### DESKTOP ###### */}

            <div className="hidden md:block py-16">

                <div className="text-white text-left text-xl flex gap-12 justify-center items-center">

                    <Mapa/>

                    <div>
                        <div>
                            <h4 className="uppercase font-semibold py-6">Endereço</h4>
                            <p>Praça Tiradentes, n. 9, sala 712, Centro, Rio de Janeiro, RJ<br/>CEP: 20060-070<br/></p>
                        </div>

                        <div>
                            <h4 className="uppercase font-semibold py-6">E-mail</h4>
                            <p>contato@pontesebritto.adv.br<br/>bruno@pontesebritto.adv.br<br/>hugo@pontesebritto.adv.br<br/>marcos@pontesebritto.adv.br</p>
                        </div>

                        <div>
                            <h4 className="uppercase font-semibold py-6">Telefones</h4>
                            <p>(21) 9 7275-0395<br/>(21) 9 8664-7284<br/>(21) 9 9643-3372</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}