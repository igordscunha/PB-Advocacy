import socios from "Data/socios.json"
import { Link } from "react-router-dom"

export const Rodape = () => {
    return(
        <section className="bg-azul-pb py-12">
            <div className="text-yellow-500 flex flex-col items-center gap-8 md:flex-row md:justify-between md:px-12">
                <div>
                    <ul className="flex flex-col gap-2">
                        <Link to='/'><span className="cursor-pointer hover:text-yellow-300"><li>Pontes e Britto Advocacia</li></span></Link>
                        <Link to='/sobre'><span className="cursor-pointer hover:text-yellow-300"><li>Sobre</li></span></Link>
                        <Link to='/areas-de-atuacao'><span className="cursor-pointer hover:text-yellow-300"><li>Áreas de Atuação</li></span></Link>
                        <Link to='/contato'><span className="cursor-pointer hover:text-yellow-300"><li>Contato</li></span></Link>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 cursor-default select-none">
                    <span>{socios[0].oab}</span>
                    <span>{socios[1].oab}</span>
                    <span>{socios[2].oab}</span>
                </div>
            </div>
        </section>
    )
}