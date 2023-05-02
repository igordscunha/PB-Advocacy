export const Mapa = () => {
    return(
        <div>
            {/* ##### MOBILE ##### */}

            <div className="pt-12 md:hidden">
                <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6316.206542900384!2d-43.18701429776429!3d-22.90734469257304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f6655136ddf%3A0x3ae176cc624878ed!2sPra%C3%A7a%20Tiradentes%2C%209%20-%20sala%20712%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020060-070!5e0!3m2!1spt-BR!2sbr!4v1681933317218!5m2!1spt-BR!2sbr" height="450" loading="lazy" title="localizaçao"></iframe>
            </div>

            {/* ##### DESKTOP ###### */}

            <div className="pt-12 hidden md:block">
                <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6316.206542900384!2d-43.18701429776429!3d-22.90734469257304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f6655136ddf%3A0x3ae176cc624878ed!2sPra%C3%A7a%20Tiradentes%2C%209%20-%20sala%20712%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020060-070!5e0!3m2!1spt-BR!2sbr!4v1681933317218!5m2!1spt-BR!2sbr" height="450" width={540} loading="lazy" title="localizaçao"></iframe>
            </div>
        </div>
    )
}