export const Escritorio = () => {
    return (
        <section className="bg-azul-pb flex border-box">

            {/* ##### DESKTOP ###### */}
            <div className="hidden md:flex p-24 gap-10">
                <div className="flex flex-col text-white text-left w-3/5">
                    <h2 className="text-5xl font-semibold border-b-2 border-amber-400 mb-16 w-fit">O Escritório</h2>
                    <p className="text-justify">
                    Pontes & Britto tem a marca da assessoria jurídica empresarial full service: ágil, eficiente e personalizada.<br/><br/>
                    Oferecemos assessoria nas questões mais complexas de clientes com grande porte, bem como no atendimento integral das empresas do chamado middle market e startups.<br/><br/>
                    Nossos advogados, constantemente atualizados sobre as novas exigências legais, asseguram o cumprimento sistemático e consistente da legislação por parte do cliente, com o qual buscamos construir uma parceria estratégica.
                    </p>
                </div>
                <div className="flex">
                    <img className="rounded-full shadow-md max-lg:hidden" src='https://img.freepik.com/fotos-premium/parede-de-sala-de-escritorio-de-vidro_110893-1111.jpg?size=626&ext=jpg&ga=GA1.1.1195238419.1680105424&semt=sph' alt='escritorio'/>
                </div>
            </div>


            {/* ##### MOBILE ##### */}
            <div className="md:hidden p-12 flex flex-col gap-12 items-center">
                <div className="flex flex-col gap-12">
                    <h2 className="text-4xl font-semibold w-fit text-white border-b-2 border-amber-400">O Escritório</h2>
                    <img className="rounded-full shadow-md" src='https://img.freepik.com/fotos-premium/parede-de-sala-de-escritorio-de-vidro_110893-1111.jpg?size=626&ext=jpg&ga=GA1.1.1195238419.1680105424&semt=sph' alt='escritorio'/>
                </div>
                <div>                    
                    <p className="text-white text-left">
                    Pontes & Britto tem a marca da assessoria jurídica empresarial full service: ágil, eficiente e personalizada.<br/><br/>
                    Oferecemos assessoria nas questões mais complexas de clientes com grande porte, bem como no atendimento integral das empresas do chamado middle market e startups.<br/><br/>
                    Nossos advogados, constantemente atualizados sobre as novas exigências legais, asseguram o cumprimento sistemático e consistente da legislação por parte do cliente, com o qual buscamos construir uma parceria estratégica.
                    </p>
                </div>
            </div>
        </section>
    )
}