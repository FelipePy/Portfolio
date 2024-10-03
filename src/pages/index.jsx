import Header from '../components/Header';
import styles from './styles.module.scss';
import Link from 'next/link';
import CoursesCard from '../components/CoursesCard';
import coursesData from "../courses.json"


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
                                <li>
                                    <Link href="https://kubernetes.io/docs/home/">
                                        <p>Kubernets</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://nginx.org/en/">
                                        <p>Nginx</p>
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
                        {coursesData.withoutCertificate.python.map((course, index) => (
                            <CoursesCard
                            key={index}
                            src={course.src}
                            courseTitle={course.title}
                            courseDescription={course.description}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.videos}>
                    <h2>MySQL</h2>
                    <div>
                        {coursesData.withCertificate.mysql.map((course, index) => (
                            <CoursesCard
                            key={index}
                            src={course.src}
                            courseTitle={course.title}
                            courseDescription={course.description}
                            />
                        ))}
                    </div>
                    
                </div>

                <div className={styles.videos}>
                    <h2>Alura</h2>
                    <div>
                        {coursesData.withCertificate.alura.map((course, index) => (
                            <CoursesCard
                            key={index}
                            src={course.src}
                            courseTitle={course.title}
                            courseDescription={course.description}
                            />
                        ))}
                    </div>
                    
                </div>
                

            </div>
        </>
        
    );
}