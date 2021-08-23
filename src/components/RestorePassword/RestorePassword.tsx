import {SuperButton} from "../common/c2-SuperButton/SuperButton";
import styles from "./RestorePassword.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import {restorePasswordTC} from "../../redux/reducers/reducerRestorePassword";
import eye from "../common/icons/eye.png";
import closedEye from "../common/icons/closedEye.png";

export const RestorePassword = () => {
    const [openPassword, setOpenPassword] = useState(false)
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const updatePassword = useSelector<AppRootStateType, string>(state => state.restore.updatePassword)
    const changeViewPassword = () => {
        setOpenPassword(!openPassword)
    }

    const token = window.location.href.split("/")[5];



    const passwordTarget = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const restoreHandler = () => {
        dispatch(restorePasswordTC(password, token))
        setPassword('')
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
                        <input  onChange={passwordTarget}
                                value={password}
                                type={openPassword ? "text" : "password"}
                                placeholder="****"/>
                        <img onClick={changeViewPassword} alt=''
                             src={openPassword ? eye : closedEye}/>
                    </div>
                </div>
                <div className={styles.restoreBlock}>
                    <p>Create new password and we will send your further instruction to email</p>
                    <SuperButton disabled={false}
                                 title="Create new password"
                                 onClickHandler={restoreHandler}
                    />
                    <div>
                    </div>
                </div>
            </form>
        </div>
    )
}