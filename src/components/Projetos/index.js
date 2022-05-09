import geradorSenha from '../../assets/projeto-senha.jpg';
import appTarefas from '../../assets/projeto-appTarefas.jpg'
import pokedex from '../../assets/projeto-pokedex.jpg';
import telaLogin from '../../assets/projeto-telaLogin.jpg';
import cronometro from '../../assets/projeto-cronometro.jpg';
import galeriaFilmes from '../../assets/projeto-galeriaFilmes1.jpg';
import repos from '../../assets/projeto-repositorios.jpg';
import telaLogin02 from '../../assets/projeto-telaLogin02.jpg';
import landingPage from '../../assets/projeto-landingPage.jpg';

import './projetos.css';



export default function Projetos(){
    return(

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
            
            <a target="_blank" href='https://telalogin02.netlify.app/'>Visualizar</a>
            <a target="_blank" href='https://github.com/charleeslemes/telaLogin02'>Código</a>
         
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

    )
}






