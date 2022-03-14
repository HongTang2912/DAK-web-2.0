import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout/Layout";
import Logo from "../../public/images/Logo.png";
export function ABC() {
    return
}
export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                {/* <Script src="../../public/js/main.js" strategy="lazyOnload" /> */}
            </Head>
            <section className="content">
                {/* Shortcuts */}
                <div className="shortcuts">
                    <h2 className="heading-box">Lối tắt</h2>
                </div>
                
                {/* Body */}
                <div className="body">
                    <div className="body__header">
                        <div className="header__list">
                            <div className="header__item active"><Link href="/"><a>Đề xuất</a></Link></div>
                            <div className="header__item"><Link href="/"><a>Đang theo dõi</a></Link></div>
                            <div className="header__item"><Link href="/"><a>Mới nhất</a></Link></div>
                            <div className="header__item"><Link href="/"><a>Bảng xếp hạng</a></Link></div>
                            <div className="header__create">
                                <Link href="/">
                                    <a>
                                        <i className="fas fa-edit"></i>
                                        Tạo bài viết
                                    </a>
                                </Link>
                            </div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="body__post">
                        <div className="body__post-info">
                            <div className="body__post-avatar">
                                <Image src={Logo} alt="Avatar" />
                            </div>
                            <div className="body__post-info-name">
                                <h3>Nguyễn Hoài Thương<span> đã thêm 10 ảnh mới</span></h3>
                                <p>29 tháng 12 lúc 16h00</p>
                            </div>
                            <span className="body__post-info-action">...</span>
                        </div>
                        <div className="body__post-main">
                            <div className="body__post-content">
                                <p>Địa điểm check in xịn xò mới toanh ở Đà Lạt nè các bác ơi 😍😍😍</p>
                                <p>🌳 Coffee Thảo Nguyên Xanh: Tổ 11, Thôn 4, Tà Nung, Đà Lạt.</p>
                                <p>📷 Minh Bảo</p>
                                <p>Thảo Nguyên Xanh bắt đầu mở cửa lại từ thứ 7 tuần này (30/10/2021)</p>
                                <p><span>#dalatreviewtattantat</span> — tại Khu du lịch - Coffee Thảo Nguyên Xanh.</p>
                            </div>
                            <div className="body__post-thumb">
                                <i className="fas fa-play"></i>
                            </div>
                            <div className="body__post-react">
                                <div className="body__post-react-left">
                                    <div className="body__post-react-like">
                                        <i className="fas fa-heart"></i>
                                        100
                                    </div>
                                    <div className="body__post-react-comment">
                                        <i className="far fa-comment-dots"></i>
                                        50
                                    </div>
                                    <div className="body__post-react-share">
                                        <i className="far fa-share-square"></i>
                                    </div>
                                </div>
                                <div className="body__post-react-right">
                                    <i className="fas fa-eye"></i> 13,5K
                                </div>
                            </div>
                            <div className="body__post-comment-list">
                                <p className="body__post-comment-more">Xem thêm bình luận</p>
                                <div className="body__post-comment-item">
                                    <div className="body__post-comment-avatar">
                                        <Image src={Logo} alt="Avatar" />
                                    </div>
                                    <div className="body__post-comment-content">
                                        <h3>Nguyễn Thiên Phúc</h3>
                                        <p>Tuyệt vời quá bạn ơi, bạn là nhất, bạn là số 1.</p>
                                        <div className="body__post-comment-react">
                                            <i className="fas fa-heart"></i> 50
                                            <span>Trả lời</span>
                                            <span>2 giờ trước</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="body__post-comment-item">
                                    <div className="body__post-comment-avatar">
                                        <Image src={Logo} alt="Avatar" />
                                    </div>
                                    <div className="body__post-comment-content">
                                        <h3>Nguyễn Thiên Phúc</h3>
                                        <p>Tuyệt vời quá bạn ơi, bạn là nhất, bạn là số 1.</p>
                                        <div className="body__post-comment-react">
                                            <i className="fas fa-heart"></i> 50
                                            <span>Trả lời</span>
                                            <span>2 giờ trước</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="body__post-comment-create">
                                    <div className="body__post-comment-avatar">
                                        <Image src={Logo} alt="Avatar" />
                                    </div>
                                    <div className="body__post-comment-input">
                                        <input type="text" placeholder="Viết bình luận ..."/>
                                        <i className="fas fa-paperclip"></i>
                                        <i className="fas fa-camera"></i>
                                        <i className="far fa-smile-beam"></i>
                                    </div>
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body__post">
                        <div className="body__post-info">
                            <div className="body__post-avatar">
                                <Image src={Logo} alt="Avatar" />
                            </div>
                            <div className="body__post-info-name">
                                <h3>Nguyễn Hoài Thương<span> đã thêm 10 ảnh mới</span></h3>
                                <p>29 tháng 12 lúc 16h00</p>
                            </div>
                            <span className="body__post-info-action">...</span>
                        </div>
                        <div className="body__post-main">
                            <div className="body__post-content">
                                <p>Địa điểm check in xịn xò mới toanh ở Đà Lạt nè các bác ơi 😍😍😍</p>
                                <p>🌳 Coffee Thảo Nguyên Xanh: Tổ 11, Thôn 4, Tà Nung, Đà Lạt.</p>
                                <p>📷 Minh Bảo</p>
                                <p>Thảo Nguyên Xanh bắt đầu mở cửa lại từ thứ 7 tuần này (30/10/2021)</p>
                                <p><span>#dalatreviewtattantat</span> — tại Khu du lịch - Coffee Thảo Nguyên Xanh.</p>
                            </div>
                            <div className="body__post-thumb">
                                <i className="fas fa-play"></i>
                            </div>
                            <div className="body__post-react">
                                <div className="body__post-react-left">
                                    <div className="body__post-react-like active">
                                        <i className="fas fa-heart"></i>
                                        100
                                    </div>
                                    <div className="body__post-react-comment">
                                        <i className="far fa-comment-dots"></i>
                                        50
                                    </div>
                                    <div className="body__post-react-share">
                                        <i className="far fa-share-square"></i>
                                    </div>
                                </div>
                                <div className="body__post-react-right">
                                    <i className="fas fa-eye"></i> 13,5K
                                </div>
                            </div>
                            <div className="body__post-comment-list">
                                <p className="body__post-comment-more">Xem thêm bình luận</p>
                                <div className="body__post-comment-item">
                                    <div className="body__post-comment-avatar">
                                        <Image src={Logo} alt="Avatar" />
                                    </div>
                                    <div className="body__post-comment-content">
                                        <h3>Nguyễn Thiên Phúc</h3>
                                        <p>Tuyệt vời quá bạn ơi, bạn là nhất, bạn là số 1.</p>
                                        <div className="body__post-comment-react">
                                            <i className="fas fa-heart"></i> 50
                                            <span>Trả lời</span>
                                            <span>2 giờ trước</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="body__post-comment-item">
                                    <div className="body__post-comment-avatar">
                                        <Image src={Logo} alt="Avatar" />
                                    </div>
                                    <div className="body__post-comment-content">
                                        <h3>Nguyễn Thiên Phúc</h3>
                                        <p>Tuyệt vời quá bạn ơi, bạn là nhất, bạn là số 1.</p>
                                        <div className="body__post-comment-react">
                                            <i className="fas fa-heart"></i> 50
                                            <span>Trả lời</span>
                                            <span>2 giờ trước</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="body__post-comment-create">
                                    <div className="body__post-comment-avatar">
                                        <Image src={Logo} alt="Avatar" />
                                    </div>
                                    <div className="body__post-comment-input">
                                        <input type="text" placeholder="Viết bình luận ..."/>
                                        <i className="fas fa-paperclip"></i>
                                        <i className="fas fa-camera"></i>
                                        <i className="far fa-smile-beam"></i>
                                    </div>
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Schedules */}
                <div className="schedules">
                    <div className="search__box">
                        <input type="text" className="search__box-input" placeholder="Nhập từ khóa..."/>
                        <Link href="/"><a><i className="fas fa-search"></i></a></Link>
                    </div>
                    <div className="birthday__box">
                        <h2 className="heading-box">Sinh nhật</h2>
                    </div>
                    <div className="add-friend__box">
                        <h2 className="heading-box">Gợi ý kết bạn</h2>
                    </div>
                </div>
            </section>
        </Layout>
    )
}