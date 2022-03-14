import React, {useState} from 'react';
import Styled from './Posts.module.css';
import Image from 'next/image';
import ReactLogo from '/public/images/Logo.png';
import { AiFillHeart, AiFillEye} from 'react-icons/ai';
import {BiCommentDetail} from 'react-icons/bi';
import {TiArrowForwardOutline} from 'react-icons/ti';
import {RiChatPollLine} from 'react-icons/ri'
import { IoSend } from 'react-icons/io5';
import Comment from '../Comments/Comments';

export default function posts({ videoSrc, title, comments, mode, reaction, baseInfo}) {

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
                            className={ `${Styled.avatar} ${Styled["noti-icon-link"]}` }
                            src={ReactLogo} 
                            alt="react-logo"
                            width={56}
                            height={56}
                        />
                    </div>
                    <div className={Styled["activities"]}>
                        <strong>{baseInfo.nickname}</strong>
                        <small>{baseInfo.activity}</small>
                        <br/>
                        <small>
                            {
                                (baseInfo.time > 744) ?
                                    `${parseInt(baseInfo.time/(744))} tháng trước`
                                : 
                                 (baseInfo.time > 24) ? 
                                `${parseInt(baseInfo.time/24)} ngày trước`

                                : `${baseInfo.time}h trước`
                            }
                        </small>
                    </div>
                    
                </div> 
                <div className={Styled["toggle"]}>
                    ...
                </div>
                <div className={Styled["post-title"]}>
                    <pre className={Styled.para}>
                        { title }
                    </pre>
                </div>

                <div className={Styled.media}>
                    { videoSrc }
                </div>

                <div className={Styled.interactors}>
                    <div className={Styled["interact-icons"]}>
                        <AiFillHeart onClick={handleLikeEvent} color={isLike ? "red" : null} className={Styled["icon-heart"]}/>
                        <small>{isLike ? parseInt(reaction.likes)+1 : reaction.likes}</small>
                        <BiCommentDetail onClick={handleDropComment} color={isDropped ? "blue" : null} className={Styled["icon-comment"]}/>
                        <small>{comment_lines.length}</small>
                        <TiArrowForwardOutline/>
                        <small>{reaction.shares}</small>
                        <RiChatPollLine/>
                        <small>{reaction.votes}</small>
                    </div>
                    <div className={Styled.views}>
                        <AiFillEye/>
                        <small>{reaction.views}</small>
                    </div>
                    {/* {console.log(parseInt(reaction.likes*0.5 + comment_lines.length + reaction.shares*2 + reaction.votes*4))} */}
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
                    <IoSend className={Styled["post-icon"]} color={hasFilled.match(/[^\s]/g)==null ? (mode ? "#2b2b2b" : "#e5e5e5") : null} onClick={hasFilled.match(/[^\s]/g)!=null ? handleSetComments : null}/>
                </div>
            </div>
        </div>
    </>;
}
