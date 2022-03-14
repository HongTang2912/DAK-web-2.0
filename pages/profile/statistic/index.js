import Head from "next/head";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import Layout from "../../../components/Layout/Layout";
import Thumb from "../../../public/images/javascript.jpg";
import Link from "next/link";
import { useState } from "react";
import Background from "../../../public/images/bg.png";
import Dak from "../../../public/images/dak.png";
import Chart from "../../../public/images/chart.png";
import Styles from "../../../styles/Profile.module.css";
import {FaCheck, FaFacebookMessenger, FaPlusCircle, FaRegEdit, FaCheckCircle} from "react-icons/fa";

export default function Profile() {
    const [active, setActive] = useState(2);

    const filters = [
        'Bài viết',
        'Thư viện',
        'Thống kê'
    ]
    
    return(
        <Layout>
            <Head>
                <title>DAK - Profile</title>
                <link rel="stylesheet" href="css/profile/profile.css"></link>
                <link rel="stylesheet" href="css/profile/profile-responsive.css"></link>
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
                <div className={Styles["profile__statistic-content"]}>
                    <div className={Styles["profile__statistic-day"]}>
                        <h2 className={Styles["profile__statistic-heading"]}>Hoạt động trong 24 giờ</h2>
                        <h3 className={Styles["profile__statistic-sub-heading"]}>Điểm</h3>
                        <div className={Styles["profile__statistic-action-list"]}>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                        </div>
                        <div className={Styles["profile__statistic-chart"]}>
                            <h3 className={Styles["profile__statistic-sub-heading"]}>Biểu đồ hoạt động</h3>
                            <div className={Styles["profile__statistic-chart-img"]}>
                                <Image src={Chart} alt="Chart"/>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["profile__statistic-day"]}>
                        <h2 className={Styles["profile__statistic-heading"]}>Hoạt động từ các bài đăng của bạn</h2>
                        <h3 className={Styles["profile__statistic-sub-heading"]}>Xem hàng đầu</h3>
                        <div className={Styles["profile__statistic-chart-img"]}>
                            <Image src={Chart} alt="Chart"/>
                        </div>
                        <div className={Styles["profile__statistic-chart"]}>
                            <h3 className={Styles["profile__statistic-sub-heading"]}>Bài viết cá nhân</h3>
                            <div className={Styles["profile__statistic-chart-img"]}>
                                <Image src={Chart} alt="Chart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Layout>
    )
}

export function ActionItem() {
    return (
        <div className={Styles["profile__statistic-action-item"]}>
            <p className={Styles["profile__statistic-action-title"]}>Tổng số điểm nhận được</p>
            <p className={Styles["profile__statistic-action-quantity"]}>50</p>
            <p className={Styles["profile__statistic-action-point"]}>+100 Điểm</p>
        </div>
    )
}