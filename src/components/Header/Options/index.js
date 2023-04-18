import Link from "next/link";
import styles from './styles.module.scss';

export default function Options() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <Link href={'/'}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href={'/habilitys'}>
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link href={'/formation'}>
                        Formação
                    </Link>
                </li>
                <li>
                    <Link href={'/experience'}>
                        Experiência
                    </Link>
                </li>
                <li>
                    <Link href={'/code'}>
                        Códigos
                    </Link>
                </li>
                <li>
                    <Link href={'/projects'}>
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                        Contato
                    </Link>
                </li>
            </ul>
        </div>

    );
}