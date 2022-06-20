import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import styles from './Registration.module.css'

const Registration = () => {
    const [userDetails, setUserDetails] = useState({
        userName: "",
        userMail: "",
        userMobile: "",
        password: "",
        cnfrmPassword: "",
        errors: {
            userName: "",
            userMail: "",
            userMobile: "",
            password: "",
            cnfrmPassword: "",
        }
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
    const handeleSignup = (event) => {

        event.preventDefault();


        console.log('after', userDetails.errors)
    }

    return (
        <div className={styles.signupDiv}>

            <form className={styles.form}>
                <div className={styles.form__body}>
                    <div className={styles.form__title}>
                        <p>Signup Page</p>
                    </div>
                    <div className={styles.userDiv}>
                        <label className={styles.form__label} htmlFor="userName">User Name </label>
                        <input type="text" className='userName' onChange={handleOnChange} errorMessage />
                        <div className={styles.errorDiv} ></div>
                    </div>
                    <div className={styles.emailDiv}>
                        <label className={styles.form__label} htmlFor="userMail">Email </label>
                        <input type="text" className='userMail' onChange={handleOnChange} />
                        <div className={styles.errorDiv} ></div>
                    </div>
                    <div className={styles.phoneDiv}>
                        <label className={styles.form__label} htmlFor="userMobile">Mobile Number </label>
                        <input type="text" className='userMobile' onChange={handleOnChange} />
                        <div className={styles.errorDiv} ></div>
                    </div>
                    <div className={styles.pwdDiv}>
                        <label className={styles.form__label} htmlFor="password">Password </label>
                        <input type="text" className='password' onChange={handleOnChange} />
                        <div className={styles.errorDiv} ></div>
                    </div>
                    <div className={styles.cPwdDiv}>
                        <label className={styles.form__label} htmlFor="confirm password">Confirm Password </label>
                        <input type="text" className='cnfrmPassword' onChange={handleOnChange} />
                        <div className={styles.errorDiv} ></div>
                    </div>
                    <div className={styles.footer}>
                        <button type="submit" className={styles.btn} onClick={handeleSignup}>Register</button>
                    </div>
                    <p>Already a user? <span className={styles.navLogin} onClick={() => navigate("/login")}>Sign in now</span> </p>
                </div>
            </form>
        </div >
    )
}

export default Registration