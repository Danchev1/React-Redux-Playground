import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, errInfo) => {
        this.setState({ hasError: true, errorMessage: error });
    };
    render () {
        if(this.state.hasError) {
            return <h1>Big mistake, something went wrong, the error is: { this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary