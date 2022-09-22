import {
    SiDocker,
    SiMaterialui,
    SiMongodb,
    SiNextdotjs,
    SiReact,
} from "react-icons/si";

import styles from "../styles/projects.module.css";
import { CardProject } from "./CardProject";

export const Projects = () => {
    return (
        <section id="proyectos" className="container">
            <h2 className={styles.projects__title}>Proyectos</h2>

            <div>
                <CardProject
                    title="Pokedex"
                    description="Pokedex es una pagina donde puedes encontrar tus pokemones favoritos"
                    image="https://res.cloudinary.com/girengri/image/upload/v1663807590/portafolio%20personal/g0f6o9evkztwi78md1n6.png"
                    url="https://next-pokemon-static-girengri.vercel.app/"
                    github="https://github.com/girengri/next-pokemon-static"
                    color1="#afc1ed"
                    color2="linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"
                    tecnologias={[
                        <SiMaterialui />,
                        <SiReact />,
                        <SiNextdotjs />,
                        <SiMongodb />,
                        <SiDocker />,
                    ]}
                />

                <CardProject
                    title="Teslo shop"
                    description="Teslo shop es el mejor ecommerce en donde encontraras articulos para vestir a tu familia"
                    image="https://res.cloudinary.com/girengri/image/upload/v1663825786/portafolio%20personal/bbvmf3gybe01jxbtl9rp.png"
                    url="https://tesloshoop.herokuapp.com/"
                    github="https://github.com/girengri/teslo-shop"
                    color1="#bbb9bc"
                    color2="linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)"
                    tecnologias={[
                        <SiMaterialui />,
                        <SiReact />,
                        <SiNextdotjs />,
                        <SiMongodb />,
                        <SiDocker />,
                    ]}
                />
            </div>
        </section>
    );
};
