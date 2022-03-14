import Head from "next/head";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import Logo from "../../public/images/Logo.png";
import {useState} from 'react';
import Layout from "../../components/Layout/Layout";
import Styles from "../../styles/SignInUp.module.css";
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import {signInWithGoogle, signInWithFaceBook} from './firebase'


export default function Login() {
    const [switchLanguage, setLanguage] = useState("us");
    const language = require(`/languages/login-register/${switchLanguage}.json`);
    const [switcher, setSwitcher] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [isValidAccount, setValidationAccount] = useState(true);

    

    return(
    <>
    
        <Head>
            <title>DAK - {switcher ? "Đăng nhập" : "Đăng ký"}</title>
            <link rel="stylesheet" href="/css/global.css"/>
        </Head>
        <div className={Styles["form__group"]}>
            <div className={Styles["form__container"]}>
                {/* <button onClick={() => setLanguage("us")}>English</button>
                <button onClick={() => setLanguage("vn")}>Tiếng Việt</button> */}
                <form className={Styles["form__control"]}>
                {switcher ? 
                <> <div className={Styles["form__control-left"]}>
                        <Image src={Logo} alt="Logo"/>
                    </div>
                    <div className={Styles["form__control-right"]}>
                        <div className={Styles["form__group-heading"]}>
                            <h2>DAKSHOW - {language.register.title}</h2>
                            <p>{language["login-register:welcome"]}</p>
                            <span>{language["login-register:script"]}</span>
                        </div>
                        <div className={Styles["login__form"]}>
                            <input type="text" id="fullName" className={Styles["form__control-input"]} placeholder={language["login-register:fullName"]}/>
                            <input type="text" id="username" className={Styles["form__control-input"]} placeholder={language["login-register:userName"]}/>
                            <input type="text" id="email" className={Styles["form__control-input"]} placeholder={language["login-register:email"]}/>
                            <input type="password" id="password" className={Styles["form__control-input"]} placeholder={language["login-register:password_placeHolder"]}/>
                            <input type="password" id="confirmPassword" className={Styles["form__control-input"]} placeholder={language["login-register:password_authentication_placeHolder"]}/>
                            <DatePicker dayPlaceholder="--" monthPlaceholder="--" className={Styles["form__control-input"]} selected={startDate} onChange={(date) => setStartDate(date)} />
                            <p className={Styles["form__control-rules"]}>{language["login-register:policyMessage"]}</p>
                            <input type="checkbox" id="policy" />
                            <label htmlFor="policy" className={Styles["form__control-policy"]}>{language["login-register:agreeMessage"]}<span>{language["login-register:policyLink"]}</span></label>
                            <input type="submit" className={Styles["form__control-input"]} value={language.register.title}/>
                        </div >
                        <p className={Styles["form__control-create"]}>
                            {language["login-register:hadPassword"]}
                            <span onClick={() => setSwitcher(false)}>    
                                {language.login.title}
                            </span>
                        </p>
                    </div> 
                </> 
                : 
                <>
                    <div className={Styles["form__control-left"]}>
                        <Image src={Logo} alt="Logo"/>
                    </div>
                    <div className={Styles["form__control-right"]}>
                        <div className={Styles["form__group-heading"]}>
                            <h2>DAKSHOW - {language.login.title}</h2>
                            <p>{language["login-register:welcome"]}</p>
                            <span>{language["login-register:script"]}</span>
                        </div>
                        <div className={Styles["login__form"]}>
                            <input type="text" id="email" className={Styles["form__control-input"]} placeholder="Email"/>
                            <input type="password" id="password" className={Styles["form__control-input"]} placeholder={language["login-register:password_placeHolder"]}/>
                            
                            {isValidAccount ? <p className={Styles["form__control-message-success"]}>{language["login-register:success_message"]}</p> :  
                            <p className={Styles["form__control-message-error"]}>{language["login-register:error_message"]}</p>}
                            <input type="submit" className={Styles["form__control-input"]} value={language.login.title}
                                onClick={()=>{setValidationAccount(!isValidAccount)}}
                            />
                            <p className={Styles["form__control-forget"]}>{language["login-register:forgot_password"]}</p>
                        </div>
                        <div 
                            className={Styles["form__control-item"]}
                            onClick={signInWithGoogle}
                        >
                            <FaGoogle className={Styles["form__item-icon"]} />
                            {language["login-register:loginWith"]} Google
                        </div>
                        <div 
                            className={Styles["form__control-item"]}
                            onClick={signInWithFaceBook}
                        >
                            <FaFacebookF className={Styles["form__item-icon"]} />
                            {language["login-register:loginWith"]} Facebook
                        </div>
                        <div className={Styles["form__control-item"]}>
                            <FaTwitter className={Styles["form__item-icon"]} />
                            {language["login-register:loginWith"]} Twitter
                        </div>
                        <div className={Styles["form__control-item"]}>
                            <FaYoutube className={Styles["form__item-icon"]} />
                            {language["login-register:loginWith"]} Youtube
                        </div>
                        <div className={Styles["form__control-item"]}>
                            <FaTiktok className={Styles["form__item-icon"]} />
                            {language["login-register:loginWith"]} Tiktok
                        </div>
                        <p className={Styles["form__control-create"]}>
                            {language["login-register:noPassword"]} 
                            <span
                                onClick={() => setSwitcher(true)}>
                                {language.register.title}                               
                            </span>
                        </p>
                    </div>
                </>}
                </form>
            </div>
        </div>
    </>    
    )
}
