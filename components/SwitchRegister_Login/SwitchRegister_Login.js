import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import Logo from "../../public/images/Logo.png";


export default function Register() {
    return(
        <>
            <Layout/>
            <Head>
                <title>DAK - Đăng ký</title>
                <link rel="stylesheet" href="css/style.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <div className="form__group">
                <div className="form__container">
                    <div className="form__group-heading">
                        <h2>DAKSHOW - Đăng ký</h2>
                        <p>Chào mừng bạn đến với DAK!</p>
                        <span>Tham gia ngay để kết bạn mới, tạo nhóm, thêm ảnh và hơn thế nữa.</span>
                    </div>
                    <form action="" className="form__control register">
                        {/* <div className="form__control-left">
                            <Image src={Logo} alt="Logo"/>
                            <p className="form__control-create">
                                Đã có tài khoản 
                                <span>
                                    <Link href="/login">
                                        <a> Đăng nhập</a>
                                    </Link>
                                </span>
                            </p>
                        </div>
                        <div className="form__control-right">
                            <div className="login__form">
                                <input type="text" id="fullName" className="form__control-input" placeholder="Họ và tên"/>
                                <input type="text" id="email" className="form__control-input" placeholder="Email"/>
                                <input type="password" id="password" className="form__control-input" placeholder="Mật khẩu"/>
                                <input type="password" id="confirmPassword" className="form__control-input" placeholder="Nhập lại mật khẩu"/>
                                <input type="text" id="username" className="form__control-input" placeholder="Tên tài khoản"/>
                                <input type="text" id="birthDay" className="form__control-input" placeholder="Ngày sinh"/>
                                <p className="form__control-rules">Bằng cách nhấp vào tạo tài khoản, bạn đồng ý với Các điều khoản và điều kiện.</p>
                                <input type="checkbox" id="policy" />
                                <label htmlFor="policy" className="form__control-policy">Tôi xác nhận đồng ý với trang web của bạn <span>Các điều khoản và điều kiện và Chính sách bảo mật.</span></label>
                                <input type="submit" className="form__control-input" value="Đăng ký"/>
                            </div >
                           
                        </div> */}
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}