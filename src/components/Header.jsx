import styles from "../styles/header.module.css";

export const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <figure>
                <h1 className={styles.header__logo}>Giovany Rendon</h1>
            </figure>

            <nav className={`${styles.nav}`}>
                <a className={styles.nav__link} href="#acerca">
                    Acerca de
                </a>
                <a className={styles.nav__link} href="#proyectos">
                    Proyectos
                </a>
                <a className={styles.nav__link} href="#contacto">
                    Contacto
                </a>
            </nav>
        </header>
    );
};
