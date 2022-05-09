
import './timeline.css';


import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Link } from 'react-router-dom';

import selo_certificado from '../../assets/certificado.png';

export default function Certificados() {
    
    return (
    <>

    
    <div className='timeline_content'>
    
    
        <div className='timeline_desktop'>
        <React.Fragment>
        <Timeline position="alternate">


        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                 
                   <h2>Em andamento</h2> 
                  

            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>

                  
            <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Desenvolvedor Full-stack</h2>
                            <h3>Hiring coders #3</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso estou em uma nova jornada, onde estou na fase do full-stack, vou passar por no front-end html, css, javascript,
                            typescript e react js, no back-end vou ter node js e GraphQL.
                        </p>
                        <div className='btn_certificado'>
                        <Link className='andamentoLink' to="/">Em andamento</Link>
                        </div>
                        
                    </div>{/* box_certificado */}



            </TimelineContent>
            </TimelineItem>



        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                 
                   <h2>Em andamento</h2> 
                  

            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>

                  
            <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Node js</h2>
                            <h3>DankiCode</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso estou aprende sobre o Node js, usando o Express. Estou aprendendo utililzar o banco de dados não
                            relacional (mongoDb).  
                        </p>
                        <div className='btn_certificado'>
                        <Link className='andamentoLink' to="/">Em andamento</Link>
                        </div>
                        
                    </div>{/* box_certificado */}



            </TimelineContent>
            </TimelineItem>







            <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                 
                   <h2>Abril de 2022</h2> 
                  

            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>

                  
            <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>React js</h2>
                            <h3>Udemy</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso, aprendi sobre state sobre as hoocks, sobre cilco de vida de cada componente, aprendi usar as APi
                            usando o Axios também aprendi usar Styled-component.
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_react">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}



            </TimelineContent>
            </TimelineItem>








            <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                <h2>Fevereiro de 2022</h2>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>


            <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>JavaScript Puro</h2>
                            <h3>DankiCode</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso, aprendi toda a lógica sobre o javascript suas fuções principais e incluindo o javascript moderno,
                            fiz vários prjetos práticos para melhor aprendizado.  
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_javascript">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}



            </TimelineContent>
            </TimelineItem>





            <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                <h2>Dezembro de 2021</h2>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>

            <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Desenvolvimento Front-end</h2>
                            <h3>DankiCode</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso, tudo sobre a parte de Fron-end, HTML5, CSS3, JAVASCRIPT e JQUERY. Foquei bastante em design resposivo. 
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_frontEnd">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}



            </TimelineContent>
            </TimelineItem>



            <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                <h2>Dezembro de 2021</h2>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>

            <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Análise e desenvolvimento de sistemas</h2>
                            <h3>Unopar</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse minha formação aprendi, linguagem c, linguegem Java orientado a obejtos, banco de dados relacionl (MySql e SqlServer),
                            aprendi sobre metodologias ágeis (scrum e kanban), também sobre requisitos funcionais e não funcionais e regras de négocios e etc...
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_analise">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}
            </TimelineContent>
            </TimelineItem>
        </Timeline>
        </React.Fragment>

        </div>{/* timeline_desktop */}

















        <div className='timeline_mobile'>

        <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Desenvolvedor Full-stack</h2>
                            <h3>Hiring coders #3</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso estou em uma nova jornada, onde estou na fase do full-stack, vou passar por no front-end html, css, javascript,
                            typescript e react js, no back-end vou ter node js e GraphQL.
                        </p>
                        <div className='btn_certificado'>
                        <Link className='andamentoLink' to="/">Em andamento</Link>
                        </div>
                        
                    </div>{/* box_certificado */}


                              
        <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Node js</h2>
                            <h3>DankiCode</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso estou aprende sobre o Node js, usando o Express. Estou aprendendo utililzar o banco de dados não
                            relacional (mongoDb).  
                        </p>
                        <div className='btn_certificado'>
                        <Link className='andamentoLink' to="/">Em andamento</Link>
                        </div>
                        
                    </div>{/* box_certificado */}


        <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>React js</h2>
                            <h3>Udemy</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                        Nesse curso, aprendi sobre state sobre as hoocks, sobre cilco de vida de cada componente, aprendi usar as APi
                            usando o Axios também aprendi usar Styled-component.  
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_react">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}



        <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>JavaScript Puro</h2>
                            <h3>DankiCode</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse curso, aprendi toda a lógica sobre o javascript suas fuções principais e incluindo o javascript moderno,
                            fiz vários prjetos práticos para melhor aprendizado.  
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_javascript">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}



        <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Desenvolvimento Front-end</h2>
                            <h3>DankiCode</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                        Nesse curso, tudo sobre a parte de Fron-end, HTML5, CSS3, JAVASCRIPT e JQUERY. Foquei bastante em design resposivo. 
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_frontEnd">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}
            

        <div className='box_certificado'>
                    <div className='img_certificado'><img src={selo_certificado}/></div>
                        <div className='img_curso'>
                            
                            <div className='nome_curso'>
                            <h2>Análise e desenvolvimento de sistemas</h2>
                            <h3>Unopar</h3>
                            </div>{/* nome_curso */}
                        </div>{/* img_curso */}

                        <p>
                            Nesse minha formação aprendi, linguagem c, linguegem Java orientado a obejtos, banco de dados relacionl (MySql e SqlServer),
                            aprendi sobre metodologias ágeis (scrum e kanban), também sobre requisitos funcionais e não funcionais e regras de négocios e etc...
                        </p>
                        <div className='btn_certificado'>
                        <Link to="/certificado_analise">Certificado</Link>
                        </div>
                        
                    </div>{/* box_certificado */}
 
        </div>{/* timeline_mobile */}
    
        </div>

    </>

    )


}