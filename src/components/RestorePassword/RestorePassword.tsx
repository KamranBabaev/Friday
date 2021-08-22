import {SuperButton} from "../common/c2-SuperButton/SuperButton";
import styles from "./RestorePassword.module.css"

export const RestorePassword = () => {

    return (
        <div className={styles.restorePassword}>
            <h1>Restore Password</h1>
            <h2>Forgot your password?</h2>
            <div className={styles.item}>
                <p>Password:</p>
                <div className={styles.inputBlock}>
                    <input type="text"/>

                </div>
            </div>

            <p>Enter your email address and we will send you further instruction</p>
            <SuperButton disabled={false} title="Send Instructions"/>
            <p>Did you remember your password?</p>
            <a href=""> Try loginning in</a>
        </div>
    )
}