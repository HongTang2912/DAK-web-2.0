import React, { useState, useRef } from 'react';
import Sup from '../SupNotification/Sup.js';

// import Link from 'next/link';
import data_notification from './data.js';
import Styles from './Notification.module.css';
import {BsThreeDots} from 'react-icons/bs'
import Image from 'next/image';
import Square from '../../public/images/testAnhVuong.jpg'



export default function Notification({showMenuNoti, setShowMenuNoti}) {
    // Handle click outside to close menu setting
    const menuNotiRef = useRef();
    const closeMenuNoti = e => {
        if (menuNotiRef.current === e.target) {
            setShowMenuNoti(false)
        }
    };

    return (
        <>   
        <div className={Styles.overlayDropdownNoti} ref={menuNotiRef} onClick={closeMenuNoti}>
            <div className={Styles.dropDownNoti}>
                <div className={Styles.Text__Notification}>
                    <h2 className={Styles.Text__h2__Notification}> Thông báo </h2>
                    {/* icon 3 chấm  */}
                    <BsThreeDots />
                </div>
                <div className={Styles.info__Noti}>
                    <ul className={Styles.list__Noti}>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>
                        

                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên  Phúc <span className={Styles.content__Noti}>
                                            Đã chấp nhận lời mời kết bạn 
                                            Đã chấp nhận lời mời kết bạn 
                                            Đã chấp nhận lời mời kết bạn 
                                        </span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                            </div>                                                     
                        </li>


                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>

                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>

                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>

                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>

                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>


                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                            </div>                                                     
                        </li>


                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                            </div>                                                     
                        </li>


                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>


                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <div className={Styles.box__vatar__Nofi}>
                                    <Image src={Square} />
                                </div>
                            </div>
                            <div className={Styles.area__Noti}>
                                <div className={Styles.box__content_Noti}>
                                    <p className={Styles.username__Noti}>
                                        Nguyễn Thiên Phúc <span className={Styles.content__Noti}>đã flow bạn. Hãy follow lại</span>
                                    </p>
                                    <p className={Styles.time__Noti}>
                                        5 giờ trước
                                    </p>
                                </div>
                                <div className={Styles.box_btn}>
                                    <button className={Styles.btn}>
                                        Follow
                                    </button>
                                </div>
                            </div>                                                     
                        </li>



                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
