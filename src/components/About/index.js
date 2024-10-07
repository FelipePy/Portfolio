import styles from "./index.module.scss";
import Link from "next/link";

export default function About() {
    return (
        <main className={styles.container}>
            <section className={styles.about}>
                <h1>Sobre</h1>
                <p>Meu nome é
                    <font> Felipe Sampaio</font>,
                    tenho 22 anos e sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Cruzeiro.
                    Atualmente estou cursando o 6º semestre e estou em busca de uma oportunidade de estágio na área de
                    <font>desenvolvimento de software</font>.
                    Meu objetivo é me tornar um desenvolvedor <font>full-stack</font>. Estudo atualmente front-end,
                    data science e back-end com Python</p>

                <p>
                    Se quiser entrar em contato comigo, pode me enviar um e-mail no e-mail presente na aba
                    <Link href="/contact">
                        <font>Contato</font>
                    </Link>
                </p>
            </section>
            <section className={styles.formation}>
                <h1>Formação</h1>

                <Link href="https://www.fateccruzeiro.edu.br/ads">
                    <p>Fatec Cruzeiro Prof. Waldomiro May - Análise e Desenvolvimento de Sistemas (2020)</p>
                </Link>
            </section>
            <section className={styles.certificates}>
                <h1>Certificações</h1>

                <Link
                    href="https://cursos.alura.com.br/user/felipesampaio-contato/course/python-intro/certificate">
                    <p>Curso de Python para data Science</p>
                </Link>
                <Link
                    href="https://cursos.alura.com.br/user/felipesampaio-contato/course/python-exceptions/certificate">
                    <p>Curso de Python 3: Entendendo tratamento de erros</p>
                </Link>
                <Link
                    href="https://cursos.alura.com.br/user/felipesampaio-contato/course/introducao-a-sistemas-de-recomendacao-com-python/certificate">
                    <p>Curso de Machine Learning: Introdução a sistemas de recomendação</p>
                </Link>
            </section>
            <section className={styles.programming}>
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
            </section>
        </main>
    )
}