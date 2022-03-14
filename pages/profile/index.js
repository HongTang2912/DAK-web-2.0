import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import PostPicture1, { PostPicture2, PostPicture3, PostPicture4 } from "../../components/PostPicture/PostPicture";
import PostVideo1, { PostVideo2 } from "../../components/PostVideo/PostVideo";
import Link from "next/link";
import { useState } from "react";
import Background from "../../public/images/bg.png";
import Dak from "../../public/images/dak.png";
import Styles from "../../styles/Profile.module.css";
import {FaCheck, FaFacebookMessenger, FaPlusCircle, FaRegEdit, FaCheckCircle} from "react-icons/fa";
import PopupStatistic from '../../components/PopupStatistic/PopupStatistic'
import {GrTicket} from 'react-icons/gr'
import {AiOutlineEuroCircle, AiOutlinePlusCircle} from 'react-icons/ai'
import {RiUserFollowFill} from 'react-icons/ri'


export default function Profile() {
    const [active, setActive] = useState(0);
    const filters = [
        'Bài viết',
        'Thư viện',
        'Thống kê'
    ]

    const [showPopupStatistic, setShowPopupStatistic] = useState(false)
    const openStatistic = () => {
        setShowPopupStatistic(prev => !prev)
    }
    
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
                <div className={Styles.themeProfile}>
                    <div className={Styles.profileArea}>
                        <div className={Styles.profileImageBackground}>
                            <Image src={Background} alt="Ảnh bìa"/>
                        </div>
                        <div className={Styles.infoProfile}>
                            <div className={Styles.avatarProfile}>
                                <Image src={Dak} alt="Avatar" />
                            </div>
                            <div className={Styles.textProfile}>
                                <div className={Styles.mainInfo}>
                                    <h1 className={Styles.nameUser}>Nguyễn Thiên Phúc <FaCheck /></h1> 
                                    <ul className={Styles.listStatistic} onClick={openStatistic}>
                                        <li className={Styles.statisticItem}>
                                            <p className={Styles.iconVote}>Vote</p>
                                            <span className={Styles.quantity}>500</span>    
                                        </li> 
                                        <li className={Styles.statisticItem}>
                                            <AiOutlinePlusCircle />
                                            <span className={Styles.quantity}>500</span>
                                        </li> 
                                        <li className={Styles.statisticItem}>
                                            <AiOutlineEuroCircle />
                                            <span className={Styles.quantity}>500</span>
                                        </li>  
                                        <li className={Styles.statisticItem}>
                                            <RiUserFollowFill />
                                            <span className={Styles.quantity}>500</span>
                                        </li> 
                                    </ul>   
                                    <p className={Styles.captionUser}>Hi, mình là Phúc. Nice to meet you.  
                                        Hi, mình là Phúc. Nice to meet you. Hi, mình là Phúc. Nice to meet you.
                                    </p>  
                                    <button className={Styles.btnTaoTin}>
                                        <AiOutlinePlusCircle/> Tạo tin 
                                    </button>                              
                                    {/* <p className={Styles.captionUser}>Hi, mình là Phúc. Nice to meet you.  
                                        Hi, mình là Phúc. Nice to meet you. Hi, mình là Phúc. Nice to meet you.
                                    </p>
                                    <div className={Styles.statisticInfo}
                                            onClick={openStatistic}
                                    >
                                        <p className={Styles.contentSatistic}> Vote  
                                            <span className={Styles.quantitySatistic}>2000</span>    
                                        </p>
                                        <p className={Styles.contentSatistic}> NFT 
                                            <span className={Styles.quantitySatistic}>1500</span>    
                                        </p>
                                        <p className={Styles.contentSatistic}> Following  
                                            <span className={Styles.quantitySatistic}>100</span>    
                                        </p>
                                        <p className={Styles.contentSatistic}> Follower 
                                            <span className={Styles.quantitySatistic}>500</span>    
                                        </p>
                                    </div> */}
                                </div>
                                {/* <ul className={Styles.profile__action}>
                                    <li className={Styles.profile__item}>
                                        <i className="fa-brands fa-facebook-messenger"></i>
                                        <span className={Styles.profile__item_icon}>Messenger</span>
                                    </li>
                                    <li className={Styles.profile__item}>
                                        <i className="fa-solid fa-circle-plus"></i>
                                        <span className={Styles.profile__item_icon}>Follow</span>
                                    </li>                                
                                </ul>                            */}
                            </div>
                        </div>
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
                <div className={Styles["profile__post"]}>
                    <div className={Styles["profile__post-left"]}>
                        <PostPicture1/>
                        <PostVideo1/>
                        <PostPicture1/>
                    </div>
                    <div className={Styles["profile__post-right"]}>
                        <PostPicture1/>
                        <PostPicture1/>
                        <PostVideo2/>
                    </div>
                </div>
            </section>
            <Footer/>
        <PopupStatistic showModal={showPopupStatistic} setShowModal={setShowPopupStatistic}/> 

        </Layout>
        
    )
}