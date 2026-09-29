import { escritorio } from 'Data/escritorio'

interface MapaProps {
    className?: string
}

export const Mapa = ({ className = '' }: MapaProps) => {
    return (
        <div className={`relative overflow-hidden bg-ivory-200 ${className}`}>
            <iframe
                className="absolute inset-0 h-full w-full grayscale-[70%] transition duration-700 hover:grayscale-0"
                src={escritorio.mapa}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório no mapa"
            />
        </div>
    )
}
