import React from 'react';
import data_Sup from './dataSup';
import Styles from './Sup.module.css'; 

export default function Sup() {
  return (
    <div className={Styles.Support__Notification}> 
        <ul className={Styles.Support__Post__ul}>
            {data_Sup.map((post) => (
            <>
                <li className={Styles.Support__Post__li} key={post._id}>
                    <img src={post.icon_sup} />
                    <span className={Styles.Support__Post__li__span}> {post.title_sup} </span>
                </li>
            </> 
            ))}  
        </ul>
    </div>
  )
}
