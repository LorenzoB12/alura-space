import Icone from './Icones'
import styles from './Menu.module.scss'
import icones from './Icones/icones.json'

export default function Menu(){
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map(icone => (<Icone key={icone.id} icone={icone} style={styles} />))}
            </ul>
        </nav>
    )
}