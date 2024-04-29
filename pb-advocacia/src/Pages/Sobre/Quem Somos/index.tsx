import { Linha } from "Components/Linha"
import socios from "Data/socios.json"

export const QuemSomos = () => {
    return(
        <section className="py-12 px-16 md:px-32 bg-bg-branco">
            <h2 className="text-4xl w-fit text-azul-pb p-1 border-b-2 border-amber-400 md:text-5xl md:mb-24">Por trás da tela</h2>

            <div className="block lg:flex lg:justify-center lg:items-center">
                <div>
                    <img className="mt-12 mb-3 rounded-3xl md:w-2/3 md:shadow-lg" src={socios[1].imagem2} alt={socios[1].nome}/>
                </div>
                <div className="lg:w-1/2">
                    <h4 className="text-left text-2xl font-semibold">{socios[1].nome}</h4>
                    <p className="text-left pb-5">{socios[1].oab}</p>
                    <p className="text-left pb-5 text-lg font-medium">Áreas de Atuação: {socios[1].areaatuacao}</p>
                    <p className="text-left text-lg">{socios[1].longdesc}</p>
                </div>
            </div>

            <Linha/>

            <div className="block lg:flex lg:justify-center lg:items-center">
                <div>
                    <img className="mt-12 mb-3 rounded-3xl md:w-2/3 md:shadow-lg" src={socios[0].imagem2} alt={socios[0].nome}/>
                </div>
                <div className="lg:w-1/2">
                    <h4 className="text-left text-2xl font-semibold">{socios[0].nome}</h4>
                    <p className="text-left pb-5">{socios[0].oab}</p>
                    <p className="text-left pb-5 text-lg font-medium">Áreas de Atuação: {socios[0].areaatuacao}</p>
                    <p className="text-left text-lg">{socios[0].longdesc}</p>
                </div>
            </div>

            <Linha/>

            <div className="block lg:flex lg:items-center pb-12">
                <div>
                    <img className="mt-12 mb-3 rounded-3xl md:w-2/3 md:shadow-lg" src={socios[2].imagem2} alt={socios[2].nome}/>
                </div>
                <div className="lg:w-4/5">
                    <h4 className="text-left text-2xl font-semibold">{socios[2].nome}</h4>
                    <p className="text-left pb-5">{socios[2].oab}</p>
                    <p className="text-left pb-5 text-lg font-medium">Áreas de Atuação: {socios[2].areaatuacao}</p>
                    <p className="text-left text-lg">{socios[2].longdesc}</p>
                </div>
            </div>
        </section>
    )
}