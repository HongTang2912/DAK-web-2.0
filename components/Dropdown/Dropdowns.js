import { state, useState } from 'react';
import Styled from './Menu.module.css';
import { HiDotsHorizontal} from 'react-icons/hi';
import { BsPencil } from 'react-icons/bs'
import { AiOutlinePlusCircle, AiOutlineDelete } from 'react-icons/ai'
import {CSSTransition, TransitionGroup} from 'react-transition-group'; 

export default function Dropdown() {
    return (
        <>
            <div>
                <DropIcon icon={<HiDotsHorizontal/>}>
                    <DropdownMenu/>
                </DropIcon>
            </div>
        </>
    )
}

export function DropdownMenu() {
    function DropdownItems(props) {
        return (
            <>
                <a href="#" className={Styled.menu__items}>
                    <span className={Styled.icon__items}>{props.leftIcon}</span>
                    {props.children}
                </a>
            </>
        )
    }

    return (
        <>
            <div className={Styled.dropdown}>
                    <DropdownItems
                    leftIcon={<AiOutlinePlusCircle/>}>
                        <p>Create</p>
                    </DropdownItems>

                    <DropdownItems
                    leftIcon={<BsPencil/>}>
                        <p>Edit</p>
                    </DropdownItems>

                    <DropdownItems
                    leftIcon={<AiOutlineDelete/>}>
                        <p>Delete</p>
                    </DropdownItems>
            </div>
        </>
    )
}

export function DropIcon(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <li className={Styled.button__dropdown__items}>
                <span className={Styled.icon__button} onClick={() => setOpen(!open)}>
                    {props.icon}
                </span>
                {open && props.children}
            </li>
        </>
    )
}
