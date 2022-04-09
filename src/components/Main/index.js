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
                        <li> <a href='#'> about me </a> </li>
                        <li> <a href='#'> projects </a> </li>
                        <li> <a href='#'> Website Source Code  </a> </li>
                    </ul>

                </div>


                <div className='menu-mobile'>
                   <div onClick={abrirModalMobile} className='icon-menu'> < FaBars/> </div>
                    <div className='modalMenuMobile'>
                   <div onClick={fecharModalMobile}><FaTimes/></div> 
                    <ul>
                        <li> <a href='#'> about me </a> </li>
                        <li> <a href='#'> projects </a> </li>
                        <li> <a href='#'> Website Source Code  </a> </li>
                    </ul>
                    </div>
                </div>

            </header>

            <div className='bio1'data-aos="zoom-out-up"  >
            
            <div className='img-autor'></div>

            <h1 > Olá, Sou Charles Gabriel Lemes</h1>
            <p>Desenvolvedor Fron-end</p>

            <ul>
                <li><a href='#'><FaGithub /></a></li>
                <li><a href='#'><FaLinkedin /></a></li>
                <li><a href='#'><FaInstagram /></a></li>
            </ul>

            </div>{/* bio1 */}


            <div className='seta'></div>


        </div>
    )
}