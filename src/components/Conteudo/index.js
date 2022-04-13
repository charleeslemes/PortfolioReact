import './page.css';
import {FaUser,FaCogs, FaDesktop, FaLinkedin, FaGithub} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import html from '../../assets/logo-html.png';
import css from '../../assets/logo-css.png';
import javascript from '../../assets/logo-js.png';
import jquery from '../../assets/logo-jquery.png';
import react from '../../assets/logo-react.png';
import sass from '../../assets/logo-sass.png';
import tag from '../../assets/tag.png';
import geradorSenha from '../../assets/projeto-senha.jpg';
import appTarefas from '../../assets/projeto-appTarefas.jpg'
import pokedex from '../../assets/projeto-pokedex.jpg';
import telaLogin from '../../assets/projeto-telaLogin.jpg';
import cronometro from '../../assets/projeto-cronometro.jpg';
import galeriaFilmes from '../../assets/projeto-galeriaFilmes1.jpg';
import repos from '../../assets/projeto-repositorios.jpg';
import telaLogin02 from '../../assets/projeto-telaLogin02.jpg';
import landingPage from '../../assets/projeto-landingPage.jpg';


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

       setTextSobre("Na construção deste site passei por várias dificuldades e ideias, mas sempre pesquisando como eu poderias melhorá-lo e deixando mais minha cara e sempre priorizando o design responsivo, foram vários testes para deixar 100% responsivo");

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
            
         <p className='textSobreMim'>{textSobre}</p>
         <p className='textSobreSite'>{textSobre} <br/> <br/> <span>React</span> <span>Sass</span></p>

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

            <div  className='containerProjetos'>

                <div className='projetoSingle' data-aos="fade-down" >
                    <div style={{backgroundImage: `url(${geradorSenha})`}}  className='img'></div>

                    <div  className='conteudo'>
                        <h2>Gerador de senha</h2>

                        <p>Este projeto serve para dificultar uma senha simples, o intuito desse projeto foi eu aprender manipular uma string assim melhorando minha lógica. </p>

                        <div className='projetoTech'>
                            <span>Html</span>
                            <span>css</span>
                            <span>javascript</span>
                        </div>

                        <div className='btnProjetos'>
                            <a target="_blank" href='https://senharandom.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/senhaRendom'>Código</a>
                         
                        </div>

                    </div>
                </div>


                <div  style={{flexDirection:"row-reverse"}} className='projetoSingle' data-aos="fade-down"  >
                    <div style={{backgroundImage: `url(${appTarefas})`}} className='img'></div>

                    <div className='conteudo'>
                        <h2>App de tarefas</h2>

                        <p>Este projeto eu utilizo as hooks, este projeto ele salva as suas tarefas no navegador então mesmo que atualize ou saia da página suas tarefas sempre estarão ali salvas no navegador, podendo clicar nelas para riscar as que você já executou.  </p>

                        <div className='projetoTech'>
                            <span>react js</span>
                            <span>css</span>
                            
                        </div>

                        <div className='btnProjetos'>
                            <a target="_blank" href='https://apptarefas.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/appTarefa'>Código</a>
                         
                        </div>

                    </div>
                </div>



                <div className='projetoSingle' data-aos="fade-down" >
                    <div style={{backgroundImage: `url(${pokedex})`}}  className='img'></div>

                    <div  className='conteudo'>
                        <h2>Pokedex</h2>

                        <p>Neste projeto usei as APi para trazer as informações do Pokémon e assim montar uma pokedex, podendo colocar o número de Pokémon que você quer ver, sempre começando dos Pokémon iniciais.  </p>

                        <div className='projetoTech'>
                            <span>Html</span>
                            <span>css</span>
                            <span>javascript</span>
                        </div>

                        <div className='btnProjetos'>
                            <a target="_blank" href='https://pokedex01.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/Pokedex'>Código</a>
                         
                        </div>

                    </div>
                </div>



                <div  style={{flexDirection:"row-reverse"}} className='projetoSingle' data-aos="fade-down"  >
                    <div style={{backgroundImage: `url(${telaLogin})`}} className='img'></div>

                    <div className='conteudo'>
                        <h2>Tela login</h2>

                        <p>Este projeto é uma tela de login que estou validando os campos então se digitar o e-mail ou a senha incorretamente do que é para digitar ele vai dá um erro.  </p>

                        <div className='projetoTech'>
                            <span>html</span>
                            <span>css</span>
                            <span>javascript</span>
                            <span>jquery</span>
                            
                        </div>

                        <div className='btnProjetos'>

                            <a target="_blank" href='https://github.com/charleeslemes/telaLogin'>Código</a>
                         
                        </div>

                    </div>
                </div>



                <div className='projetoSingle' data-aos="fade-down"  >
                    <div style={{backgroundImage: `url(${cronometro})`}}  className='img'></div>

                    <div  className='conteudo'>
                        <h2>cronômetro</h2>

                        <p>Para fazer esse cronometro utilizei as state do react, cronometro podendo pausar quando quiser e podendo limpar também para começar de novo  </p>

                        <div className='projetoTech'>
                            <span>React js</span>
                            <span>css</span>
                            
                        </div>

                        <div className='btnProjetos'>
                            <a target="_blank" href='https://cronometro99.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/Cronometro'>Código</a>
                         
                        </div>

                    </div>
                </div>



                <div  style={{flexDirection:"row-reverse"}} className='projetoSingle' data-aos="fade-down"  >
                    <div style={{backgroundImage: `url(${galeriaFilmes})`}} className='img'></div>

                    <div className='conteudo'>
                        <h2>Gáleria de filmes</h2>

                        <p>Este projeto utilizei o axios para utilizar a API para pegar a lista dos filmes e o router-dom para fazer as rotas da minha página, essa aplicação ela traz a sinopse dos filmes, podendo salva-las para ver depois e excluir também.   </p>

                        <div className='projetoTech'>
                            <span>React js</span>
                            <span>css</span>
                            <span>axios</span>
                            
                            
                        </div>

                        <div className='btnProjetos'>
                            
                            <a target="_blank" href='https://galeriafilmes.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/galeriaFilmes'>Código</a>
                         
                        </div>

                    </div>
                </div>



                <div className='projetoSingle' data-aos="fade-down"  >
                    <div style={{backgroundImage: `url(${repos})`}}  className='img'></div>

                    <div  className='conteudo'>
                        <h2>Repositórios</h2>

                        <p>Neste projeto utilizei a o axios para utilizar a API para pegar os repositórios do GitHub, usei também o styled components para estilizar o projeto, esse projeto ele serve para favorita seus repositórios do GitHub podendo ver o dono do repositório e a suas issues, esse projeto conta também com um sistema de paginação e filtros, podendo pega issues abertas, fechadas e todas.   </p>

                        <div className='projetoTech'>
                            <span>React js</span>
                            <span>styled components</span>
                            <span>axios</span>
                            
                        </div>

                        <div className='btnProjetos'>
                            <a target="_blank" href='https://repositoriosgit.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/Repositorios'>Código</a>
                         
                        </div>

                    </div>
                </div>


                
                <div  style={{flexDirection:"row-reverse"}} className='projetoSingle' data-aos="fade-down"  >
                    <div style={{backgroundImage: `url(${telaLogin02})`}} className='img'></div>

                    <div className='conteudo'>
                        <h2>Tela login e cadastro</h2>

                        <p>Este projeto é um tela de login com cadastro de usuário, tendo as validações de campos necessárias de email e senha.  </p>

                        <div className='projetoTech'>
                            <span>html</span>
                            <span>css</span>
                            <span>javascript</span>
                            
                            
                        </div>

                        <div className='btnProjetos'>
                            
                            <a target="_blank" href='https://galeriafilmes.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/galeriaFilmes'>Código</a>
                         
                        </div>

                    </div>
                </div>


                <div className='projetoSingle' data-aos="fade-down" >
                    <div style={{backgroundImage: `url(${landingPage})`}}  className='img'></div>

                    <div  className='conteudo'>
                        <h2>Landing page</h2>

                        <p>Está é uma landing page totalmente resposiva. </p>
                        <div className='projetoTech'>
                            <span>html</span>
                            <span>css</span>
                            <span>javascript</span>
                            <span>jquery</span>

                        </div>

                        <div className='btnProjetos'>
                            <a target="_blank" href='https://agenciabold01.netlify.app/'>Visualizar</a>
                            <a target="_blank" href='https://github.com/charleeslemes/landingPage'>Código</a>
                         
                        </div>

                    </div>
                </div>



            </div>    
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