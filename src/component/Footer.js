import React, { Component } from 'react';
import Styles from  '../component/Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                    <Container>
                    <div className={Styles.container}>

                        <div className={Styles.part1}>
                        <img draggable="false"  alt="⭐" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg " width={28} />
                        <img draggable="false"  alt="⭐" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg"  width={28}   />
                        <img draggable="false"  alt="⭐" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg"  width={28}   />
                        <img draggable="false"  alt="⭐" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg"  width={28}   />
                        <img draggable="false"  alt="⭐" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg"  width={28}   />
                        </div>


                        <p className={Styles.part2}>
					            در صورتی که از انبارک راضی هستید می‌توانید برای حمایت از ما یک پنج ستاره بدهید
					                <a class="btn btn-primary" href="https://www.zhaket.com/web/wp-anbarak-plugin" target="_blank">بزن بریم!</a>
				                        </p>

                    </div>

                    <div className={Styles.container1}>
                    سپاسگذاریم که از انبارک استفاده میکنید

                    </div>



                    <div class="text-center"><code>Anbaarak V1.2.2</code></div> 






                </Container>














            </div>
        );
    }
}

export default Footer;