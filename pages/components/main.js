import React, { useState } from 'react';
import Image from 'next/image';
import ReactLogo from '../../public/react.png'
import DakCoin from '../../public/dak.png';
import styled from 'styled-components';
import Post from './posts'
import Styled from '/styles/Home.module.css';


// icons 
import { FaTiktok,  FaFacebookF, FaTwitter, FaYoutube, FaFacebookMessenger, FaBars } from 'react-icons/fa';
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";


export default function main() {

    // catch click button to increase font-size of links
    const [active, setActive] = useState(1);

    const links = [ "Đề xuất",
    "Đang theo dõi",
    "Mới nhất",
    "Bảng xếp hạng" ]

    const [mode, setMode] = useState(false)

    

    return <div class={`${Styled.container} ${mode ? Styled.dark : Styled.light}`}>
        
        <div className={Styled.navbar}>
            <div className={Styled["logo-field"]}>
                <div className={`${Styled.logo}`}>
                    
                </div>
            </div>
            <div className={Styled["link-to"]}>
                <a href="/"><AiFillHome className={Styled["icon-link-1"]}/> </a>
                <a href="https://facebook.com/"><FaFacebookF className={Styled["icon-link-2"]}/></a>
                <a href="https://twitter.com"><FaTwitter className={Styled["icon-link-3"]}/></a>
                <a href="https://youtube.com"><FaYoutube className={Styled["icon-link-4"]}/></a>
                <a href="https://tiktok.com"><FaTiktok className={Styled["icon-link-5"]}/></a>
            </div>
            <div className={Styled["noti-buttons"]}>
                <label className={Styled["switch"]}>
                    <input onClick={() => {setMode(!mode)}} type="checkbox"/>
                    <span className={`${Styled["slider"]} ${Styled["round"]}`}></span>
                </label>
                <VscGlobe className={`${Styled["icon-link-6"]} ${Styled["noti-icon-link"]}`}/>
                <FaFacebookMessenger className={`${Styled["icon-link-7"]} ${Styled["noti-icon-link"]}`}/>
                <AiFillBell className={`${Styled["icon-link-8"]} ${Styled["noti-icon-link"]}`}/>
                
                <span className={`${Styled["user-field"]} ${Styled["noti-icon-link"]}`}>
                    <div className={Styled["user"]}>
                        <Image 
                            className={`${Styled.avatar} ${Styled["noti-icon-link"]}`}
                            src={ReactLogo} 
                            alt="react-logo"
                            width={24}
                            height={24}
                        />
                        <FaBars className={`${Styled["noti-icon-link"]}`}/>
                    </div>
                    
                </span>
            </div>
        </div>

        <div className={Styled.content}>
            <div className={Styled["left-bar"]}>
                <strong>Lối tắt</strong>
            </div>
            <div className={Styled["mid-bar"]}>
                <ul className={Styled["filter-bar"]}>

                    {
                        links.map((link, index) => (
                            <li 
                                onClick={() => setActive(index)}
                                className={`${active === index ? Styled["filter-button-active"] : Styled["filter-button"]}`} 
                                key={index}
                            >
                                {link}
                            </li>
                        ))
                    }
                   
                    <li className={Styled["filter-button"]}>
                        <button className={Styled["post-button"]}>
                            <FiEdit/>
                            Tạo bài viết
                        </button>
                    </li>

                    
                </ul>

                {/* posts */}
               
                <Post videoSrc=
                    {<iframe 
                        src="https://www.facebook.com/plugins/video.php?height=466&href=https%3A%2F%2Fwww.facebook.com%2Fhieuleblanc%2Fvideos%2F232388669044399%2F&show_text=false&width=560&t=0" 
                        width="560" 
                        height="466" 
                        scrolling="no" 
                        frameborder="0" 
                        allowfullscreen="true" 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                        allowFullScreen="true">

                    </iframe>}
                    title={`Khi em Hiếu thiểu năng chơi nối từ phần 1 !!!
Khi em Hiếu thiểu năng trổ tài chơi nối từ 🥴🥴`}
                    comments={
                        [
                            {
                                img: DakCoin,
                                name: "Hoàng Tuấn Anh",
                                comment_line: "Hay dạy chòi!!!",
                                likes: "7",
                                time: "9 ngày trước"
                            },
                            { 
                                img: ReactLogo,
                                name: "Trần Quốc Nghĩa",
                                comment_line: "Ảo thật đấy",
                                likes: "2",
                                time: "3 ngày trước"
                            }
                        ]
                    }
                />
                <Post videoSrc=
                    {<iframe 
                        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FThienKim.VGM%2Fvideos%2F810284543189443%2F&show_text=false&width=476&t=0" 
                        width="476" 
                        height="476" 
                        scrolling="no" 
                        frameborder="0" 
                        allowfullscreen="true" 
                        allow="autoplay; clipboard-write; 
                        encrypted-media; picture-in-picture; 
                        web-share" 
                        allowFullScreen="true">

                    </iframe>}
                    title={`Những tình huống hài hước trong liên quân p.4
Khi bạn xem tiktok quá 180p ngày`}
                    comments={
                        [
                            {
                                img: DakCoin,
                                name: "Nguyễn Hoài Thương",
                                comment_line: "Quá tuyệt dời!",
                                likes: "163",
                                time: "1 ngày trước"
                            },
                            { 
                                img: ReactLogo,
                                name: "Tăng Chấn Hồng",
                                comment_line: "Bạn là nhất.",
                                likes: "36",
                                time: "2 giờ trước"
                            }
                        ]

                    }
                />
            </div>
            <div className={Styled["right-bar"]}>
                
            </div>
        </div>
    </div>;
}
