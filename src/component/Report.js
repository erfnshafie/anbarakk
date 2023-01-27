import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import styles from "./Report.module.css"
import Chart from './ChartLine';
import Footer from "./Footer"

class Report extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h4 class="fw-bold" >گزارش</h4>
                    <Col xs={4} className={styles.box}>
                        <h5>آمار امروز</h5>
                        <hr />

                        <Row>
                            <Col xs={6}>
                                <p>کل فروش</p>
                                <p>فروش آنلاین</p>
                                <p>فروش آفلاین</p>
                                <p>کل مبلغ هزینه شده</p>
                            </Col>
                            <Col xs={6} className={styles.mablagh}>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} className={styles.box}>
                        <h5>آمار ماه جاری</h5>
                        <hr />

                        <Row>
                            <Col xs={6}>
                                <p>کل فروش</p>
                                <p>فروش آنلاین</p>
                                <p>فروش آفلاین</p>
                                <p>کل مبلغ هزینه شده</p>
                            </Col>
                            <Col xs={6} className={styles.mablagh}>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} className={styles.box}>
                        <h5>آمار امروز</h5>
                        <hr />

                        <Row>
                            <Col xs={6}>
                                <p>کل فروش</p>
                                <p>فروش آنلاین</p>
                                <p>فروش آفلاین</p>
                                <p>کل مبلغ هزینه شده</p>
                            </Col>
                            <Col xs={6} className={styles.mablagh}>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                                <p> 0ريال </p>
                            </Col>
                        </Row>
                    </Col>


                </Row>
                <Row>
                    <Col className={styles.box1}>
                        <h5 class="text-center pt-3">آمار خرید و فروش در ماه جاری</h5>
                        <hr />
                        <div className={styles.charts}>
                            <Chart className={styles.Charta} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Report;
