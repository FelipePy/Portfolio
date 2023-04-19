import Header from '../components/Header';
import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function PageHome() {

    return (
        <>
            <header>
                <title>Felipe Sampaio - Sobre</title>
            </header>

            <Header />
        
            <div className={styles.container}>
                <div className={styles.education}>
                    <div className={styles.about}>
                        <h1>Sobre</h1>
                        <p>Olá, </p>
                        <p>Eu sou o <font>Felipe Sampaio</font>, tenho 22 anos e sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Cruzeiro.</p>
                        <br></br>
                        <p>Atualmente estou cursando o 6º semestre e estou em busca de uma oportunidade de estágio na área de <font>desenvolvimento de software</font>.</p>
                        <br></br>
                        <p>Meu objetivo é me tornar um desenvolvedor <font>full-stack</font>. Estudo atualmente front-end, data science e back-end com Python</p>
                        <br></br>
                        <p>
                            Se quiser entrar em contato comigo, pode me enviar um e-mail no e-mail presente na aba
                            <Link href="/contact">
                                <font>Contato</font>
                            </Link>
                        </p>
                        
                </div>
                    <h1>Formação</h1>
                    <div className={styles.formation}>
                        <Link href="https://www.fateccruzeiro.edu.br/ads">
                            <p>Fatec Cruzeiro Prof. Waldomiro May - Análise e Desenvolvimento de Sistemas (2020)</p>
                        </Link>
                    </div>
                    <h1>Certificações</h1>
                    <div className={styles.certificates}>
                        <Link href="https://cursos.alura.com.br/user/felipesampaio-contato/course/python-intro/certificate">
                            <p>Curso de Python para data Science</p>
                        </Link>
                        <Link href="https://cursos.alura.com.br/user/felipesampaio-contato/course/python-exceptions/certificate">
                            <p>Curso de Python 3: Entendendo tratamento de erros</p>
                        </Link>
                        <Link href="https://cursos.alura.com.br/user/felipesampaio-contato/course/introducao-a-sistemas-de-recomendacao-com-python/certificate">
                            <p>Curso de Machine Learning: Introdução a sistemas de recomendação</p>
                        </Link>
                    </div>
                    <div className={styles.programming}>
                        <h1>Conhecimentos</h1>
                        <div className={styles.info}>
                            <ul>
                                <h3>Front-End</h3>
                                <li>
                                    <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                                        <p>JavaScript</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                                        <p>HTML</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                                        <p>CSS</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://reactjs.org/">
                                        <p>React</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://nextjs.org/">
                                        <p>Next.js</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://nodejs.org/en/docs">
                                        <p>Node.js</p>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <h3>Back-End</h3>
                                <li>
                                    <Link href="https://www.python.org/">
                                        <p>Python</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://dev.java/learn/">
                                        <p>Java</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://dev.mysql.com/doc/">
                                        <p>MySQL</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.postgresql.org/docs/">
                                        <p>PostgreSQL</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://fastapi.tiangolo.com/">
                                        <p>Fast API</p>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <h3>Outros</h3>
                                <li>
                                    <Link href="https://git-scm.com/doc">
                                        <p>Git</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.github.com">
                                        <p>GitHub</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://docs.docker.com/">
                                        <p>Docker</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://docs.docker.com/compose/">
                                        <p>Docker-Compose</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linux.org/">
                                        <p>Linux</p>
                                    </Link>
                                </li>
                            </ul>
                            
                        </div>
                        <p> <font>E O MAIS IMPORTANTE!!</font> na maioria das vezes eu consigo encontrar os problemas que eu não consigo resolver no google.</p>
                    </div>
                </div>

                <h1>Cursos sem certificação</h1>
                <div className={styles.videos}>
                    <h2>Python</h2>
                    <div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <h3>Curso de Python 3 - Mundo 1: Fundamentos</h3>
                            <p>Python é uma linguagem ultra moderna, utilizada pelo Google, YouTube, Industrial Light & Magic, Globo e muitas outras. Fácil de aprender, com código limpo e organizado, Python vem ganhando cada vez mais espaço, e chegou a sua hora de aprender. Curso criado pelo Prof. Gustavo Guanabara para o site CursoemVideo.com</p>
                        </div>
                            <div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h3>Curso de Python 3 - Mundo 2: Estruturas de controle</h3>
                                <p>Python é uma linguagem ultra moderna, utilizada pelo Google, YouTube, Industrial Light & Magic, Globo e muitas outras. Fácil de aprender, com código limpo e organizado, Python vem ganhando cada vez mais espaço, e chegou a sua hora de aprender. Curso criado pelo Prof. Gustavo Guanabara para o site CursoemVideo.com</p>
                            </div>
                            <div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h3>Curso de Python 3 - Mundo 3: Estruturas Compostas</h3>
                                <p>Python é uma linguagem ultra moderna, utilizada pelo Google, YouTube, Industrial Light & Magic, Globo e muitas outras. Fácil de aprender, com código limpo e organizado, Python vem ganhando cada vez mais espaço, e chegou a sua hora de aprender. Curso criado pelo Prof. Gustavo Guanabara para o site CursoemVideo.com</p>
                            </div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dm6wYOIW20Nyg12TAjmMGT-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <h3>Exercícios de Python 3</h3>
                            <p>Serão mais de 100 exercícios feitos em Linguagem Python pelo Professor Gustavo Guanabara, do canal Curso em Vídeo. Acompanhe todos, seguindo a ordem e sempre colocando em prática cada um deles.</p>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.videos}>
                    <h2>MySQL</h2>
                    <div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <h3>Curso de banco de dados MySQL</h3>
                            <p>Curso Grátis de Banco de Dados com MySQL criado por Gustavo Guanabara, professor de TI. Veja como criar um banco de dados de maneira simples e interativa.</p>
                        </div>
                    </div>
                    
                </div>
                

            </div>
        </>
        
    );
}