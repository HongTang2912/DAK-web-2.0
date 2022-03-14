import Next, {useState} from "react";
import Image from "next/image";
import Dropdown from "../Dropdown/Dropdowns"
import Interactive from "../Interactive/Interactive";
import { FaGlobeAsia } from "react-icons/fa";
import ReactPlayer from "react-player"
import Youtube from "react-youtube";
import { TikTokEmbed, FacebookEmbed } from 'react-social-media-embed';
import { TwitterTimelineEmbed, 
        TwitterShareButton, 
        TwitterFollowButton, 
        TwitterHashtagButton, 
        TwitterMentionButton, 
        TwitterTweetEmbed, 
        TwitterMomentShare, 
        TwitterDMButton, 
        TwitterVideoEmbed, 
        TwitterOnAirButton } from 'react-twitter-embed';
import Styles from "./PostVideo.module.css";
import Logo from "../../public/images/Logo.png";
import Head from "next/head";


export default function PostVideo1() {
    const [hoverIcons, setStyle] = useState({display: 'none'});
    const [hoverTimes, setStyleTime] = useState({display: 'none'});
    return (
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
                        <h2>Khoa Lê <span>Đã đăng video mới</span></h2>
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
                            <FaGlobeAsia className={Styles.global__private}
                            onMouseEnter={e => {
                                setStyle({display: 'block'});
                            }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}
                            /><span className={Styles.public__private} style={hoverIcons}>Công Khai</span>
                        </div>
                    </div>
                    <Dropdown />
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://www.twitch.tv/summit1g'
                            width='99.4%'
                            height='100%'
                            />
                        </div>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostVideo2() {
    const opts = {
        playerVars: {
            autoplay: 0,    
        },
    }
    return (
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã đăng video mới</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '99.3%', marginLeft: '-30px' }}>
                            <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={550} />
                        </div>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostVideo3() {
    const opts = {
        playerVars: {
          autoplay: 0,
        },
      };
    return (
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã đăng video mới</span></h2>
                        <p>9 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <Youtube className={Styles.iframe__youtube} videoId="sTnm5jvjgjM" 
                        opts={opts}/>
                    </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostVideo4() {
    return (
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã đăng video mới</span></h2>
                        <p>9 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '97%', marginLeft: '-17px' }}>
                            <TwitterTweetEmbed
                                tweetId={'1495623007611535363'}
                            />
                        </div>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}