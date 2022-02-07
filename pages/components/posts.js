import React, {useState} from 'react';
import Styled from '/styles/Home.module.css';
import Image from 'next/image';
import ReactLogo from '../../public/react.png';
import { AiFillHeart, AiFillEye} from 'react-icons/ai';
import {BiCommentDetail} from 'react-icons/bi';
import {TiArrowForwardOutline} from 'react-icons/ti';
import { IoSend } from 'react-icons/io5';
import Comment from './comments';
import styled from 'styled-components';


export default function posts({ videoSrc, title, comments }) {

    const Iframe = styled.iframe`
        border:none;
        overFlow:hidden;
    `

    const [isLike, setLike] = useState(false) 

    const [isDropped, setDrop] = useState(false)

    const [hasFilled, setFilled] = useState("")

    const [comment_lines, setComments] = useState(comments)

    const handleLikeEvent = () => {
        setLike(prev => !prev);
    }

    const handleDropComment = () => {
        setDrop(!isDropped);
    }

    const handleFilled = (e) => {
        setFilled(e.target.value)
    }

    const handleSetComments = () => {

        var re1 = new RegExp("abc");

        const a_comment = {
            img: ReactLogo, 
            name: 'Tăng Chấn Hồng', 
            comment_line: hasFilled, 
            likes: '0', 
            time: 'Mới đây'
        }
        setComments(prev => [...prev, a_comment])
        setDrop(true);
    }

    const handleKeyDown = (e) => {

        const a_comment = {
            img: ReactLogo, 
            name: 'Tăng Chấn Hồng', 
            comment_line: hasFilled, 
            likes: '0', 
            time: 'Mới đây'
        }

        if (e.key === 'Enter') {
            setComments(prev => [...prev, a_comment])
            setDrop(true);
        }
    }
    
    return <>
        <div className={Styled.main}>
            <div className={Styled.post}>
                <div className={Styled["user-info"]}>
                    <div>
                        <Image 
                            className={`${Styled.avatar} ${Styled["noti-icon-link"]}`}
                            src={ReactLogo} 
                            alt="react-logo"
                            width={56}
                            height={56}
                        />
                    </div>
                    <div className={Styled["activities"]}>
                        <strong>Nguyễn Hoài Thương</strong>
                        <small>đã thêm 10 ảnh mới</small>
                        <br/>
                        <small>29 tháng 12 lúc 16h00 </small>
                    </div>
                    
                </div> 
                <div className={Styled["toggle"]}>
                    ...
                </div>
                <div className={Styled["post-title"]}>
                    <p className={Styled.para}>
                        { title }
                    </p>
                </div>

                <div className={Styled.media}>
                    { videoSrc }
                </div>

                <div className={Styled.interactors}>
                    <div className={Styled["interact-icons"]}>
                        <AiFillHeart onClick={handleLikeEvent} color={isLike ? "red" : null} className={Styled["icon-heart"]}/>
                        <small>{isLike ? 189 : 188}</small>
                        <BiCommentDetail onClick={handleDropComment} color={isDropped ? "blue" : null} className={Styled["icon-comment"]}/>
                        <small>{comment_lines.length}</small>
                        <TiArrowForwardOutline/>
                    </div>
                    <div className={Styled.views}>
                        <AiFillEye/>
                        <small>2842</small>
                    </div>
                </div> 

                <div className={isDropped ? Styled["comment-field"] : Styled["d-none"]}>
                    {   
                        comment_lines.map(comment => (
                            <Comment
                                img={comment.img}
                                name={comment.name}
                                comment_line={comment.comment_line}
                                likes={comment.likes}
                                time={comment.time}
                            />
                        ))
                    }
                </div>
                <div className={Styled["input-field"]}>

                    <Image 
                        className={`${Styled.avatar} ${Styled["noti-icon-link"]}`}
                        src={ReactLogo} 
                        alt="react-logo"
                        width={56}
                        height={56}
                    />

                    <input placeHolder="Say something..." onKeyDown={hasFilled.match(/[^\s]/g)!=null ? handleKeyDown : null} className={Styled["comment-input"]} onChange={handleFilled} type="text"/>
                    <IoSend className={Styled["post-icon"]} color={hasFilled.match(/[^\s]/g)==null ? "#e5e5e5" : null} onClick={hasFilled.match(/[^\s]/g)!=null ? handleSetComments : null}/>
                </div>
            </div>
        </div>
    </>;
}
