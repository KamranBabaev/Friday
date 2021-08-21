import {SuperButton} from "../common/c2-SuperButton/SuperButton";
import styles from "./RestorePassword.module.css";
import {NavLink} from 'react-router-dom';

export function RestorePassword() {
    return (
        <div className={styles.restorePassword}>
            <h1>Restore Password</h1>
            <h2>Forgot your password?</h2>
            <div className={styles.item}>
                <p>Email:</p>
                <div className={styles.inputBlock}>
                    <input type="text"/>
                </div>
                <p className={styles.description}>Enter your email address and we will send you further instruction</p>
            </div>
            <div className={styles.footerBlock}>
                <div className={styles.button}>
                    <SuperButton disabled={false} title="Send Instructions"/>
                </div>
                <p>Did you remember your password?</p>
                <div>
                    <NavLink to={'/login'}>Try to login</NavLink>
                </div>
            </div>

        </div>
    )
}