import { Nav } from "../Nav"
import { Outlet } from 'react-router-dom'

export const Banner = () => {
    return (
        <>
            <section className="bg-[url('/public/images/banner.jpg')] bg-center md:bg-top bg-no-repeat bg-cover bg-fixed h-screen">
                <Nav/>
                <div className="flex justify-center w-full h-screen items-center absolute top-0 left-0 z-0">
                    <h2 className="text-white text-2xl md:text-4xl tracking-widest cursor-default select-none"><span className="text-4xl md:text-6xl font-semibold tracking-wider">Pontes & Britto</span><br/>Advocacia</h2>
                </div>
            </section>
            <div>
                <Outlet/>
            </div>
        </>
    )
}