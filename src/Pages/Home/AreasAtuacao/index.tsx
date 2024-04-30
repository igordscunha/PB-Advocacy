export const AreasAtuacao = () => {
    return(
        <section className="bg-azul-pb p-12">
            <div className="flex justify-center">
                <h2 className="text-4xl font-semibold w-fit text-white border-b-2 border-amber-400 md:text-7xl">Áreas de Atuação</h2>
            </div>
            <div className="md:flex md:gap-16 md:justify-center md:py-24">
                <div className="flex flex-col items-center md:cursor-pointer md:hover:scale-125 md:transition-transform">
                    <img className="rounded-3xl shadow-xl mt-16 w-1/3 md:w-full" src='../../../../public/images/civil.png' alt='civil'/>
                    <h4 className="text-2xl text-white pt-4 uppercase">Civil</h4>
                </div>

                <div className="flex flex-col items-center md:cursor-pointer md:hover:scale-125 md:transition-transform">
                    <img className="rounded-3xl shadow-xl mt-16 w-1/3 md:w-full" src='../../../../public/images/trabalhista.png' alt='trabalhista'/>
                    <h4 className="text-2xl text-white pt-4 uppercase">Trabalhista</h4>
                </div>

                <div className="flex flex-col items-center md:cursor-pointer md:hover:scale-125 md:transition-transform">
                    <img className="rounded-3xl shadow-xl mt-16 w-1/3 md:w-full" src='../../../../public/images/digital.png' alt='digital'/>
                    <h4 className="text-2xl text-white pt-4 uppercase">Digital</h4>
                </div>

                <div className="flex flex-col items-center md:cursor-pointer md:hover:scale-125 md:transition-transform">
                    <img className="rounded-3xl shadow-xl mt-16 w-1/3 md:w-full" src='../../../../public/images/empresarial.png' alt='empresarial'/>
                    <h4 className="text-2xl text-white pt-4 uppercase">Empresarial</h4>
                </div>

                <div className="flex flex-col items-center md:cursor-pointer md:hover:scale-125 md:transition-transform">
                    <img className="rounded-3xl shadow-xl mt-16 w-1/3 md:w-full" src='../../../../public/images/internacional.png' alt='internacional'/>
                    <h4 className="text-2xl text-white pt-4 uppercase">Internacional</h4>
                </div>
            </div>
        </section>
    )
}