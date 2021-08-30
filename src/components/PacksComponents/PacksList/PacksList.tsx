import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardsTC} from "../../../redux/reducers/reducerPacks";
import {AppRootStateType} from "../../../redux/store";
import {PacksItem} from "./PacksItem/PacksItem";
import {CardType} from "../../../API/cardsAPI";
import styles from "./PacksList.module.css"

export function PacksList() {
  const dispatch = useDispatch()
  const packs = useSelector<AppRootStateType, Array<CardType>>(state => state.packs)

  useEffect(() => {
    dispatch(fetchCardsTC())
  }, [])

  return (
      <div className={styles.mainBlock}>
        <header className={styles.headerPacksList}>
          <div className={styles.name}>Name</div>
          <div className={styles.cards}>Cards</div>
          <div className={styles.lastUpdate}>Last updated</div>
          <div className={styles.actions}>Actions</div>
        </header>
        <div>
          {
            packs
                .map(pack =>
                    <PacksItem
                        name={pack.name}
                        cards={pack.cardsCount}
                        lastUpdate={pack.updated}
                    />)
          }
        </div>
      </div>
  )
}