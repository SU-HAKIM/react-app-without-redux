import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return <p>Something Went Wrong</p>
        }
        return this.props.children
    }
}