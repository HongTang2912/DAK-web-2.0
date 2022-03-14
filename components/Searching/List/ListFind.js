import { useState } from "react";
import { BsXLg } from "react-icons/bs"
import Lists from "./ListFind.module.css"
import Image from 'next/image'

const List = () => {
    const defaultList = [
        { name: "ItemOne" },
        { name: "ItemTwo" },
        { name: "ItemThree" }
    ];

    const [list, updateList] = useState(defaultList);

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
        updateList(list.filter(item => item.name !== name));
    };

    return (
        <div>
            {list.map(item => {
            return (
                <>
                    <div className={Lists["lists"]}>
                        <div className={Lists["list-items"]}>
                            <div className={Lists["list-pictures"]}>
                                <Image src={'/images/bg.png'} alt='picture-profile' width={60} height={60}/>
                            </div>
                                <span>{item.name}</span>
                        </div>
                        <span>
                            <BsXLg  name={item.name} onClick={handleRemoveItem}/>
                        </span>
                    </div>
                </>
            );
            })}
        </div>
    );
};

export default List