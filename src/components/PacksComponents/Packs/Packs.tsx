import {PacksList} from "../PacksList/PacksList";
import {ShowPacksCards} from "../ShowPacksCards/ShowPacksCards";
import {Paginator} from "../../common/paginator/Paginator";
import styles from "./Packs.module.css"
import stylesPackContainer
  from "../../common/styles/stylesPackContainer.module.css"
import {useState} from "react";

export function Packs() {
  const [pageCount, setPageCount] = useState(5)

  const onChangePageCount = (value: number) => {
    setPageCount(value)
  }

  return (
      <div className={stylesPackContainer.container}>
        <div className={styles.packs}>
          <div className={styles.showPacksCards}>
            <ShowPacksCards onChangePageCount={onChangePageCount}/>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.packsList}>
              <PacksList pageCount={pageCount}/>
            </div>
            <div className={styles.paginator}>
              <Paginator/>
            </div>
          </div>
        </div>
      </div>
  )
}