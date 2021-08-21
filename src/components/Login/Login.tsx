import styles from './Login.module.css'
import {useState} from "react";
import eye from "../common/icons/eye.png"
import closedEye from "../common/icons/closedEye.png"
import {SuperButton} from "../common/c2-SuperButton/SuperButton";

export const Login = () => {

  const [openPassword, setOpenPassword] = useState(false)

  const changeViewPassword = () => {
    setOpenPassword(!openPassword)
  }


  return (
      <div className={styles.login}>
        <form className={styles.form}>
          <div className={styles.nameProject}>Brain storm</div>
          <div className={styles.title}>Sign in</div>
          <div className={styles.item}>
            <p>Email:</p>
            <div className={styles.inputBlock}>
              <input type="text"/>
            </div>
          </div>
          <div className={styles.item}>
            <p>Password:</p>
            <div className={styles.inputBlock}>
              <input type={openPassword ? "text" : "password"}/>
              <img onClick={changeViewPassword} alt=''
                   src={openPassword ? eye : closedEye}/>
            </div>
          </div>
          <div className={styles.checkbox + " " + styles.item}>
            <input type="checkbox"/>
            <span>remember me</span>
          </div>
          <SuperButton disabled={false} title="Login"/>
        </form>
      </div>
  )
}