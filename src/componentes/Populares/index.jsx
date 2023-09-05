import Botao from 'componentes/Botao'
import fotosPopulares from './fotos-populares.json'
import styles from './Populares.module.scss'

export default function Populares(){
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map((foto) => {
                    return (
                        <li id={foto.id}>
                            <img src={foto.path} alt={foto.alt} />
                        </li>
                    )
                })}
            </ul>
            <Botao nome={"Mais Fotos"}></Botao>
        </aside>
    )
}