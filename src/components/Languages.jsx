import { DiCss3, DiReact } from "react-icons/di";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import styles from "../styles/languages.module.css";
import { CardLanguages } from "./CardLanguages";

export const Languages = () => {
  return (
    <section className="languajes container">
      <h2 className={styles.languages__subtitle}>Tecnologias</h2>

      <div className={styles.languages__items}>
        <CardLanguages
          name={"HTML"}
          icon={<IoLogoHtml5 className={styles.languages__icon} />}
        />

        <CardLanguages
          className={styles.languages__item__margin}
          name={"CSS"}
          icon={<DiCss3 className={styles.languages__icon} />}
        />

        <CardLanguages
          name={"JAVASCRIPT"}
          icon={<IoLogoJavascript className={styles.languages__icon} />}
        />

        <CardLanguages
          className={styles.languages__item__margin}
          name={"REACT"}
          icon={<DiReact className={styles.languages__icon} />}
        />

        <CardLanguages
          name={"NEXT"}
          icon={<TbBrandNextjs className={styles.languages__icon} />}
        />

        <CardLanguages
          className={styles.languages__item__margin}
          name={"MONGO"}
          icon={<SiMongodb className={styles.languages__icon} />}
        />
      </div>
    </section>
  );
};
