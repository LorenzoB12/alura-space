import { useState } from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import styles from './Galeria.module.scss'
import fotos from './fotos.json'

export default function Galeria() {
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((fotos) => {
            return fotos.tag === tag;
        })
        setItens(novasFotos);
    }

    const setItensTodos = () => {
        setItens(fotos);
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags filtraFotos={filtraFotos} tags={tags} setItensTodos={setItensTodos}/>
            <ul className={styles.galeria__lista}>
                <Cards itens={itens} style={styles}/>
            </ul>
        </section>
    )
}