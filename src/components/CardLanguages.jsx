import styles from "../styles/cardLanguages.module.css";

export const CardLanguages = ({ icon, name }) => {
    return (
        <article
            className={
                name === "CSS" || name === "REACT" || name === "MONGO"
                    ? styles.languages__item__margin
                    : styles.languages__item
            }
        >
            {icon}

            <h3 className={styles.languages__subtitle}>{name}</h3>
        </article>
    );
};
