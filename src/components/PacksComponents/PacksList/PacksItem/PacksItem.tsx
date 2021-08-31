import styles from './PacksItem.module.css';

import {NavLink} from 'react-router-dom';

export function PacksItem(props: PacksItemPropsType) {

// const cardId=props.cards.map()

    return (
        <div className={styles.packsItem}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.cards}>{props.cards}</div>
            <div className={styles.lastUpdate}>{props.lastUpdate}</div>
            <div className={styles.actions}>
                <button>Delete</button>
                <button>Edit</button>
                <NavLink to={`/cards/${props.id}`}>
                    <button >Learn</button>
                </NavLink>
            </div>

        </div>
    )
}

//types
type PacksItemPropsType = {
    id: string
    name: string
    cards: number
    lastUpdate: string
    giveCard: (id: string) => void
}