import { slide as Menu } from 'react-burger-menu';
import  Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';



export const Nav = () => {

let styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#ffffff'
    },
    bmBurgerBarsHover: {
        background: '#fdfbd0'
    },
    bmCrossButton: {
        height: '50px',
        width: '40px',
        position: 'absolute',
        right: '15px',
        top: '15px'
    },
    bmCross: {
        background: '#bdc3c7',
        width: '2px',
        height: '35px',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '4em 1em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#ffffff',
        padding: '0.8em 0',
    },
    bmItem: {
        display: 'flex',
        padding: '2em',
        width: '280px',
        textTransform: 'uppercase',
        borderBottom: '2px solid gray',
        borderTop: '1px solid gray'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
    }

    return (
        <>
        <div className="hidden md:flex pt-10 pl-16 md:justify-evenly absolute z-10 w-full">

            <div>
                <Link to='/'><img className='cursor-pointer relative' width={180} src={Logo} alt='logo'/></Link>
            </div>
            <ul className="flex justify-evenly w-full text-white w-1/3">
                <Link to='/sobre'><li className="hover:scale-125 hover:text-yellow-300 cursor-pointer transition-transform">Sobre</li></Link>
                <Link to='/areas-de-atuacao'><li className="hover:scale-125 hover:text-yellow-300 cursor-pointer transition-transform">Áreas de Atuação</li></Link>
                <Link to='/contato'><li className="hover:scale-125 hover:text-yellow-300 cursor-pointer transition-transform">Contato</li></Link>
            </ul>

        </div>

        {/* ##### MOBILE ########## */}

        <div className='md:hidden'>
            <Menu right width={'80%'} styles={styles} isOpen={false}>

                <a id="home" className="menu-item" href="/">Home</a>
                <a id="sobre" className="menu-item" href="/about">Sobre</a>
                <a id="areas" className="menu-item" href="/contact">Áreas de Atuação</a>
                <a id="contato" className="menu-item--small" href="">Contato</a>

            </Menu>
        </div>
        </>
    )
}