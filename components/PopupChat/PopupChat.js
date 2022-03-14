import Styles from "./PopupChat.module.css";
import {useState} from 'react';
import { FaSearch, FaEllipsisH } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../../public/images/Image-001.jpg";
import Viewer from "../../public/images/dak.png";

export default function PopupChat() {
   
    const [chatList, setChatList] = useState([]);
    
    const handleChatList = (index) => {
        setChatList([...chatList, index]);
        console.log(chatList)
    }
    
    const chatInfo = [
        {
            nickname: "Nguyễn Văn A",
        },
        {
            nickname: "Nguyễn Văn B",
        },
        {
            nickname: "Nguyễn Văn C",
        },
        {
            nickname: "Nguyễn Văn D",
        },
        {
            nickname: "Nguyễn Văn E",
        },
        {
            nickname: "Nguyễn Văn F",
        },
        {
            nickname: "Nguyễn Văn G",
        },
        {
            nickname: "Nguyễn Văn H",
        },
        {
            nickname: "Nguyễn Văn I",
        }
    ]
    return (
        <>
            <div className={`${Styles["popupchat"]}`}>
                <div className={Styles["popupchat__heading"]}>
                    <h3 className={Styles["popupchat__title"]}>Tin nhắn</h3>
                    <form className={Styles["popupchat__form-control"]}>
                        <input className={Styles["popupchat__form-input"]} placeholder="Nhập tên cuộc trò chuyện" type="text"/>
                        <FaSearch className={Styles["popupchat__form-icon"]}/>
                    </form>
                </div>
                <ul className={Styles["popupchat__body-list"]}>
                    {chatInfo.map((info, index) => (
                       <div onClick={() => {handleChatList(index)}}>
                           
                            <PopupChatItem 
                                
                                key={index} 
                                nickName={info.nickname} 
                                index={index}
                            ></PopupChatItem>
                            
                       </div>
                    ))}
                    
                </ul>
                <div className={Styles["popupchat__footer"]}>
                    <p className={Styles["popupchat__footer-title"]}>
                        <Link href="/chat">
                            <a>Xem tất cả ở Tin nhắn</a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export function PopupChatItem({nickName, index}) {
    return (
        <>
            <li className={`${Styles["popupchat__body-item"]} chat-${index}`}
                       
            >
                <div className={Styles["popupchat__body-item-avatar"]}>
                    <Image src={Avatar} alt="Avatar"/>
                </div>
                <div className={Styles["popupchat__body-item-content"]}>
                    <h3 className={Styles["popupchat__body-item-name"]}>
                        {nickName}
                        <span className={Styles["popupchat__body-item-time"]}>1 ngày</span>
                    </h3>
                    <p className={Styles["popupchat__body-item-chat"]}>
                        Việc chăm sóc khách hàng cũ cũng là một phần không thể thiếu trong chiến dịch marketing của các doanh nghiệp, của hàng.
                    </p>
                </div>
                <div className={Styles["popupchat__body-item-viewer"]}>
                    <Image src={Viewer} alt="Avatar"/>
                </div>
                <FaEllipsisH className={Styles["popupchat__icon-more-option"]}/>
            </li>
        </>
    )
}