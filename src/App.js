import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table2 from  './component/Table2';
import Cash from './component/Cash';
import Navbar from "./component/Navbar"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Alert } from 'react-bootstrap';
import RightBox from './component/RightBox';
import styles from "./App.css"
import Report from './component/Report';
import ErrorBoundary from './component/ErrorBoundary';


class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" component={<RightBox />}>
              <Route path='table' conponent={<Table2 />} className={styles.il} />
              <Route path="cash" component={<Cash />} className={styles.il} />
              <Route path="report" component={<Report />} className={styles.il} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;