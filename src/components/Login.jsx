import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import styles from './Login.module.css'

const Login = () => {
    const [userDetails, setUserDetails] = useState({
        userMail: "",
        password: ""
    })
    const navigate = useNavigate()

    //to handel all onChanges of signup page.
    const handleOnChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.className]: e.target.value,
        })
    }

    //to handel signup page.
    const handeleSignup = (e) => {
        console.log(userDetails)
    }

    return (
        <div className={styles.signupDiv}>

            <div className={styles.form}>
                <div className={styles.form__body}>
                    <div className={styles.form__title}>
                        <p>Login Page</p>
                    </div>
                    <div className={styles.email}>
                        <label className={styles.form__label} htmlFor="userMail">User Email </label>
                        <input type="text" className='userMail' onChange={handleOnChange} />
                    </div>
                    <div className={styles.password}>
                        <label className={styles.form__label} htmlFor="password">Password </label>
                        <input type="text" className='password' onChange={handleOnChange} />
                    </div>
                    <div className={styles.footer}>
                        <button type="submit" className={styles.btn} onClick={handeleSignup}>Login</button>
                    </div>
                    <p>Not a user? <span className={styles.navRegister} onClick={() => { navigate('/register') }}>Sign up now</span> </p>
                </div>
            </div>
        </div >
    )
}

export default Login