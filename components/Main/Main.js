import React, { useState, useEffect } from "react"
import Image from "next/image"
import ReactLogo from "/public/images/Logo.png"
import DakCoin from "/public/images/Logo.png"
import Post from "../Posts/Posts"
import ScrollBar from "../Stories/Stories"
import Styled from "./Main.module.css"
import Head from "next/head"

// icons
import {
    FaTiktok,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaFacebookMessenger,
    FaBars,
} from "react-icons/fa"
import { AiFillHome, AiFillBell } from "react-icons/ai"
import { VscGlobe } from "react-icons/vsc"
import { FiEdit } from "react-icons/fi"

export default function main() {
    // catch click button to increase font-size of links
    const [active, setActive] = useState(1)

    const [mode, setMode] = useState(true)

    const handleMode = () => {
        setMode(!mode)
    }

    function calculatePostMarks(obj) {
        var marks =
            obj.props.comments.length +
            obj.props.reaction.likes * 0.5 +
            obj.props.reaction.shares * 2 +
            obj.props.reaction.votes
        return marks
    }

    const links = ["Đề xuất", "Đang theo dõi", "Mới nhất", "Bảng xếp hạng"]

    const posts = [
        //        ( <Post videoSrc=
        //         {<iframe
        //             src="https://www.facebook.com/plugins/video.php?height=466&href=https%3A%2F%2Fwww.facebook.com%2Fhieuleblanc%2Fvideos%2F232388669044399%2F&show_text=false&width=560&t=0"
        //             width="560"
        //             height="466"
        //             scrolling="no"
        //             frameborder="0"
        //             allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        //             allowFullScreen="true"
        //             className={Styled["dak-sharing"]}>
        //         </iframe>}
        //                 title={`Khi em Hiếu thiểu năng chơi nối từ phần 1 !!!
        //                         Khi em Hiếu thiểu năng trổ tài chơi nối từ 🥴🥴`}
        //                 baseInfo = {
        //             {
        //                 nickname: "Tăng Chấn Hồng",
        //                 activity: "đã chia sẻ 1 video",
        //                 time: 834
        //             }
        //         }
        //         comments={
        //             [
        //                 {
        //                     img: DakCoin,
        //                     name: "Hoàng Tuấn Anh",
        //                     comment_line: "Hay dạy chòi!!!",
        //                     likes: "7",
        //                     time: "9 ngày trước"
        //                 },
        //                 {
        //                     img: ReactLogo,
        //                     name: "Trần Quốc Nghĩa",
        //                     comment_line: "Ảo thật đấy",
        //                     likes: "2",
        //                     time: "3 ngày trước"
        //                 }
        //             ]
        //         }
        //         reaction = {
        //             {
        //                 likes: 123,
        //                 shares: 54,
        //                 votes: 29,
        //                 views: 678
        //             }
        //         }
        //         mode={mode}
        //     />),
        //    ( <Post videoSrc=
        //         {<iframe
        //             src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCryptoComOfficial%2Fposts%2F4826805784078480&show_text=true&width=500"
        //             width="500"
        //             height="873"
        //             className={Styled["dak-sharing"]}
        //             scrolling="no"
        //             frameborder="0"
        //             allowFullScreen="true"
        //             allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>}
        //             title={`Những tình huống hài hước trong liên quân p.4
        //                     Khi bạn xem tiktok quá 180p ngày`}
        //             baseInfo = {
        //             {
        //                 nickname: "Nguyễn Trung Hiếu",
        //                 activity: "đã chia sẻ 1 bài viết",
        //                 time: 2
        //             }
        //         }
        //         comments={
        //             [
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: ReactLogo,
        //                     name: "Tăng Chấn Hồng",
        //                     comment_line: "Bạn là nhất.",
        //                     likes: "8888",
        //                     time: "2 giờ trước"
        //                 }
        //             ]
        //         }
        //         reaction = {
        //             {
        //                 likes: 742,
        //                 shares: 62,
        //                 votes: 6,
        //                 views: 283
        //             }
        //         }
        //         mode={mode}
        //     />),
        //    ( <Post videoSrc=
        //         {<iframe
        //             src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D636787367528039%26set%3Da.106310393909075&show_text=true&width=500"
        //             width="500"
        //             height="534"
        //             className={Styled["dak-sharing"]}
        //             scrolling="no" frameborder="0"
        //             allowFullScreen="true"
        //             allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        //         </iframe>}
        //             title={`Những tình huống hài hước trong liên quân p.4
        //                 Khi bạn xem tiktok quá 180p ngày`}
        //             baseInfo = {
        //             {
        //                 nickname: "Phan Quốc Nghĩa",
        //                 activity: "đã đăng 10 bức hình",
        //                 time: 135
        //             }
        //         }
        //         comments={
        //             [
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: DakCoin,
        //                     name: "Nguyễn Hoài Thương",
        //                     comment_line: "Quá tuyệt dời!",
        //                     likes: "163",
        //                     time: "1 ngày trước"
        //                 },
        //                 {
        //                     img: ReactLogo,
        //                     name: "Tăng Chấn Hồng",
        //                     comment_line: "Bạn là nhất.",
        //                     likes: "8888",
        //                     time: "2 giờ trước"
        //                 }
        //             ]
        //         }
        //         reaction = {
        //             {
        //                 likes: 4922,
        //                 shares: 20,
        //                 votes: 824,
        //                 views: 9302
        //             }
        //         }
        //         mode={mode}
        //     />)
    ]

    return (
        <div className={`${Styled.container} ${mode ? Styled.dark : Styled.light}`}>
            <div className={Styled.navbar}>
                <div className={Styled["logo-field"]}>
                    <div className={`${Styled.logo}`}></div>
                </div>
                <div className={Styled["link-to"]}>
                    <a href="/">
                        <AiFillHome className={Styled["icon-link-1"]} />{" "}
                    </a>
                    <a href="https://facebook.com/">
                        <FaFacebookF className={Styled["icon-link-2"]} />
                    </a>
                    <a href="https://twitter.com">
                        <FaTwitter className={Styled["icon-link-3"]} />
                    </a>
                    <a href="https://youtube.com">
                        <FaYoutube className={Styled["icon-link-4"]} />
                    </a>
                    <a href="https://tiktok.com">
                        <FaTiktok className={Styled["icon-link-5"]} />
                    </a>
                </div>
                <div className={Styled["noti-buttons"]}>
                    <label className={Styled["switch"]}>
                        <input onClick={handleMode} type="checkbox" />
                        <span className={`${Styled["slider"]} ${Styled["round"]}`}></span>
                    </label>
                    <a href="/home/notifi">
                        <VscGlobe
                            className={`${Styled["icon-link-6"]} ${Styled["noti-icon-link"]}`}
                        />
                    </a>
                    <FaFacebookMessenger
                        className={`${Styled["icon-link-7"]} ${Styled["noti-icon-link"]}`}
                    />
                    <AiFillBell
                        className={`${Styled["icon-link-8"]} ${Styled["noti-icon-link"]}`}
                    />

                    <span
                        className={`${Styled["user-field"]} ${Styled["noti-icon-link"]}`}
                    >
                        <div className={Styled["user"]}>
                            <Image
                                className={`${Styled.avatar} ${Styled["noti-icon-link"]}`}
                                src={ReactLogo}
                                alt="react-logo"
                                width={24}
                                height={24}
                            />
                            <FaBars className={`${Styled["noti-icon-link"]}`} />
                        </div>
                    </span>
                </div>
            </div>
            <div className={Styled.content}>
                <div className={Styled["left-bar"]}>
                    <strong>Lối tắt</strong>
                </div>
                <div className={Styled["mid-bar"]}>
                    <ScrollBar />
                    <ul className={Styled["filter-bar"]}>
                        {links.map((link, index) => (
                            <li
                                onClick={() => setActive(index)}
                                className={`${active === index
                                        ? Styled["filter-button-active"]
                                        : Styled["filter-button"]
                                    }`}
                                key={index}
                            >
                                {link}
                            </li>
                        ))}
                        <li className={Styled["filter-button"]}>
                            <button className={Styled["post-button"]}>
                                <FiEdit />
                                Tạo bài viết
                            </button>
                        </li>
                    </ul>

                    {/* posts */}
                    <>
                        {active === 1
                            ? posts
                                .sort()
                                .reverse()
                                .map((post) => {
                                    return post
                                })
                            : null}
                        {active === 3
                            ? posts
                                .sort((a, b) => calculatePostMarks(b) - calculatePostMarks(a))
                                .map((post) => {
                                    return post
                                })
                            : null}
                        {active === 2
                            ? posts
                                .sort((a, b) => a.props.baseInfo.time - b.props.baseInfo.time)
                                .map((post) => {
                                    return post
                                })
                            : null}
                    </>
                </div>

                <div className={Styled["right-bar"]}></div>
            </div>
        </div>
    )
}
