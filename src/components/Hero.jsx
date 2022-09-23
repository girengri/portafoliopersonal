import styles from "../styles/hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.bg1}>
            <div  className={styles.bg2}>
                <div id="acerca" className={`${styles.hero} container`}>
                    <div className={styles.hero__titles}>
                        <h2 className={styles.hero__title}>¡Hola a todos!</h2>
                        <h2 className={styles.hero__title}>Soy Giovany</h2>
                    </div>

                    <div className={styles.hero__paragraphs}>
                        <p className={styles.hero__paragraph}>
                            Programador web junior y administrador de empresas, apasionado por
                            el mundo de la tecnología.
                        </p>
                        <p className={styles.hero__paragraph}>
                            Tengo conocimientos en: HTML5, CSS3, JavaScript, React, Next y
                            MongoDB. En un futuro me gustaría enfocarme en el área de la
                            arquitectura de software.
                        </p>
                    </div>

                    <figure className={styles.hero__img}></figure>
                </div>
            </div>
        </section>
    );
};
