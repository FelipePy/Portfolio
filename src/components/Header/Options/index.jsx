import Link from "next/link";
import styles from './styles.module.scss';

export default function Options() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <Link href={'/'}>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href={'/projects'}>
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link href={'/certificates'}>
                        Cursos
                    </Link>
                </li>
            </ul>
        </div>

    );
}