import Image from 'next/image';
import Square from '../../public/images/testAnhVuong.jpg'
import Link from 'next/link';
import Styled from './Menusetting.module.css';
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';


export default function MenuSetting({showMenuSetting, setShowMenuSetting}) {
    // code light-dark mode
    const [darkTheme, setDarkTheme] = useState(undefined);
    const handleToggle = (event) => {
        setDarkTheme(event.target.checked);
    };

    useEffect(() => {
        if (darkTheme !== undefined) {
            if (darkTheme) {
                // Set value of  darkmode to dark
                document.documentElement.setAttribute('data-theme', 'dark');
                window.localStorage.setItem('theme', 'dark');
            } else {
                // Set value of  darkmode to light
                document.documentElement.removeAttribute('data-theme');
                window.localStorage.setItem('theme', 'light');
            }
        }
    }, [darkTheme]);

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            '--initial-color-mode'
        );
        // Set initial darkmode to light
        setDarkTheme(initialColorValue === 'dark');
    }, []);
    // end code light-dark module

    const [showMenuLanguage, setShowMenuLanguage] = useState(false);

    // Handle click outside to close menu setting
    const menuSettingRef = useRef();
    const closeMenuSetting = e => {
        if (menuSettingRef.current === e.target) {
            setShowMenuSetting(false)
        }
    };

    return (
        <>  
        <div className={Styled.overlayDropdownMenu} ref={menuSettingRef} onClick={closeMenuSetting}>
            <div className={Styled.dropDownMenu}>
                <div className={Styled.menu_setting}>
                    <div className={Styled.goTo_profile}>
                        <div className={Styled.avatar_user}>
                            <Image src={Square} />
                        </div>
                        <div className={Styled.info_user}>
                            <p className={Styled.name_user}>Nguy???n Thi??n Ph??c</p>
                            <span className={Styled.sub_name_user}>Xem trang c?? nh??n c???a b???n</span>
                        </div>
                    </div>
                    <div className={Styled.features}>
                        <ul className={Styled.list_feature}>
                            <li className={Styled.feature_item}>
                                <Link href="">
                                    <a>Chuy???n ?????i giao di???n</a>
                                </Link>
                                <div>
                                    <form action="#">
                                        <label className={Styled.switch}>
                                            <input type="checkbox" checked={darkTheme} onChange={handleToggle}/>
                                            <span className={Styled.slider}></span>
                                        </label>
                                    </form>
                                </div>
                            </li>
                            <li className={Styled.feature_item}
                                onClick={() => setShowMenuLanguage(!showMenuLanguage)}
                            >
                                <Link href="">
                                    <a>C??i ?????t ng??n ng???</a>
                                </Link>
                                <i className="fa-solid fa-globe"></i>
                            </li>
                            {/* C?? set css inline top = 0 ??? ????y */}
                            {showMenuLanguage && (
                                <div className={Styled.dropDownMenu} style={{top: 0}}>                            
                                    <div className={Styled.menu_setting}>
                                        {/* <div className={Styled.goTo_profile}> */}
                                            <p className={Styled.goBackMainMenu}
                                                onClick={() => setShowMenuLanguage(!showMenuLanguage)}>
                                            <i className="fa-solid fa-arrow-left"></i>
                                                Go back
                                            </p>
                                        {/* </div> */}
                                        <div className={Styled.features}>
                                            <ul className={Styled.list_feature}>
                                                <li className={Styled.feature_item}>
                                                    <Link href="">
                                                        <a>English</a>
                                                    </Link>
                                                    <i className="fa-solid fa-globe"></i>
                                                    </li>
                                                <li className={Styled.feature_item}>
                                                    <Link href="">
                                                        <a>Vietnamese</a>
                                                    </Link>
                                                    <i className="fa-solid fa-gear"></i>
                                                </li>
                                                <li className={Styled.feature_item}>
                                                    <Link href="">
                                                        <a>India</a>
                                                    </Link>
                                                    <i className="fa-solid fa-globe"></i>
                                                    </li>
                                                <li className={Styled.feature_item}>
                                                    <Link href="">
                                                        <a>America</a>
                                                    </Link>
                                                    <i className="fa-solid fa-gear"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <li className={Styled.feature_item}>
                                <Link href="">
                                    <a>C??i ?????t v?? quy???n ri??ng t??</a>
                                </Link>
                                <i className="fa-solid fa-gear"></i>
                            </li>
                        </ul>
                    </div>
                    <div className={Styled.copyright_menusetting}>
                        <Link href="/">
                            <a>Quy???n ri??ng t??  ?? ??i???u kho???n  ?? Qu???ng c??o </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>        
        </>
    );
}