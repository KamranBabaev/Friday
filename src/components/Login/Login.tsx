import styles from './Login.module.css'
import stylesContainer from '../common/styles/Container.module.css'
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
      <div className={stylesContainer.container}>

        <div className={stylesContainer.titleApp}>
          <h1>Brain storm</h1>
          <h2>Sign in</h2>
        </div>

        <form className={stylesContainer.form}>
          <div className={stylesContainer.item}>
            <p>Email:</p>
            <div className={stylesContainer.inputBlock}>
              <input type="text" placeholder="example@ddd.com"/>
            </div>
          </div>
          <div className={stylesContainer.item}>
            <p>Password:</p>
            <div className={stylesContainer.inputBlock}>
              <input type={openPassword ? "text" : "password"}
                     placeholder="****"/>
              <img onClick={changeViewPassword} alt=''
                   src={openPassword ? eye : closedEye}/>
            </div>
          </div>
          <div className={styles.rememberMe}>
            <input className={styles.checkbox} type="checkbox"/>
            <span>remember me</span>
          </div>
          <SuperButton disabled={false} title="Login"/>
        </form>
      </div>
  )
}