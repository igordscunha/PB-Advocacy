import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { PageHero } from 'Components/PageHero'
import { Reveal } from 'Components/Reveal'
import { Formulario } from 'Components/Formulario'
import { Mapa } from 'Components/Mapa'
import { InfoContato } from 'Components/InfoContato'
import { Botao } from 'Components/Botao'
import { escritorio } from 'Data/escritorio'

const redes = [
    { href: escritorio.redes.instagram, label: 'Instagram', Icone: FaInstagram },
    { href: escritorio.redes.linkedin, label: 'LinkedIn', Icone: FaLinkedinIn },
    { href: escritorio.redes.facebook, label: 'Facebook', Icone: FaFacebookF },
    { href: escritorio.redes.youtube, label: 'YouTube', Icone: FaYoutube },
]

export const Contato = () => {
    return (
        <>
            <PageHero
                eyebrow="Contato"
                titulo="Vamos conversar sobre o seu caso."
                descricao="Conte com a experiência da nossa equipe. Entre em contato com um advogado e encontre a melhor solução para o seu problema."
                imagem="/images/hero-predios.jpg"
            />

            <section className="relative pb-24 md:pb-36">
                <div className="container relative z-10 -mt-12 grid gap-16 lg:-mt-20 lg:grid-cols-12 lg:gap-16">
                    <Reveal className="self-start bg-white p-8 shadow-card sm:p-12 lg:col-span-7 lg:p-16">
                        <span className="eyebrow">Envie uma mensagem</span>
                        <h2 className="mb-10 mt-4 text-4xl font-medium text-navy-900 md:text-5xl">Como podemos ajudar?</h2>
                        <Formulario />
                    </Reveal>

                    <div className="lg:col-span-5 lg:pt-32">
                        <Reveal delay={120}>
                            <span className="eyebrow">Fale diretamente</span>
                            <h2 className="mb-12 mt-4 text-4xl font-medium text-navy-900">Estamos à disposição.</h2>
                            <div>
                                <InfoContato />
                            </div>
                        </Reveal>

                        <Reveal delay={200} className="mt-12 border-t border-navy-800/10 pt-10">
                            <Botao href={escritorio.whatsapp} variante="zap" className="w-full sm:w-auto">
                                <FaWhatsapp className="text-base" /> Atendimento via WhatsApp
                            </Botao>
                            <div className="mt-8 flex gap-3">
                                {redes.map(({ href, label, Icone }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="flex h-11 w-11 items-center justify-center border border-navy-800/20 text-navy-800 transition-all hover:border-navy-800 hover:bg-navy-800 hover:text-white"
                                    >
                                        <Icone />
                                    </a>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Mapa className="h-[420px] md:h-[520px]" />
        </>
    )
}
