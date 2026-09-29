import { FaWhatsapp } from 'react-icons/fa'
import { escritorio } from 'Data/escritorio'

export const WhatsAppFlutuante = () => {
    return (
        <a
            href={escritorio.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-verde-zap p-4 text-white shadow-[0_15px_35px_-10px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8"
        >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-verde-zap/40 [animation-duration:2.5s]" />
            <FaWhatsapp className="text-2xl" />
        </a>
    )
}
