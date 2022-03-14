import Styles from "./Features.module.css";

export default function Features() {
    return (
        <>
            <div className={Styles.features}>
                <div className={Styles.body__features}>
                    <div className={Styles.birthday__box}>
                        <h2 className={Styles.heading__box}>Sinh nhật</h2>
                    </div>
                    <div className={Styles.add__friend__box}>
                    <h2 className={Styles.heading__box}>Gợi ý kết bạn</h2>
                    </div>
                </div>
            </div>
        </>
    )
}