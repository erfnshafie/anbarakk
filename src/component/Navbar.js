import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import styles from "./Navbar.module.css"

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <a class="navbar-brand">انبارک</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link">کل محصولات 10</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >محصولات مدیریت شده 10</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">موجودی کم 0</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">ناموجود 0</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
