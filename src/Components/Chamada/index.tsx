import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { Botao } from 'Components/Botao'
import { Reveal } from 'Components/Reveal'
import { escritorio } from 'Data/escritorio'

export const Chamada = () => {
    return (
        <section className="grain relative overflow-hidden bg-navy-900 py-24 md:py-32">
            <img src="/images/assinatura.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />

            <Reveal className="container relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                    <span className="eyebrow">Dúvidas?</span>
                    <h2 className="mt-5 text-4xl font-medium leading-[1.1] text-white md:text-6xl">
                        Tenha à disposição <em className="text-gold-300">décadas</em> de experiência jurídica.
                    </h2>
                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                        Fale agora mesmo com advogados especialistas que vão entender o seu caso e indicar o melhor caminho.
                    </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:shrink-0">
                    <Botao href={escritorio.whatsapp} variante="zap">
                        <FaWhatsapp className="text-base" /> WhatsApp
                    </Botao>
                    <Botao to="/contato" variante="claro">
                        Enviar mensagem <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Botao>
                </div>
            </Reveal>
        </section>
    )
}
