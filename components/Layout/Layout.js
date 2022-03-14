import Head from 'next/head';
import Link from 'next/link';
import Styles from './Layout.module.css';
import Dak from '../../public/images/dak.png';
import Thumb from "../../public/images/javascript.jpg"
import Image from 'next/image';
import { useState, useEffect, state, useContext } from 'react';
import MenuSetting from '../MenuSetting/MenuSetting';
import Notification from '../Notification/Notification';
import Shortcuts from '../Shortcuts/Shortcuts';
import Features from '../Features/Features';
import Logo from "../../public/images/Logo.png";
import Header from "../Header/Header";
import ChatBox, { ChatNoti } from '../ChatBox/ChatBox';

export const siteTitle = "Home";

export default function Layout({ children }) {
    const [isShowChatBox, setShowChatBox] = useState(false);
    const toggleClass = () => {
        setShowChatBox(!isShowChatBox);
    };

    return (
        <div className={Styles.container}>
            <Head>
                <meta name="description" content="Build demo website version2" />
                <link rel="stylesheet" href="/css/global.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <meta name="og:title" content={siteTitle} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Header />
            <div className={Styles.content}>
                <Shortcuts />
                <div className={Styles.body}>
                    <main>{children}</main>
                </div>
                <Features />
                <ChatBox isShowChatBox={isShowChatBox} />
                {/* Thêm class ${Styles["haveMess"]} để hiện popup thông báo có tin nhắn */}
                <div className={`${Styles["chat"]} ${Styles["haveMess"]}`} onClick={toggleClass}>
                    <ChatNoti />
                </div>
            </div>
        </div>
    )
}