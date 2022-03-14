import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/Layout';
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import useFacebook from '../hooks/Facebook/useFacebook';
import Stories from '../components/Stories/Stories.js';
import PostPicture1, { PostPicture2, PostPicture3, PostPicture4 } from '../components/PostPicture/PostPicture';
import PostVideo1, { PostVideo2, PostVideo3, PostVideo4 } from '../components/PostVideo/PostVideo';
import Shortcuts from '../components/Shortcuts/Shortcuts';
import Features from '../components/Features/Features';



import FormCreatePost from '../components/FormCreatePost/FormCreatePost'
import Styles from "../styles/Home.module.css";


import {
    AiFillEdit //Ghi chú
} from "react-icons/ai";

export default function Home() {
    useFacebook({ addTrack: false });
    // Sticky Menu Area
    // useEffect(() => {
    //     window.addEventListener('scroll', isSticky);
    //     return () => {
    //         window.removeEventListener('scroll', isSticky);
    //     };
    // });

    /* Method that will fix header after a specific scrollable */
    // const isSticky = (e) => {
    //     const header = document.querySelector('.body__header');
    //     const scrollTop = window.scrollY;
    //     scrollTop >= 400 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    // };

    const [showFormCreatePost, setShowFormCreatePost] = useState(false);
    const openModal = () => {
        setShowFormCreatePost(prev => !prev)
    }

    // Start handle sticky nav 
    const [sticky, setSticky] = useState(true);
    const controlNav = () => {
        if(window.scrollY > 350) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNav)
        return () => {
            window.removeEventListener('scroll', controlNav)
        }
    }, [])
    // End handle sticky nav

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                {/* <link rel="stylesheet" href="/css/global.css"/> */}
                {/* <link rel="stylesheet" href="/css/home/home.css"/> */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/> */}
                {/* <Script src="../../public/js/main.js" strategy="lazyOnload" /> */}
            </Head>
            <Layout>
                <div className={Styles["body__stories"]}>
                    <Stories />
                </div>
                <div className={`${Styles["body__header"]} ${sticky && Styles["is_Sticky"]}`}>
                    <div className={Styles["header__list"]}>
                        <div className={Styles["header__list-left"]}>
                            <div className={`${Styles["header__item"]} ${Styles["active"]}`}><Link href="/"><a>Phổ biến</a></Link></div>
                            <div className={Styles["header__item"]}><Link href="/"><a>Mới nhất</a></Link></div>
                            <div className={Styles["header__item"]}><Link href="/"><a>Bảng xếp hạng</a></Link></div>
                        </div>
                        <button className={Styles["header__create"]} 
                            onClick={openModal}    
                        >
                            <i className="fas fa-edit"></i>
                            Tạo bài viết
                        </button>
                    </div>
                </div>
                <div className={Styles["body__post"]}>
                    <div className={Styles["body__post-left"]}>
                        <PostPicture1 />
                        <PostPicture1 />
                    </div>
                    <div className={Styles["body__post-right"]}>
                        <PostVideo1 />
                        <PostVideo2 />
                        <PostVideo4 />
                        <PostPicture1 />
                    </div>
                </div>
            </Layout>
            <FormCreatePost showModal={showFormCreatePost} setShowModal={setShowFormCreatePost} />
        </>
    )
}