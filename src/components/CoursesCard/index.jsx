import styles from "./styles.module.scss"

export default function CoursesCard({src, courseTitle, courseDescription}) {
    return (
        <div className={styles.container}>
            <iframe width="560" height="315" src={src} title={"YouTube video player"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>{courseTitle}</h3>
            <p>{courseDescription}</p>
        </div>
    )
}