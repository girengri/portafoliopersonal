import {
    SiCss3,
    SiDocker,
    SiHtml5,
    SiMaterialui,
    SiMongodb,
    SiNextdotjs,
    SiReact,
    SiTypescript,
} from "react-icons/si";

import styles from "../styles/projects.module.css";
import { CardProject } from "./CardProject";

export const Projects = () => {
    return (
        <section id="proyectos">
            <h2 className={`${styles.projects__title} container`}>Proyectos</h2>

            <div className={styles.projects__container}>
                <CardProject
                    title="Pokedex"
                    description="Pokedex es una página donde puedes encontrar tus pokemones favoritos"
                    image="https://res.cloudinary.com/girengri/image/upload/v1663807590/portafolio%20personal/g0f6o9evkztwi78md1n6.png"
                    url="https://next-pokemon-static-girengri.vercel.app/"
                    github="https://github.com/girengri/next-pokemon-static"
                    color1="#000"
                    color2="#cd80ee"
                    colorBoton2="#cd80ee"
                    tecnologias={[
                        <SiHtml5 />,
                        <SiMaterialui />,
                        <SiTypescript />,
                        <SiReact />,
                        <SiNextdotjs />,
                        <SiDocker />,
                    ]}
                />

                <CardProject
                    title="Teslo shop"
                    description="Teslo shop es el mejor e-commerce en donde encontraras artículos para vestir a tu familia"
                    image="https://res.cloudinary.com/girengri/image/upload/v1663825786/portafolio%20personal/bbvmf3gybe01jxbtl9rp.png"
                    url="https://tesloshoop.herokuapp.com/"
                    github="https://github.com/girengri/teslo-shop"
                    color1="#919191"
                    color2="#fff"
                    colorBoton1="#919191"
                    colorTextos="#919191"
                    tecnologias={[
                        <SiHtml5 />,
                        <SiMaterialui />,
                        <SiTypescript />,
                        <SiReact />,
                        <SiNextdotjs />,
                        <SiMongodb />,
                        <SiDocker />,
                    ]}
                    order="-1"
                />

                <CardProject
                    title="Block Master"
                    description="Con block master puede ver las ultimas peliculas del momento."
                    image="https://res.cloudinary.com/girengri/image/upload/v1665543784/portafolio%20personal/kxwwihsp21hmw47li0yw.png"
                    url="https://blockmastermovies.vercel.app/"
                    github="https://github.com/girengri/blockmastermovies"
                    color1="#0e3fa9"
                    color2="#fed941"
                    colorBoton1="#0e3fa9"
                    colorTextos="#0e3fa9"
                    colorBoton2="#fed941"
                    tecnologias={[<SiHtml5 />, <SiCss3 />, <SiReact />, <SiNextdotjs />]}
                />
            </div>
        </section>
    );
};

