import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.statw = {
            error: false,
            errorMessage: "404 Error"
        }
    }
    componentDidCatch(error, info) {
        this.setState({
            error: true,
            errorMessage: error
        })
    }


    render() {
        if (this.state.error) {
            return <p>{this.state.errorMessage}</p>
        } else {
            return this.state.children
        }
    }
}

export default ErrorBoundary;
