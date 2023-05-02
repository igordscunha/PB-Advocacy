import socios from 'Data/socios.json'
import { SiTwitter, SiYoutube, SiInstagram, SiWhatsapp, SiFacebook } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { TiLocation } from 'react-icons/ti'

export const OndeVcPodeNosAchar = () => {
    return(
        <section className="py-12 px-16 md:pl-32 bg-bg-branco text-azul-pb">

            <div className="md:flex md:justify-center md:mb-12">
                <h2 className="text-4xl w-fit text-azul-pb p-1 border-b-2 border-amber-400">Onde você pode nos achar</h2>
            </div>

            <div className='md:flex md:justify-between'>
                <div className='pt-8 space-y-2'>
                    <h4 className='text-xl py-4 flex items-center justify-center gap-2 md:text-2xl'><MdEmail/> Email</h4>
                    <p>{socios[1].email}</p>
                    <p>{socios[0].email}</p>
                    <p>{socios[2].email}</p>
                </div>

                <div className='pt-8 space-y-2'>
                    <h4 className='text-xl py-4 md:text-2xl flex items-center justify-center gap-2'><BsTelephoneFill/> Telefone</h4>
                    <p>{socios[1].telefone}</p>
                    <p>{socios[0].telefone}</p>
                    <p>{socios[2].telefone}</p>
                </div>
            </div>

            <div className='pt-8 md:flex md:flex-col md:justify-center md:items-center'>
                <h4 className='text-xl py-4 md:text-2xl flex items-center justify-center gap-2'><TiLocation/> Endereço</h4>
                <p>Praça Tiradentes, n. 9, sala 712, Centro, Rio de Janeiro, RJ<br/>CEP: 20060-070</p>
            </div>

            <div className='flex text-2xl gap-4 justify-center text-white mt-16'>
                <span className='bg-azul-pb rounded-full p-3 cursor-pointer'><SiTwitter/></span>
                <span className='bg-azul-pb rounded-full p-3 cursor-pointer'><SiInstagram/></span>
                <span className='bg-azul-pb rounded-full p-3 cursor-pointer'><SiYoutube/></span>
                <span className='bg-azul-pb rounded-full p-3 cursor-pointer'><SiWhatsapp/></span>
                <span className='bg-azul-pb rounded-full p-3 cursor-pointer'><SiFacebook/></span>
            </div>

        </section>
    )
}