import './page.css';
import {FaUser,FaCogs, FaDesktop, FaLinkedin, FaGithub} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Timeline from '../Timeline';

import Projetos from '../Projetos';


import html from '../../assets/logo-html.png';
import css from '../../assets/logo-css.png';
import javascript from '../../assets/logo-js.png';
import jquery from '../../assets/logo-jquery.png';
import react from '../../assets/logo-react.png';
import sass from '../../assets/logo-sass.png';
import git from '../../assets/logo-git.png';
import node from '../../assets/logo-node.png';

import tag from '../../assets/tag.png';



import { useState } from 'react';


export default function Page(){
    AOS.init({
        duration: 600,
    });
   

    const [titleText, setTitleText] = useState("Sobre Mim");

    const [icon, setIcon] = useState(<FaUser/>);

    const [textSobre, setTextSobre] = useState("Sou apaixonado por tecnologia, desde criança sempre interessei por computadores, e sempre tive tinha muitas dúvidas principalmente como era desenvolvido um site, mas nunca pesquisei muito sobre, daí quando entrei na faculdade de análise, comecei a conhecer o mundo de desenvolvimento, tive muita dificuldade no começo, mas passando o tempo e sempre me esforçando para aprender e entender a lógica fui evoluindo, passei por desenvolvimento de software para desktop, daí quando cheguei na parte de desenvolvimento web gostei muito, agora eu estudo muito a parte de front-end para evoluir cada vez mais e mais, dei também início recentemente em um curso de Node js e mongoDb, para isso também entender mais a parte de back-end.");

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

        setTextSobre("Sou apaixonado por tecnologia, desde criança sempre interessei por computadores, e sempre tive tinha muitas dúvidas principalmente como era desenvolvido um site, mas nunca pesquisei muito sobre, daí quando entrei na faculdade de análise, comecei a conhecer o mundo de desenvolvimento, tive muita dificuldade no começo, mas passando o tempo e sempre me esforçando para aprender e entender a lógica fui evoluindo, passei por desenvolvimento de software para desktop, daí quando cheguei na parte de desenvolvimento web gostei muito, agora eu estudo muito a parte de front-end para evoluir cada vez mais e mais, dei também início recentemente em um curso de Node js e mongoDb, para isso também entender mais a parte de back-end.");


        setIcon(<FaUser/>);
     

    }

    
    function abrirSobreSite(){
        let sobreMim = document.querySelector('.textSobreMim');
        let sobreSite = document.querySelector('.textSobreSite');
        let btnSite = document.querySelector('.site');
        let btnMim = document.querySelector('.mim');
        let btnSaibaMaisSobre = document.querySelector('.SaibaMaisSobre');

        sobreMim.style.display="none";
        sobreSite.style.display="block";

        btnSite.style.backgroundColor="rgba(0,0,0,0.9)";
        btnMim.style.backgroundColor="rgba(0,0,0,0.6)";

        btnSite.style.boxShadow="inset 0 0 5px rgb(209, 208, 208)";
        btnMim.style.boxShadow="none";

     
       setTitleText("Sobre o Site");

       setTextSobre("Na construção deste site passei por várias dificuldades e ideias, mas sempre pesquisando como eu poderias melhorá-lo e deixando mais minha cara e sempre priorizando o design responsivo, foram vários testes para deixar 100% responsivo, utilizei para fazer esse site react js para estilização usei o pré-processador sass usei também o react-router-dom para fazer as rotas e usei o material ui para fazer a timeline de certificados.");

       setIcon(<FaDesktop/>);

    }
    


    return(
        <>
       

    <a name="sobre"></a>
    <section className='aboute' data-aos="fade-right">
         
         <div className='btnSobre'>
         <button className='mim' onClick={abrirSobreMim}><FaUser/></button>
         <button className='site' onClick={abrirSobreSite}><FaDesktop/></button>
         </div>
        
        <div className='textSobre'>
            {icon}
            <h2>{titleText}</h2>
            
         <p className='textSobreMim'>{textSobre} </p>
         <p className='textSobreSite'>{textSobre} <br/> <br/> <div className='sobreTech'><span>React</span> <span>Sass</span> <span>Material ui</span> </div></p>

        </div>
          
    </section>

        <div className='title'>
            <h1>Tecnologias</h1>
        </div>

        <section className='tech'>
            <div className='containerTech'>

                <div className='tech-single'>
                    <div className='img-tech'>
                      <img src={html} alt="HTML, linguegem de marcação"/>
                    </div>
                    <h5>html</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={css} alt="CSS, folha de estilização"/>
                    </div>
                    <h5>css</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'> 
                      <img src={javascript} alt="JAVASCRIPT, linguegem de programação"/>
                    </div>
                    <h5>javaScript</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={jquery} alt="JQUERY, é um bibloteca do javascript"/>
                    </div>
                    <h5>jquery</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={react} alt="REACT JS, é um framework do javascript"/>
                    </div>
                    <h5>react js</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={sass} alt="SASS, é um pré-processador do css"/>
                    </div>
                    <h5>sass</h5>
                </div>

                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={node} alt="NODE JS, é usado para o back-end"/>
                    </div>
                    <h5>Node js</h5>
                </div>


                <div className='tech-single'>
                    <div className='img-tech'>
                    <img src={git} alt="GIT, é uma ferramenta para versionamento de código"/>
                    </div>
                    <h5>Git</h5>
                </div>

         

              
            </div>
            </section>
            

            <div className='title'>
            <h1>Certificados</h1>
            </div>
            <section className='timeline_certificados'>
                <Timeline/>
            </section>



        <div className='title'>
            <h1>Diferenciais</h1>
        </div>

        <section className='diferenciais'>
            <div className='container-diferenciais'>

                <div className='box-single' data-aos="fade-down">
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
        <a name="projetos"></a>
        
        <section className='projetos'>

        <div className='title'>
            <h1>Projetos</h1>
        </div>

        <Projetos/>

        {/* adicionar os projetos aqui */}
  
        </section>



        <footer>
        <div className='containerFooter'>
            <div className='redesSociais'>
                <a target="_blank" href='https://www.linkedin.com/in/charles-lemes-96a2a4211/'><FaLinkedin/></a>
                <a target="_blank" href='https://github.com/charleeslemes'><FaGithub/></a> 
            </div>

            <div className='menu'>
                <a href='#'>Início</a>
            </div>
        </div>
        </footer>



        </>
    )
}