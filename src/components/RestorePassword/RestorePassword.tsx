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

export const RestorePassword = () => {
  const [openPassword, setOpenPassword] = useState(false)
  const [password, setPassword] = useState('')
  const updatePassword = useSelector<AppRootStateType, string>(state => state.restore.updatePassword)
  const [disabledBtn, setDisabledBtn] = useState(true)
  const dispatch = useDispatch()

  let {token} = useParams<{ token: string }>();

  const changeViewPassword = () => {
    setOpenPassword(!openPassword)
  }

  const passwordTarget = (e: ChangeEvent<HTMLInputElement>) => {
    let pass = e.currentTarget.value
    if (pass.length < 8) {
      setDisabledBtn(true)
    } else {
      setDisabledBtn(false)
    }
    setPassword(pass)
  }


  const restoreHandler = () => {
    dispatch(restorePasswordTC(password, token))
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
                         disabledBtn={disabledBtn}
            />
            <div>
            </div>
          </div>
        </form>
      </div>
  )
}