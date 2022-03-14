import Head from "next/head";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import Layout from "../../../components/Layout/Layout";
import Thumb from "../../../public/images/javascript.jpg";
import Link from "next/link";
import { useState } from "react";
import Background from "../../../public/images/bg.png";
import Dak from "../../../public/images/dak.png";
import Styles from "../../../styles/Profile.module.css";
import {FaCheck, FaFacebookMessenger, FaPlusCircle, FaRegEdit, FaCheckCircle} from "react-icons/fa";

export default function Profile() {
    const [active, setActive] = useState(1);
    const [activeLink, setActiveLink] = useState(0);

    const filters = [
        'Bài viết',
        'Thư viện',
        'Thống kê'
    ]
    
    return(
        <Layout>
            <Head>
                <title>DAK - Profile</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <section className={Styles["profile"]}>
            <div className={Styles["profile__info"]}>
                    <div className={Styles["profile__cover-image"]}>
                        <Image src={Background} alt="CoverImage"/>
                    </div>
                    <div className={Styles["profile__main"]}>
                        <div className={Styles["profile__avatar"]}>
                            <Image src={Dak} alt="Avatar"/>
                        </div>
                        <div className={Styles["profile__content"]}>
                            <h2 className={Styles["profile__name"]}>
                                Nguyễn Thiên Phúc
                                <FaCheck className={Styles["profile__icon-check"]}/>
                            </h2>
                            <p className={Styles["profile__des"]}>
                                Phúc ngu thứ 2 không ai thứ nhất Phúc ngu thứ 2 không ai thứ nhất Phúc ngu thứ 2 không ai thứ nhất Phúc ngu thứ 2 không ai thứ nhất
                            </p>
                            <ul className={Styles["profile__action"]}>
                                <li className={Styles["profile__mess"]}>
                                    <FaFacebookMessenger className={Styles["profile__icon-action"]}/>
                                    <span>Messenger</span>
                                </li>
                                {/* Thêm class active vào sẽ hiện lên */}
                                <li className={`${Styles["profile__follow"]} ${Styles["active"]}`}>
                                    <FaPlusCircle className={Styles["profile__icon-action"]} />
                                    <span>Theo dõi</span>
                                </li>
                                <li className={Styles["profile__follow"]}>
                                    <FaCheckCircle className={Styles["profile__icon-action"]} />
                                    <span>Đã theo dõi</span>
                                </li>
                            </ul>
                        </div>
                        <ul className={Styles["profile__follow-list"]}>
                            <div className={Styles["profile__follow-vote"]}>
                                <li className={Styles["profile__follow-item"]}>
                                    <p className={Styles["profile__point"]}>50</p>
                                    <p className={Styles["profile__title"]}>
                                        {/* <i className="fa-solid fa-check-to-slot"></i> */}
                                        Vote
                                    </p>
                                </li>
                                <li className={Styles["profile__follow-item"]}>
                                    <p className={Styles["profile__point"]}>50</p>
                                    <p className={Styles["profile__title"]}>
                                        {/* <i className="fa-solid fa-circle-check"></i> */}
                                        {/* <i class="fa-solid fa-user-group"></i> */}
                                        Đã theo dõi
                                    </p>
                                </li>
                            </div>
                            <div className={Styles["profile__follows"]}>
                                <li className={Styles["profile__follow-item"]}>
                                    <p className={Styles["profile__point"]}>50</p>
                                    <p className={Styles["profile__title"]}>
                                        {/* <i className="fa-solid fa-coins"></i> */}
                                        NFT
                                    </p>
                                </li>
                                <li className={Styles["profile__follow-item"]}>
                                    <p className={Styles["profile__point"]}>50</p>
                                    <p className={Styles["profile__title"]}>
                                        {/* <i className="fa-solid fa-circle-plus"></i> */}
                                        Đang theo dõi
                                    </p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={Styles["profile__statistic"]}>
                    <ul className={Styles["profile__statistic-list"]}>
                        {filters.map((filter, index) => (
                            <li className={`${Styles["profile__statistic-item"]} ${Styles["hover"]} ${(active === index) ? Styles["active"] : ''}`}  onClick={(e) => {setActive(index)}} key={index}>
                                <Link href={index === 0 ? "/profile" : (index === 1 ? "/profile/library" : "/profile/statistic") }>
                                    <a className={Styles["profile__statistic-title"]}>{filter}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className={Styles["profile__statistic-create"]}>
                        <FaRegEdit className={Styles["profile__icon-edit"]} />
                        <span>Tạo bài viết</span>
                    </button>
                </div>
                <div className={`${Styles["profile__post"]} ${Styles["all"]}`}>
                    <div className={Styles["profile__library-heading"]}>
                        <h2 className={Styles["profile__library-heading-title"]}>Mục đã lưu</h2>
                        <ul className={Styles["profile__library-nav"]}>
                            <li className={`${Styles["profile__library-nav-item"]} ${activeLink === 0 ? Styles["active"] : ''}`} onClick={() => setActiveLink(1)}>
                                <Link href="/profile/library">
                                    <a>Tất cả</a>
                                </Link>
                            </li>
                            <li className={`${Styles["profile__library-nav-item"]} ${activeLink === 1 ? Styles["active"] : ''}`} onClick={() => setActiveLink(2)}>
                                <Link href="/profile/library_list">
                                    <a>Thư viện</a>
                                </Link>
                            </li>
                        </ul>
                        <button className={Styles["profile__library-heading-btn"]}>Thêm thư viện</button>
                    </div>
                    <ul className={Styles["profile__library-all-list"]}>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                        <LibraryAllItem/>
                    </ul>
                </div>
            </section>
            <Footer/>
        </Layout>
    )
}

export function LibraryAllItem() {
    return (
        <li className={Styles["profile__library-all-item"]}>
            <div className={Styles["profile__library-all-thumb"]}>
                <Image src={Thumb} alt="Thumb"/>
            </div>
            <div className={Styles["profile__library-all-title"]}>
                <Link href="/">
                    <a className={Styles["profile__library-all-link"]}>9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                </Link>
                <p className={Styles["profile__library-all-subtitle"]}>
                    Bài viết -
                    <span>Để xem sau</span>
                </p>
            </div>
        </li>
    )
}