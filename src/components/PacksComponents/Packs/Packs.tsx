import {PacksList} from "../PacksList/PacksList";
import {ShowPacksCards} from "../ShowPacksCards/ShowPacksCards";
import {Paginator} from "../../common/paginator/Paginator";
import styles from "./Packs.module.css"
import stylesPackContainer
  from "../../common/styles/stylesPackContainer.module.css"

export function Packs() {
  return (
      <div className={stylesPackContainer.container}>
        <div className={styles.packs}>
          <div className={styles.showPacksCards}>
            <ShowPacksCards/>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.packsList}>
              <PacksList/>
            </div>
            <div className={styles.paginator}>
              <Paginator/>
            </div>
          </div>
        </div>
      </div>
  )
}