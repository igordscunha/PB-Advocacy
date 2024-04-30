export const RedesSociais = () => {
    return(
        <section className="p-12 bg-bg-branco">
            <div className="flex justify-center">
                <h2 className="text-4xl font-semibold w-fit text-azul-pb border-b-2 border-amber-400 md:text-7xl">Redes Sociais</h2>
            </div>
            <div className="text-azul-pb text-4xl flex justify-center gap-3 py-14">
                <i className="fi fi-brands-whatsapp cursor-pointer"></i>
                <i className="fi fi-brands-twitter cursor-pointer"></i>
                <i className="fi fi-brands-facebook cursor-pointer"></i>
                <i className="fi fi-brands-instagram cursor-pointer"></i>
            </div>

            <div className="flex flex-col gap-8 items-center md:hidden">
                <img className="rounded-2xl shadow-xl w-1/2 cursor-pointer" src='../../../../public/images/redesocial5.png' alt='rede social1'/>
                <img className="rounded-2xl shadow-xl w-1/2 cursor-pointer" src='../../../../public/images/redesocial3.png' alt='rede social2'/>
                <img className="rounded-2xl shadow-xl w-1/2 cursor-pointer" src='../../../../public/images/redesocial6.png' alt='rede social3'/>
            </div>

            <div className="hidden md:grid grid-cols-3 grid-rows-2 justify-items-center gap-12 md:pb-24">
                <img className="rounded-2xl shadow-xl cursor-pointer md:hover:translate-y-2 md:transition-transform" src='../../../../public/images/redesocial3.png' alt='rede social2'/>
                <img className="rounded-2xl shadow-xl cursor-pointer md:hover:translate-y-2 md:transition-transform" src='../../../../public/images/redesocial6.png' alt='rede social3'/>
                <img className="rounded-2xl shadow-xl cursor-pointer md:hover:translate-y-2 md:transition-transform" src='../../../../public/images/redesocial2.png' alt='rede social4'/>
                <img className="rounded-2xl shadow-xl cursor-pointer md:hover:-translate-y-2 md:transition-transform" src='../../../../public/images/redesocial4.png' alt='rede social5'/>
                <img className="rounded-2xl shadow-xl cursor-pointer md:hover:-translate-y-2 md:transition-transform" src='../../../../public/images/redesocial5.png' alt='rede social1'/>
                <img className="rounded-2xl shadow-xl cursor-pointer md:hover:-translate-y-2 md:transition-transform" src='../../../../public/images/redesocial1.png' alt='rede social6'/>
            </div>
            
        </section>
    )
}