import Document, { Html, Head, Main, NextScript } from 'next/document'
import Styled from "./Search-page.module.css"
import List from './List/ListFind';

const listItems = [
    { values: 1, clicked: true, desc: "Tất cả" },
    { values: 2, clicked: false, desc: "Tìm kiếm" },
    { values: 3, clicked: false, desc: "Truy cập" },
];

class Searching extends Document {
    constructor(props) {
        super(props);
        this.state = {
            listItems: listItems
        };
    }
    handleOnClick = e => {
        const { listItems } = this.state;
    
        const updatedItems = listItems.map(item => {
            if (item.values === e.target.value) {
                return {
                ...item,
                clicked: true
                };
            } else {
                return {
                ...item,
                clicked: false
                };
            }
        });
    
        this.setState({
            listItems: updatedItems
        });
    };
    createListItems = () => {
        const { listItems } = this.state;
            return listItems.map(item => {
            return (
                <li
                onClick={this.handleOnClick}
                className={item.clicked ? "active" : ""}
                value={item.values}
                >
                {item.desc}
                </li>
            );
        });
    };
render() {
        return (
            <div className={Styled["result"]}>
                <div className={Styled["result-content"]}>
                    <h2>Lịch Sử Tìm Kiếm</h2>
                </div>
            <hr/>

                <div className={Styled["pills"]}>
                    <ul className={Styled["pills-content"]}>
                    {this.createListItems()}
                    </ul>
                </div>
            <List/>
            </div>
        )
    }
}
export default Searching