import styles from "../styles/cardProject.module.css";

export const CardProject = ({
  title,
  description,
  image,
  url,
  github,
  color1,
  color2,
  colorBoton1 = "black",
  colorBoton2 = "white",
  colorTextos = "black",
  tecnologias,
}) => {
  return (
    <article
      className={styles.cardProject}
      style={{ backgroundColor: `${color1}` }}
    >
      <div className={styles.cardProject__container}>
        <figure>
          <img
            className={styles.cardProject__img}
            src={image}
            alt="imagen del proyecto"
          />
        </figure>

        <div className={styles.cardProject__technologys}>
          {tecnologias.map((tecnologia, index) => (
            <span className={styles.cardProject__technologys} key={index}>
              {tecnologia}
            </span>
          ))}
        </div>
      </div>

      <div
        className={styles.cardProject__texts}
        style={{ backgroundImage: `${color2}` }}
      >
        <div className={styles.cardProject__flex}>
          <div className={styles.cardProject__description}>
            <h2 style={{ color: `${colorTextos}` }}>{title}</h2>
            <p style={{ color: `${colorTextos}` }}>{description}</p>
          </div>

          <div className={styles.cardProject__buttons}>
            <a
              className={styles.cardProject__cta}
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: `${colorBoton1}`,
                color: `${colorBoton2}`,
              }}
            >
              Ver proyecto
            </a>
            <a
              className={styles.cardProject__cta}
              href={github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: `${colorBoton1}`,
                outline: `2px solid ${colorBoton1}`,
              }}
            >
              Ver código
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
