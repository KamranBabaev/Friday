import {SuperButton} from "../common/c2-SuperButton/SuperButton";
import styles from "./RestorePassword.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import {restorePasswordTC} from "../../redux/reducers/reducerRestorePassword";
import eye from "../common/icons/eye.png";
import closedEye from "../common/icons/closedEye.png";
import {Redirect, useParams} from "react-router-dom";
import {Preloader} from "../common/preloader/Preloader";

export const RestorePassword = () => {
  const [openPassword, setOpenPassword] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [password, setPassword] = useState('')
  const updatePassword = useSelector<AppRootStateType, string>(state => state.restore.updatePassword)
  const dispatch = useDispatch()

  let {token} = useParams<{ token: string }>();

  const changeViewPassword = () => {
    setOpenPassword(!openPassword)
  }

  const passwordTarget = (e: ChangeEvent<HTMLInputElement>) => {
    let pass = e.currentTarget.value
    setPassword(pass)
  }


  const restoreHandler = () => {
    setInitialized(true)
    setTimeout(() => dispatch(restorePasswordTC(password, token)), 1000)
    setPassword('')
  }


  if (updatePassword) {
    return <Redirect to={'/login'}/>
  }

  return (
      <div className={stylesContainer.container}>

        <div className={stylesContainer.titleApp}>
          <h1>Brain storm</h1>
          <h3>Create new password</h3>
        </div>
        {initialized && <Preloader/>}
        <form className={stylesContainer.form}>
          <div className={stylesContainer.item}>
            <p>Password:</p>
            <div className={stylesContainer.inputBlock}>
              <input onChange={passwordTarget}
                     value={password}
                     type={openPassword ? "text" : "password"}
                     placeholder="****"/>
              <img onClick={changeViewPassword} alt=''
                   src={openPassword ? eye : closedEye}/>
            </div>
          </div>
          <div className={styles.restoreBlock}>
            <p>Create new password and we will send your further instruction to
              email</p>
            <SuperButton title="Create new password"
                         onClickHandler={restoreHandler}
                         disabledBtn={password.length < 8}
            />
            <div>
            </div>
          </div>
        </form>
      </div>
  )
}