import Image from "next/image";
import Link from "next/link";
import Styles from "./Header.module.css";
import Logo from "../../public/images/Logo.png";
import Dak from "../../public/images/dak.png";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Notification from "../Notification/Notification";
import MenuSetting from "../MenuSetting/MenuSetting";
import PopupChat from "../PopupChat/PopupChat";

export default function Header() {
    // code light-dark mode
    const [darkTheme, setDarkTheme] = useState(undefined);
    // Đây là nút nhấn show ra notification
    const [ShowNoti, HideNoti] = useState(false);
    // set trạng thái mở menu setting
    const [openMenuSetting, setOpenMenuSetting] = useState(false);
    // set trạng thái icon header
    const [activeList, setActiveList] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    // Set trạng thái PopupChat
    const [showPopupChat, setShowPopupChat] = useState(false);

    // Xử lý light-dark mode
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

    //  Xử lý active icon header
    function removeIndex(array, item) {
        var index = array.indexOf(item);
        array.splice(index, 1);
    }

    const handleActiveList = (index) => {
        if (activeList.includes(index)) {
            // remove
            removeIndex(activeList, index);
            setActiveList(prev => [...prev])
        } else {
            // add
            setActiveList(prev => [...prev, index])
        }
    }

    const social_item_filters = [
        {
            className: "fab fa-facebook-f",
            name: "Facebook",
        },
        {
            className: "fa-brands fa-instagram",
            name: "Instagram",
        },
        {
            className: "fa-brands fa-twitch",
            name: "Twitch",
        },
        {
            className: "fab fa-youtube",
            name: "Youtube",
        },
        {
            className: "fab fa-tiktok",
            name: "Tiktok",
        },
        {
            className: "fab fa-twitter",
            name: "Twitter",
        },
        {
            className: "fa-solid fa-user-group",
            name: "Bạn bè",
        },
    ]

    const menuSettingRef = useRef();
    const closeMenuSetting = e => {
        if (menuSettingRef.current === e.target) {
            setOpenMenuSetting(true)
        }
    };

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/global.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <section className={Styles.site__navbar}>
                <div className={Styles.navbar}>
                    <div className={Styles.navbar__left}>
                        <div className={Styles.navbar__left__logo}>
                            <Link href="/">
                                <a>
                                    <Image src={Logo} alt="ImageLogo" />
                                </a>
                            </Link>
                        </div>
                        <label htmlFor="nav-mobile-input" className={Styles.nav__bars__btn}>
                            <i className="fa-solid fa-bars"></i>
                        </label>
                    </div>
                    <div className={Styles.site__search}>
                        <div className={Styles.search__boxs}>
                            <input type="text" className={Styles.search__inputs} placeholder="Tìm kiếm trong DAK..." />
                            <Link href="/">
                                <a className={Styles.search__icon}>
                                    <i className="fas fa-search"></i>
                                </a>
                            </Link>
                            <div className={Styles.search__history}>
                                <h3 className={Styles.search__history__heading}>Lịch sử tìm kiếm</h3>
                                <ul className={Styles.search__history__list}>
                                    <li className={Styles.search__history__item}>
                                        <Link href="/">
                                            <a className={Styles.search__history__link}>
                                                <div className={Styles.search__history__avatar}>
                                                    <Image src={Dak} alt="Avatar" />
                                                </div>
                                                <h3 className={Styles.search__history__name}>Dak website</h3>
                                                <span className={Styles.search__history__delete}>x</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={Styles.search__history__item}>
                                        <Link href="/">
                                            <a className={Styles.search__history__link}>
                                                <div className={Styles.search__history__avatar}>
                                                    <Image src={Dak} alt="Avatar" />
                                                </div>
                                                <h3 className={Styles.search__history__name}>Dak website</h3>
                                                <span className={Styles.search__history__delete}>x</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={Styles.search__history__item}>
                                        <Link href="/">
                                            <a className={Styles.search__history__link}>
                                                <div className={Styles.search__history__avatar}>
                                                    <Image src={Dak} alt="Avatar" />
                                                </div>
                                                <h3 className={Styles.search__history__name}>Dak website</h3>
                                                <span className={Styles.search__history__delete}>x</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End transfer light-dark mode button */}
                    <div className={Styles.social__box}>
                        <ul className={Styles.social__list}>
                            {
                                social_item_filters.map((filter, i) => (
                                    <li className={Styles.social__item} key={i} onClick={() => { handleActiveList(i) }}>
                                        <a className={`${Styles.social__link} ${activeList.includes(i) ? Styles.active : ''}`}>
                                            <i className={filter.className}></i>
                                            <span className={Styles.tooltip}>{filter.name}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={Styles.navbar__right}>
                        <ul className={Styles.navbar__right__list}>
                            <li
                                className={Styles.navbar__right__item}
                                onClick={() => setOpenMenuSetting(!openMenuSetting)}
                            >
                                <Link href="/home/notifi">
                                    <a className={Styles.navbar__right__link}>
                                        <i className="fa-solid fa-wallet"></i>
                                        <span className={Styles.tooltip}>Ví</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={`${Styles["navbar__right__item"]}`}
                                onClick={() => setShowPopupChat(!showPopupChat)}
                            >
                                <i className="fab fa-facebook-messenger"></i>
                            </li>
                            <li
                                className={Styles.navbar__right__item}
                                onClick={() => HideNoti(!ShowNoti)}
                            >
                                <i className="fas fa-bell"></i>
                                <span className={`${Styles.navbar__right__notifi} ${Styles.active}`}></span>
                            </li>
                            {ShowNoti && (
                                <Notification />
                            )}
                            <li className={Styles.navbar__right__item}
                                onClick={() => setOpenMenuSetting(!openMenuSetting)}
                            >
                                <div className={Styles.navbar__right__theme}>
                                    <div className={Styles.navbar__right__avatar}>
                                        <Image src={Dak} alt="Avatar" />
                                    </div>
                                    <i className="fa-solid fa-gear"></i>
                                </div>
                            </li>
                        </ul>
                        {ShowNoti && (<Notification />)}
                        {openMenuSetting && <MenuSetting showMenuSetting={openMenuSetting}
                            setShowMenuSetting={setOpenMenuSetting} />}
                        {showPopupChat && <PopupChat />}
                    </div>
                </div>
                {/* Nav mobile */}
                <input type="checkbox" className={Styles.nav__input} id="nav-mobile-input" />
                <label htmlFor="nav-mobile-input" className={Styles.nav__overlay}></label>
                <nav className={Styles.nav__mobile}>
                    <div className={Styles.nav__mobile__heading}>
                        <div className={Styles.nav__mobile__logo}>
                            <Link href="/">
                                <a>
                                    <Image src={Logo} alt="ImageLogo" />
                                </a>
                            </Link>
                        </div>
                        <h3 className={Styles.nav__mobile__name}>DakShow</h3>
                    </div>
                    <label htmlFor="nav-mobile-input" className={Styles.nav__mobile__close}>
                        <i className="fa-solid fa-xmark"></i>
                    </label>
                    <form action="" className={Styles.nav__mobile__form}>
                        <div className={Styles.nav__mobile__control}>
                            <input type="text" className={Styles.nav__mobile__input} placeholder="Tìm kiếm trong Dak" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </form>
                    <ul className={`${Styles.nav__mobile__list} ${Styles.color}`}>
                        <h3 className={Styles.nav__mobile__title}>Mạng xã hội</h3>
                        {
                            social_item_filters.map((filter, i) => (
                                <li className={Styles.nav__mobile__item} key={i} onClick={() => { handleActiveList(i) }}>
                                    <a className={`${Styles.nav__mobile__link} ${activeList.includes(i) ? Styles.active : ''}`}>
                                        <i className={filter.className}></i>
                                        <span>{filter.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className={Styles.nav__mobile__list}>
                        <h3 className={Styles.nav__mobile__title}>Nhóm</h3>
                        <li className={Styles.nav__mobile__item}>
                            <Link href="/">
                                <a className={Styles.nav__mobile__link}>
                                    <i className="fa-solid fa-user-group"></i>
                                    <span>Nhóm</span>
                                </a>
                            </Link>
                        </li>
                        <li className={Styles.nav__mobile__item}>
                            <Link href="/">
                                <a className={Styles.nav__mobile__link}>
                                    <i className="fa-solid fa-plus"></i>
                                    <span>Thêm nhóm</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <ul className={Styles.nav__mobile__list}>
                        <h3 className={Styles.nav__mobile__title}>Chức năng</h3>
                        <li className={Styles.nav__mobile__item}>
                            <Link href="/">
                                <a className={Styles.nav__mobile__link}>
                                    <i className="fa-solid fa-ticket"></i>
                                    <span>Xổ số</span>
                                </a>
                            </Link>
                        </li>
                        <li className={Styles.nav__mobile__item}>
                            <Link href="/">
                                <a className={Styles.nav__mobile__link}>
                                    <i className="fa-solid fa-coins"></i>
                                    <span>NFT</span>
                                </a>
                            </Link>
                        </li>
                        <li className={Styles.nav__mobile__item}>
                            <Link href="/">
                                <a className={Styles.nav__mobile__link}>
                                    <i className="fa-solid fa-gamepad"></i>
                                    <span>Trò chơi</span>
                                </a>
                            </Link>
                        </li>
                        <li className={Styles.nav__mobile__item}>
                            <Link href="/">
                                <a className={Styles.nav__mobile__link}>
                                    <i className="fa-solid fa-hand-holding-heart"></i>
                                    <span>Gây quỹ</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}