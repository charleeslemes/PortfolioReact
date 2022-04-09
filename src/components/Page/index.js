import './page.css';
import {FaUser,FaCogs, FaDesktop} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import html from '../../assets/logo-html.png';
import css from '../../assets/logo-css.png';
import javascript from '../../assets/logo-js.png';
import jquery from '../../assets/logo-jquery.png';
import react from '../../assets/logo-react.png';
import sass from '../../assets/logo-sass.png';
import tag from '../../assets/tag.png';

import { useState } from 'react';


export default function Page(){
    AOS.init({
        duration: 600,
    });
   

    const [titleText, setTitleText] = useState("Sobre Mim");

    const [icon, setIcon] = useState(<FaUser/>);

    const [textSobre, setTextSobre] = useState("Sou apaixonado por tecnologia, quando eu era criança sempre gostei muito de mexer com computador e sempre tive curiosidade de saber como eram feito os sites, mas nunca pesquisei muito sobre, dai quando entrei na faculdade de analise, comecei a conhecer o mundo de desenvolvimento, tive muito dificuldade no começo, mas passando o tempo e sempre me esforçando para aprender e entender a lógica fui evoluindo, passei por desenvolvimento de software para desktop, dai quando cheguei na parte de desenvolvimento web gostei muito, agora eu estudo muito a parte de front-end para evoluir cada vez mais e mais.");

    function abrirSobreMim(){
        let sobreMim = document.querySelector('.textSobreMim');
        let sobreSite = document.querySelector('.textSobreSite');
        let btnSite = document.querySelector('.site');
        let btnMim = document.querySelector('.mim');


        sobreMim.style.display="block";
        sobreSite.style.display="none";

        btnMim.style.backgroundColor="rgba(0,0,0,0.9)";
        btnSite.style.backgroundColor="rgba(0,0,0,0.6)";

        btnMim.style.boxShadow="inset 0 0 5px rgb(209, 208, 208)";
        btnSite.style.boxShadow="none";

        setTitleText("Sobre Mim");

        setTextSobre("Sou apaixonado por tecnologia, quando eu era criança sempre gostei muito de mexer com computador e sempre tive curiosidade de saber como eram feito os sites, mas nunca pesquisei muito sobre, dai quando entrei na faculdade de analise, comecei a conhecer o mundo de desenvolvimento, tive muito dificuldade no começo, mas passando o tempo e sempre me esforçando para aprender e entender a lógica fui evoluindo, passei por desenvolvimento de software para desktop, dai quando cheguei na parte de desenvolvimento web gostei muito, agora eu estudo muito a parte de front-end para evoluir cada vez mais e mais.");


        setIcon(<FaUser/>);
     

    }

    
    function abrirSobreSite(){
        let sobreMim = document.querySelector('.textSobreMim');
        let sobreSite = document.querySelector('.textSobreSite');
        let btnSite = document.querySelector('.site');
        let btnMim = document.querySelector('.mim');

        sobreMim.style.display="none";
        sobreSite.style.display="block";

        btnSite.style.backgroundColor="rgba(0,0,0,0.9)";
        btnMim.style.backgroundColor="rgba(0,0,0,0.6)";

        btnSite.style.boxShadow="inset 0 0 5px rgb(209, 208, 208)";
        btnMim.style.boxShadow="none";
     
       setTitleText("Sobre o Site");

       setTextSobre("Na construção desse site passei varias dificuldade mas é com elas que se aprende né, sempre pesquisando como eu poderia melhorar cada vez mais, construi esse site usando <strong> React js </strong> e usei o <strong> Sass </strong> para estilização do site, comecei usar o Sass nesse site mesmo.");

       setIcon(<FaDesktop/>);

    }
    


    return(
        <>
    <section className='aboute' data-aos="fade-right">
         
         <div className='btnSobre'>
         <button className='mim' onClick={abrirSobreMim}><FaUser/></button>
         <button className='site' onClick={abrirSobreSite}><FaDesktop/></button>
         </div>
        
        <div className='textSobre'>
            {icon}
            <h2>{titleText}</h2>
            
         <p className='textSobreMim'>{textSobre}</p>
         <p className='textSobreSite'>{textSobre}</p>

        </div>
          
    </section>

        <div className='title'>
            <h1>Tecnologias</h1>
        </div>

        <section className='tech'>
            <div className='containerTech'>

                <div className='tech-single'>
                    <div className='img-tech'>
                      <img src={html}/>
                    </div>
                    <h5>html</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={css}/>
                    </div>
                    <h5>css</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'> 
                      <img src={javascript}/>
                    </div>
                    <h5>javaScript</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={jquery}/>
                    </div>
                    <h5>jquery</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={react}/>
                    </div>
                    <h5>react js</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={sass}/>
                    </div>
                    <h5>sass</h5>
                </div>
            </div>
        </section>


        <div className='title'>
            <h1>Diferenciais</h1>
        </div>

        <section className='diferenciais'>
            <div className='container-diferenciais'>

                <div className='box-single'  data-aos="fade-down">
                    <img src={tag}/>

                    <h2>Design responsivo</h2>
                    <div className='textDif'>
                    <p>Trabalho sempre priorizando o design responsivo, para que sempre minhas interfaces fiquem boas em todos os tipos de telas, para que o usuário tenha uma boa experiência com site.</p>
                    </div>

                </div>

                
                <div className='box-single' data-aos="fade-down">
                    <img src={tag}/>

                    <h2>Clean Code</h2>
                    <div className='textDif'>
                    <p>Tenho como minha principal diretriz durante o desenvolvimento a qualidade do código seguindo as melhores práticas do mercado.</p>
                    </div>

                </div>

                
                <div className='box-single' data-aos="fade-down" >
                    <img src={tag}/>

                    <h2>Interfaces de alta fidelidade</h2>
                    <div className='textDif'>
                    <p>Trabalho com implementação fiel de interfaces presando pela melhor experiência do usuário e sempre buscando melhorá-las.</p>
                    </div>

                </div>

            </div>
        </section>




        </>
    )
}