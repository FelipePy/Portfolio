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
                    <Link href={'/contact'}>
                        Contato
                    </Link>
                </li>
            </ul>
        </div>

    );
}