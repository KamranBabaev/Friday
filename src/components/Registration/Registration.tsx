import {SuperButton} from '../common/c2-SuperButton/SuperButton';
import styles from './Registration.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import eye from "../common/icons/eye.png"
import closedEye from "../common/icons/closedEye.png"
import {useState} from 'react';

export const Registration = () => {

  const [openPassword, setOpenPassword] = useState(false)

  const changeViewPassword = () => {
    setOpenPassword(!openPassword)
  }

  return (
      <div className={stylesContainer.container}>

        <div className={stylesContainer.titleApp}>
          <h1>Brain storm</h1>
          <h2>Sign up</h2>
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
          <div className={stylesContainer.item}>
            <p>Confirm password:</p>
            <div className={stylesContainer.inputBlock}>
              <input type={openPassword ? "text" : "password"}
                     placeholder="****"/>
              <img onClick={changeViewPassword} alt=''
                   src={openPassword ? eye : closedEye}/>
            </div>
          </div>

          <div className={styles.buttons}>
            <SuperButton disabled title='Cancel'/>
            <SuperButton disabled={false} title='Register'/>
          </div>
        </form>
      </div>
  )
}