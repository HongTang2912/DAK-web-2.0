import Image from 'next/image';
import Styled from './FormCreatePost.module.css';
import Avatar from '../../public/images/avatar.jpg'
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

export default function FormCreatePost({showModal, setShowModal}) {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 200
        }, opacity: showModal ? 1 : 0, 
        transform: showModal ? 'translateY(0%)' : `translateY(100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    return(
        <>
        {showModal ?      
            <div className={Styled.overlayFormCreatePost} ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <div className={Styled.formCreatePost} showModal={showModal}>
                        <div className={Styled.formHeader}>
                            <h2 className={Styled.formTitle}>Tạo bài viết</h2>
                            <button className={Styled.btnGetOut} onClick={() => setShowModal(prev => !prev)}>
                                <i className="fa-solid fa-x"></i>
                            </button>
                        </div>
                        <div className={Styled.formBody}>
                            <div className={Styled.formInfoUser}>
                                <div className={Styled.imgAvatar}>
                                    <Image src={Avatar} alt=""/>
                                </div>
                                <div className={Styled.nameUser}>
                                    Thiên Phúc
                                    <form className={Styled.choosePublic}>
                                        <select name="" id="" className={Styled.listChoose}>
                                            <option value="public">Công khai</option>
                                            <option value="private">Riêng tư</option>
                                        </select>
                                    </form>
                                </div>                 
                            </div>
                            <div className={Styled.formContentArea}>
                                <form className={Styled.formContent}>
                                    <input className={Styled.inputLink} 
                                        placeholder="Any good links you want to share ...?!" >
                                    </input>
                                    <label className={Styled.inputTitle}>Caption
                                        <span className={Styled.quantityWord}>0/150</span>
                                    </label>
                                    <input className={Styled.inputContent} placeholder="@ #"/>
                                </form>
                            </div>
                            {/* <div className={Styled.copyRightArea}>
                                <p className={Styled.copyRight}>Run a copyright check </p>
                                <form action="#">
                                    <label className={Styled.switch}>
                                        <input type="checkbox" />
                                        <span className={Styled.slider}></span>
                                    </label>
                                </form>
                            </div> */}
                        </div>
                        <div className={Styled.formFooter}>
                            <button className={Styled.btnPost}>Đăng</button>
                        </div>
                    </div>
                </animated.div>
            </div> 
        : null 
        }
        </>
    );
}