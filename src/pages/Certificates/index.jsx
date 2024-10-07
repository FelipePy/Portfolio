import Link from 'next/link';
import CoursesCard from '../../components/CoursesCard';
import coursesData from "../../courses.json";
import styles from "./styles.module.scss"

export default function PageCertificates() {
    const coursesWithoutCertificate = coursesData.withoutCertificate;
    const coursesWithCertificate = coursesData.withCertificate;

    return (
        <div class={styles.container}>
            <div className={styles.courses}>
                <h1>Certificados</h1>
                {Object.keys(coursesWithCertificate).map((category, categoryIndex) => (
                    <div className={styles.certificates} key={categoryIndex}>
                        {coursesWithCertificate[category].map((course, courseIndex) => (
                            <Link key={courseIndex} href={course.src}>
                                {course.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className={styles.courses}>
                <h1>Cursos sem certificação</h1>
                {Object.keys(coursesWithoutCertificate).map((category, categoryIndex) => (
                    <div className={styles.videos} key={categoryIndex}>
                        <h2 key={categoryIndex}>{category}</h2>
                            <div key={categoryIndex}>
                                {coursesWithoutCertificate[category].map((course, courseIndex) => (
                                    <CoursesCard
                                    key={courseIndex}
                                    src={course.src}
                                    courseTitle={course.title}
                                    courseDescription={course.description}
                                    />
                                ))}
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
}