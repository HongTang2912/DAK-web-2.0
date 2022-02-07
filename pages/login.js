import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Layout from "../../components/Layout";
import Logo from "/public/react.png";
import Styled from "/styles/UserLogin.module.css"

export default function Login() {
    return(
        <>
            <Head>
                <title>DAK - Đăng nhập</title>
                {/* <link rel="stylesheet" href="css/style.css"/> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <div className={Styled["form__group"]}>
                <div className={Styled["form__container"]}>
                    <div className={Styled["form__group-heading"]}>
                        <h2>DAKSHOW - Đăng nhập</h2>
                        <p>Chào mừng bạn đến với DAK!</p>
                        <span>Tham gia ngay để kết bạn mới, tạo nhóm, thêm ảnh và hơn thế nữa.</span>
                    </div>
                    <form action="" className={Styled["form__control"]}>
                        <div className={Styled["form__control-left"]}>
                            <input type="text" id="email" className={Styled["form__control-input"]} placeholder="Email"/>
                            <input type="password" id="password" className={Styled["form__control-input"]} placeholder="Mật khẩu"/>
                            <p className={Styled["form__control-forget"]}>Quên mật khẩu</p>
                            <input type="submit" className={Styled["form__control-input"]} value="Đăng nhập"/>
                            <p className={Styled["form__control-create"]}>
                                Chưa có tài khoản? 
                                <span>
                                    <Link href="/register">
                                        <a> Đăng ký</a>
                                    </Link>
                                </span>
                            </p>
                        </div>
                        <div className={Styled["form__control-right"]}>
                            <div className={Styled["form__control-item"]}>
                                <i className={Styled["fab fa-google"]}></i>
                                Đăng nhập với Google
                            </div>
                            <div className={Styled["form__control-item"]}>
                                <i className={Styled["fab fa-facebook-f"]}></i>
                                Đăng nhập với Facebook
                            </div>
                            <div className={Styled["form__control-item"]}>
                                <i className={Styled["fab fa-twitter"]}></i>
                                Đăng nhập với Twitter
                            </div>
                            <div className={Styled["form__control-item"]}>
                                <i className={Styled["fab fa-youtube"]}></i>
                                Đăng nhập với Youtube
                            </div>
                            <div className={Styled["form__control-item"]}>
                                <i className={Styled["fab fa-tiktok"]}></i>
                                Đăng nhập với Tiktok
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
