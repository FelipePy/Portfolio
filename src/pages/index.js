import styles from './index.module.scss'
import Header from '../components/Header'


export default function HomePage() {
    return (
        <div className={styles.middle}>
            <head>
                <title>Felipe Sampaio</title>
            </head>

            <Header />
            <div className={styles.container}>

            </div>
        </div>
        
    )
}