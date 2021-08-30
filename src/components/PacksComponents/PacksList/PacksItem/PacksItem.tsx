import styles from "./PacksItem.module.css";

export function PacksItem(props: PacksItemPropsType) {
  return (
      <div className={styles.packsItem}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.cards}>{props.cards}</div>
        <div className={styles.lastUpdate}>{props.lastUpdate}</div>
        <div className={styles.actions}>
          <button>Delete</button>
          <button>Edit</button>
          <button>Learn</button>
        </div>
      </div>
  )
}

//types
type PacksItemPropsType = {
  name: string
  cards: number
  lastUpdate: string
}