import styles from './styles.module.scss';
import Link from 'next/link';
import toolsData from "../tools.json";
import profile from '../../public/images/felipe.jpeg';
import Image from 'next/image';



export default function PageHome() {
    const tools = toolsData;
    const date = new Date();
    const born = new Date(2001, 5, 10);
    let age;

    (date.getMonth() >= born.getMonth()) || (date.getDate() >= born.getDate()) ? 
        age = date.getFullYear() - born.getFullYear() : 
        age = (date.getFullYear() - born.getFullYear()) - 1;

    return (
        <div className={styles.main}>
        
            <div className={styles.container}>
                <div className={styles.about}>
                    <Image src={profile} alt="Felipe Sampaio" />
                    <p>Eu sou o <font>Felipe Sampaio</font>, tenho {age} anos e sou formado em Análise e Desenvolvimento de 
                    Sistemas na<a target='_blank' href="https://www.fateccruzeiro.edu.br/"><font>Fatec Cruzeiro.</font></a></p>
                </div>

                <div className={styles.education}>
                    <h1>Formação</h1>
                    <div className={styles.formation}>
                        <Link href="https://www.fateccruzeiro.edu.br/ads">
                            <p>Fatec Cruzeiro Prof. Waldomiro May - Análise e Desenvolvimento de Sistemas (2020 - 2024)</p>
                        </Link>
                    </div>
                   
                    <div className={styles.programming}>
                        <h1>Ferramentas</h1>
                        <div className={styles.info}>
                            {Object.keys(tools).map((category, categoryIndex) => (
                               <ul key={categoryIndex}>
                                    <h3>{category}</h3>
                                    {Object.keys(tools[category]).map((toolName, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link target='_blank' href={tools[category][toolName]}>
                                                <p>{toolName}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}