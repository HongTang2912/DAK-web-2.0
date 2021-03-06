import Link from 'next/link'
import Styled from './Shortcuts.module.css'
import Avatar from '../../public/images/avatar.jpg'
import Image from 'next/image'

import { FaWallet, FaTicketAlt, FaHandHoldingHeart, FaEuroSign, 
        FaUserFriends, FaGamepad,  
        } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'

export default function Shortcuts() {
    return(
        <>
        <div className={Styled.shortcut}>
            <h3 className={Styled.shortcutTitle}>Lối tắt</h3>
            <ul className={Styled.shortcutList}>
                <li className={Styled.shortcutItem}>
                    <Link href="">
                        <a className={Styled.shortcutLink}> 
                            <FaWallet className={Styled.shortcutIcon}/>
                            Ví của bạn 
                        </a>
                    </Link>
                </li>
                <li className={Styled.shortcutItem}>
                    <Link href="">
                        <a className={Styled.shortcutLink}> 
                            <FaHandHoldingHeart className={Styled.shortcutIcon}/>
                            Gây quỹ
                        </a>
                    </Link>
                </li>
                <li className={Styled.shortcutItem}>
                    <Link href="">
                        <a className={Styled.shortcutLink}> 
                            <FaTicketAlt className={Styled.shortcutIcon}/>
                            Xổ số
                        </a>
                    </Link>
                </li>
                <li className={Styled.shortcutItem}>
                    <Link href="">
                        <a className={Styled.shortcutLink}> 
                            <FaEuroSign className={Styled.shortcutIcon}/>
                            NFT
                        </a>
                    </Link>
                </li>
                <li className={Styled.shortcutItem}>
                    <Link href="">
                        <a className={Styled.shortcutLink}> 
                            <FaUserFriends className={Styled.shortcutIcon}/>
                            Bạn bè
                        </a>
                    </Link>
                </li>
                <li className={Styled.shortcutItem}>
                    <Link href="">
                        <a className={Styled.shortcutLink}> 
                            <FaGamepad className={Styled.shortcutIcon}/>
                            Trò chơi
                        </a>
                    </Link>
                </li>
                <li className={Styled.shortcutItem}>
                    <Link href="">
                        <a className={Styled.shortcutLink}> 
                            <MdGroups className={Styled.shortcutIcon}/>
                            Nhóm
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}