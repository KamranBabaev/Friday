import {SuperButton} from "../common/c2-SuperButton/SuperButton";
import styles from "./RestorePassword.module.css"
import stylesContainer from "../common/styles/Container.module.css";

export const RestorePassword = () => {

  return (
      <div className={stylesContainer.container}>

        <div className={stylesContainer.titleApp}>
          <h1>Brain storm</h1>
          <h3>Forgot your password?</h3>
        </div>

        <form className={stylesContainer.form}>
          <div className={stylesContainer.item}>
            <p>Email:</p>
            <div className={stylesContainer.inputBlock}>
              <input type="text" placeholder="example@ddd.com"/>
            </div>
          </div>
          <div className={styles.restoreBlock}>
            <p>Enter your email address and we will send you further
              instruction...</p>
            <SuperButton disabled={false} title="Send Instructions"/>
            <p>Did you remember your password?</p>
            <a href="">Try  logging  in</a>
          </div>
        </form>
      </div>
  )
}