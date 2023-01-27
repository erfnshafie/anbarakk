import React, { Component } from 'react';
import styles from "./RightBox.module.css"
import { Outlet, Link } from "react-router-dom";

class RightBox extends Component {
    render() {
        return (
            <>
            <div className={styles.container}>
                    <button class="bg-light">
                        <Link to="table">
                        <img src="https://cdn-icons-png.flaticon.com/512/4989/4989753.png" className={styles.Img1} />
                        <p>محصولات</p>
                        </Link>
                    </button>

                    <button class="bg-light">
                        <Link to="cash">
                            <img src="https://cdn-icons-png.flaticon.com/512/3037/3037156.png" className={styles.Img1} />
                            <p>هزینه ها</p>
                        </Link>
                    </button>

                
                <button class="bg-light">
                    <Link to="report">
                        <img src="https://cdn-icons-png.flaticon.com/512/2567/2567943.png" className={styles.Img1} />
                        <p>گزارش ها</p>
                    </Link> 
                </button>
                </div>
                <Outlet />
            </>
        );
    }
}

export default RightBox;
