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
  order = 1,
}) => {
  return (
    <article className={styles.cardProject}>
      <div
        className={styles.cardProject__container}
        style={{ backgroundColor: `${color1}` }}
      >
        <picture className={styles.cardProject__img__container}>
          <img
            className={styles.cardProject__img}
            src={image}
            alt="imagen del proyecto"
          />
        </picture>

        <div className={styles.cardProject__technologys}>
          {tecnologias.map((tecnologia, index) => (
            <span style={{ color: `${color2}` }} key={index}>
              {tecnologia}
            </span>
          ))}
        </div>
      </div>

      <div
        className={styles.cardProject__texts}
        style={{
          backgroundImage: `${color2}`,
          backgroundColor: `${color2}`,
          order: `${order}`,
        }}
      >
        <h2 style={{ color: `${colorTextos}` }}>{title}</h2>
        <p style={{ color: `${colorTextos}` }}>{description}</p>

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
    </article>
  );
};
