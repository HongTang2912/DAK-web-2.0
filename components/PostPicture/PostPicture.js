import Next, {useState, useEffect} from "react";
import Interactive from "../Interactive/Interactive";
import Logo from "../../public/images/Logo.png";
import ImagePost from "../../public/images/css.jpg";
import ReactPlayer from "react-player"
import Styles from "./PostPicture.module.css";
import { FacebookEmbed } from 'react-social-media-embed';
import Youtube from "react-youtube";
import dynamic from 'next/dynamic';
import { FaGlobeAsia } from "react-icons/fa";
import useFacebook from "../../hooks/Facebook/useFacebook";
import Image from "next/image";
import Head from "next/head";
import Dropdown from "../Dropdown/Dropdowns"


export default function PostPicture1() {

    useFacebook({ addTrack: false });
    const [hoverIcons, setStyle] = useState({display: 'none'});
    const [hoverTimes, setStyleTime] = useState({display: 'none'});
    const opts = {
        height: '290',
        width: '440',
        playerVars: {
            autoplay: 0,    
        },
    }

    
    return(
    
    <>
    
        <Head>
            {/* <link rel="stylesheet" href="/css/global.css"/>
            <link rel="stylesheet" href="/css/style.css"/> */}
        </Head>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <div className={Styles.hover__time__date}>
                            <p                      
                            onMouseEnter={e => {
                                setStyleTime({display: 'block'});
                            }}
                            onMouseLeave={e => {
                                setStyleTime({display: 'none'})
                            }}
                            >7 giờ trước - </p>
                            <span className={Styles.day__time} style={hoverTimes}>Thứ 9, ngày 32 tháng 13 năm unknown</span> 
                            <FaGlobeAsia 
                            className={Styles.global__private}
                            onMouseEnter={e => {
                                setStyle({display: 'block'});
                            }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}
                            />
                            <span className={Styles.public__private} style={hoverIcons}>Công Khai</span>
                        <div>

                        </div>
                        </div>
                    </div>
                    <Dropdown />
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <div className={Styles.profile__post__content}>
                            <div                     
                                className="fb-video"
                                data-href="https://www.facebook.com/watch?v=1555515848153265"
                            />
                        </div>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostPicture2() {
    return(
        <>
        <Head>
            <link rel="stylesheet" href="/css/global.css"/>
            <link rel="stylesheet" href="/css/style.css"/>
        </Head>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <p>8 giờ trước</p>
                    </div>
                    <Dropdown />
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <div
                            className="fb-video"
                            data-href="https://www.facebook.com/watch?v=319102653530473"
                        />
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostPicture3() {
    return(
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <Image src={ImagePost} alt="Avatar"/>
                        <Image src={Logo} alt="Avatar"/>
                        <Image src={ImagePost} alt="Avatar"/>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostPicture4() {
    return(
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <Image src={ImagePost} alt="Avatar"/>
                        <Image src={Logo} alt="Avatar"/>
                        <Image src={ImagePost} alt="Avatar"/>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}