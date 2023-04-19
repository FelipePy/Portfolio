import styles from './styles.module.scss';
import profile from '/public/images/felipe.jpeg';
import Image from 'next/image';
import Options from './Options';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className={styles.header}>
            
                <div className={styles.container}>
                    <div className={styles.info}>
                        <Image src={profile} alt="Felipe Sampaio" />

                        <div>
                            <p>Felipe Sampaio da Mota</p>
                        </div>
                    </div>

                    
                    <div className={styles.options}>
                    <Options />
                    </div>

                    <div className={styles.icons}>
                        <Link href="https://www.github.com/FelipePy">
                            <AiFillGithub size={40} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/felipesampaio-dev/">
                            <AiFillLinkedin size={40} />
                        </Link>
                    </div>
                    
                    
                </div>
            </div>
        </header>
    );
}
