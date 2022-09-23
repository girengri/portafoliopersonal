import { useRef, useState } from "react";

import { FaGithubAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import styles from "../styles/footer.module.css";
import { validations } from "../utils";

export const Footer = () => {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      correo: "",
    },
  });

  const formRef = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_za81vah",
        "template_0bqafiq",
        formRef.current,
        "user_eWI2JBQZkrW3EV4p7TgoL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEnviado(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset();
  };

  return (
    <footer id="contacto" className={`${styles.footer__container} container`}>
      <section className={styles.footer__contact}>
        <article className={styles.footer__contact__email}>
          <h2 className={styles.foooter__contact__text}>
            ¿Quieres trabajar conmigo?
          </h2>
          <h2 className={styles.foooter__contact__text}>¡ Escríbeme !</h2>

          <p className={styles.foooter__contact__email}>
            giova.rendon96@gmail.com
          </p>
        </article>

        <form
          className={styles.footer__form}
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input
            name="nombre"
            className={styles.foooter__form__input}
            type="text"
            placeholder="Nombre :"
            {...register("nombre", {
              required: "Este campo es obligatorio",
              minLength: { value: 2, message: "Mínimo 2 caracteres" },
            })}
            error={!!errors.nombre}
          />

          {errors.nombre?.message ? (
            <span className={styles.footer__form__errors}>
              {errors.nombre?.message}
            </span>
          ) : (
            ""
          )}

          <input
            type="email"
            name="correo"
            className={styles.foooter__form__input}
            placeholder="Correo :"
            {...register("correo", {
              required: "Este campo es obligatorio",
              validate: validations.isEmail,
            })}
            error={!!errors.correo}
          />

          {errors.correo?.message ? (
            <span className={styles.footer__form__errors}>
              {errors.correo?.message}
            </span>
          ) : (
            ""
          )}

          <textarea
            name="mensaje"
            className={`${styles.foooter__form__input} ${styles.footer__form__input__area}`}
            placeholder="Mensaje..."
            {...register("mensaje", {
              required: "Este campo es obligatorio",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
            })}
            error={!!errors.mensaje}
          ></textarea>

          {errors.mensaje?.message ? (
            <span className={styles.footer__form__errors}>
              {errors.mensaje?.message}
            </span>
          ) : (
            ""
          )}

          <button type="submit" className={styles.footer__form__cta}>
            Enviar ahora
          </button>
          {enviado && (
            <p className={styles.footer__form__errors}>Mensaje Enviado...</p>
          )}
        </form>
      </section>

      <section className={styles.footer__social}>
        <p className={styles.footer__social__copy}>
          &copy; Copyright 2022 | Giovany Rendon
        </p>

        <div className={styles.footer__social__buttons}>
          <a
            href="https://github.com/girengri"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt className={styles.footer__social__network} />
          </a>

          <a
            href="https://goo.gl/maps/sG1W34AAajHJfXCF6"
            target="_blank"
            rel="noreferrer"
          >
            <SiGooglemaps className={styles.footer__social__network} />
          </a>
        </div>
      </section>
    </footer>
  );
};
