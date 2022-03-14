import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

export default function Notifi() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/style.css"/>
            </Head>
            <div className="notifi">
                <h1 className="notifi__heading">Gợi ý theo dõi</h1>
                <div className="notifi__list">
                    <div className="notifi__item">
                        <div className="notifi__logo"><Image src={Logo}/></div>
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>@phucngu2707</span>
                        </div>
                        <p className="notifi__follow">Theo dõi</p>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__logo"><Image src={Logo}/></div>
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>@phucngu2707</span>
                        </div>
                        <p className="notifi__follow">Theo dõi</p>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__logo"><Image src={Logo}/></div>
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>@phucngu2707</span>
                        </div>
                        <p className="notifi__follow">Theo dõi</p>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__logo"><Image src={Logo}/></div>
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>@phucngu2707</span>
                        </div>
                        <p className="notifi__follow">Theo dõi</p>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__logo"><Image src={Logo}/></div>
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>@phucngu2707</span>
                        </div>
                        <p className="notifi__follow">Theo dõi</p>
                    </div>
                </div>
            </div>

            <div className="notifi ranking">
                <h1 className="notifi__heading">Xếp hạng</h1>
                <div className="notifi__list">
                    <div className="notifi__item">
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>156 bài viết</span>
                        </div>
                        <span>...</span>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>156 bài viết</span>
                        </div>
                        <span>...</span>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>156 bài viết</span>
                        </div>
                        <span>...</span>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>156 bài viết</span>
                        </div>
                        <span>...</span>
                    </div>
                    <div className="notifi__item">
                        <div className="notifi__info">
                            <p>Nguyễn Thiên Phúc</p>
                            <span>156 bài viết</span>
                        </div>
                        <span>...</span>
                    </div>
                    <p>Hiển thị thêm</p>
                </div>
            </div>
        </>
    )
}
