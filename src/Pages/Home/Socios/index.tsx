import socios from "Data/socios.json"

export const Socios = () => {
    return(
        <section className="p-12 bg-bg-branco">
            <h2 className="text-4xl font-semibold ml-6 md:ml-16 w-fit text-azul-pb border-b-2 border-amber-400 md:text-7xl md:mb-24">Os Sócios</h2>
            
            {/* ##### MOBILE ##### */}
            <div className="md:hidden">
                <div className="text-azul-pb py-12 flex flex-col items-center">
                    <h3 className="text-2xl font-bold">{socios[0].nome}</h3>
                    <p className="py-6">{socios[0].oab}<br/>
                        {socios[0].shortdesc}
                    </p>
                    <img className="rounded-3xl shadow-md w-1/2" src={socios[0].imagem1} alt={socios[0].nome}/>
                </div>

                <div className="text-azul-pb py-12 flex flex-col items-center">
                    <h3 className="text-2xl font-bold">{socios[1].nome}</h3>
                    <p className="py-6">{socios[1].oab}<br/>
                        {socios[1].shortdesc}
                    </p>
                    <img className="rounded-3xl shadow-md w-1/2" src={socios[1].imagem1} alt={socios[1].nome}/>
                </div>

                <div className="text-azul-pb py-12 flex flex-col items-center">
                    <h3 className="text-2xl font-bold">{socios[2].nome}</h3>
                    <p className="py-6">{socios[2].oab}<br/>
                        {socios[2].shortdesc}
                    </p>
                    <img className="rounded-3xl shadow-md w-1/2" src={socios[2].imagem1} alt={socios[2].nome}/>
                </div>
            </div>

            {/* DESKTOP */}

            <div className="hidden md:grid grid-cols-3 gap-2 justify-items-center">
                <div className="text-azul-pb py-12 w-3/5">
                    <h3 className="text-2xl font-bold pb-4">{socios[0].nome}</h3>
                    <img className="rounded-3xl shadow-lg" src={socios[0].imagem1} alt={socios[0].nome}/>
                    <p className="py-6">{socios[0].oab}<br/>
                        {socios[0].shortdesc}
                    </p>
                </div>

                <div className="text-azul-pb py-12 w-3/5">
                    <h3 className="text-2xl font-bold pb-4">{socios[1].nome}</h3>
                    <img className="rounded-3xl shadow-lg" src={socios[1].imagem1} alt={socios[1].nome}/>
                    <p className="py-6">{socios[1].oab}<br/>
                        {socios[1].shortdesc}
                    </p>
                </div>

                <div className="text-azul-pb py-12 w-3/5">
                    <h3 className="text-2xl font-bold pb-4">{socios[2].nome}</h3>
                    <img className="rounded-3xl shadow-lg" src={socios[2].imagem1} alt={socios[2].nome}/>
                    <p className="py-6">{socios[2].oab}<br/>
                        {socios[2].shortdesc}
                    </p>
                </div>
            </div>

        </section>
    )
}