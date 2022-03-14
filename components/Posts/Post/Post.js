import Image from 'next/image';
import Styles from './Post.module.css';
import Logo from '../../public/images/Logo.png';

export default function Post() {
    return (
        <>
            <div className={Styles.profile__user__post}>
                <form action="" className={Styles.profile__form__control}>
                    <div className={Styles.profile__user__post__top}>
                        <div className={Styles.profile__user__avatar}>
                            <Image src={Logo} alt="Avatar"/>
                        </div>
                        <textarea type="text" className={Styles.profile__user__input} placeholder="Hãy nhập nội dung"></textarea>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className={Styles.profile__user__post__bottom}>
                        <select className={Styles.profile__category__list} name="category">
                            <option value="Danh mục">Danh mục</option>
                            <option value="Thú Cưng">Thú Cưng</option>
                            <option value="Phim hoạt hình">Phim hoạt hình</option>
                            <option value="Nghệ thuật">Nghệ thuật</option>
                            <option value="Ô tô">Ô tô</option>
                            <option value="Làm đẹp">Làm đẹp</option>
                            <option value="Giải trí">Giải trí</option>
                            <option value="Phim">Phim</option>
                        </select>
                        <div className={Styles.profile__user__private}>
                            <i className="fas fa-unlock-alt"></i>
                            Riêng tư
                        </div>
                        <button className={Styles.profile__user__btn}>Đăng</button>
                    </div>
                </form>
            </div>
        </>
    )
}
