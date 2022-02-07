import React, { useState } from 'react';
import Image from 'next/image';
import Styled from '/styles/Home.module.css';
import {AiFillHeart} from 'react-icons/ai';

export default function comments({ img, name, comment_line, likes, time }) {

    const [isLike, setLike] = useState(false) 

    const handleLikeEvent = () => {
        setLike(!isLike);
    }

    return <div className={Styled["comment-block"]}>
        <div className={Styled["comment"]}>
            <Image 
                className={`${Styled.avatar} ${Styled["noti-icon-link"]}`}
                src={img} 
                alt="react-logo"
                width={56}
                height={56}
            />
            <div className={Styled["comment-title"]}>
                <strong>{name}</strong>
                <br/>
                <small>{comment_line}</small>
            </div> 
           
        </div> 
        <small>
           
            <div className={Styled["interact-icons-comment"]}>
                <AiFillHeart className={Styled["icon-heart"]} onClick={handleLikeEvent} color={isLike ? "red" : null}/>
                <small>{isLike ? parseInt(likes)+1 : parseInt(likes)}</small>
                <small>Trả lời</small>
                <small>{time}</small>
            </div>
        </small>
    </div>;
}

