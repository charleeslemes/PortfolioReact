import './main.css';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main(){
    AOS.init({
        duration: 600,
        delay: 200,
    });


    function abrirModalMobile(){
        let modal = document.querySelector('.modalMenuMobile');

        modal.style.right="0";
        modal.style.display="block";
    }


    function fecharModalMobile(){
        let modal = document.querySelector('.modalMenuMobile');

        
        modal.style.display="none";
    }

    return(
        <div className="main">
            <header>
                <div className='logo'> <h2>Charles Lemes</h2> </div>

                <div className='menu-desktop'>
                    <ul>
                        <li> <a href='#'> Sobre </a> </li>
                        <li> <a href='#'> projetos </a> </li>
                        <li> <a target="_blank" href='https://github.com/charleeslemes/PortfolioReact'> Código do site </a> </li>
                    </ul>

                </div>


                <div className='menu-mobile'>
                   <div onClick={abrirModalMobile} className='icon-menu'> < FaBars/> </div>
                    <div className='modalMenuMobile'>
                   <div onClick={fecharModalMobile}><FaTimes/></div> 
                    <ul>
                        <li> <a href='#'> Sobre </a> </li>
                        <li> <a href='#'> projetos </a> </li>
                        <li> <a target="_blank" href='https://github.com/charleeslemes/PortfolioReact'> Código do site </a> </li>
                    </ul>
                    </div>
                </div>

            </header>

            <div className='bio1'data-aos="zoom-out-up"  >
            
            <div className='img-autor'></div>

            <h1 > Olá, Sou Charles Gabriel Lemes</h1>
            <p>Desenvolvedor Fron-end</p>

            <ul>
                <li><a target="_blank" href='https://github.com/charleeslemes'><FaGithub /></a></li>
                <li><a target="_blank" href='https://www.linkedin.com/in/charles-lemes-96a2a4211/'><FaLinkedin /></a></li>
                <li><a target="_blank" href='https://www.instagram.com/charleeslemes/'><FaInstagram /></a></li>
            </ul>

            </div>{/* bio1 */}


            <div className='seta'></div>


        </div>
    )
}