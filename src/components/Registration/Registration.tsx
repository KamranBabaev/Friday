import {SuperButton} from '../common/c2-SuperButton/SuperButton';
import styles from './Registration.module.css'
import eye from '../../iqons/eye.png'
import eyeClosed from '../../iqons/closedEye.png'
import {useState} from 'react';

export const Registration = () => {

    const [openPassword, setOpenPassword] = useState(false)

    const changeViewPassword = () => {
        setOpenPassword(!openPassword)
    }

    return (
        <div className={styles.registration}>
            <h1>It Shmaiti</h1>
            <h2>Sign Up</h2>
            <div className={styles.item}>
                <p>Email</p>
                <div className={styles.inputBlock}>
                    <input type="text"/>
                </div>
            </div>

            <div className={styles.item}>
                <p>Password</p>
                <div className={styles.inputBlock}>
                    <input type={openPassword ? 'text' : 'password'}/>
                    <img src={openPassword ? eye : eyeClosed}
                         onClick={changeViewPassword} alt="eye"/>
                </div>
            </div>
            <div className={styles.item}>
                <p>Confirm Password</p>
                <div className={styles.inputBlock}>
                    <input type={openPassword ? 'text' : 'password'}/>
                    <img src={openPassword ? eye : eyeClosed}
                         onClick={changeViewPassword} alt="eye"/>
                </div>
            </div>

            <div style={{display: 'flex', padding: '20px'}}>
                <SuperButton disabled title={'Cancel'}/>
                <SuperButton disabled={false} title={'Register'}/>
            </div>

        </div>
    )
}