import styles from './styles.module.scss';
import profile from '../../assets/felipe.jpeg';
import Image from 'next/image';
import Options from './Options';

export default function Header() {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.info}>
                    <Image src={profile} alt="Felipe Sampaio" />

                    <div>
                        <h1>Felipe Sampaio</h1>
                        <h2>Front-end Developer</h2>
                    </div>
                </div>

                
                <div className={styles.options}>
                <Options />
                </div>
            </div>
        </header>
    );
}
