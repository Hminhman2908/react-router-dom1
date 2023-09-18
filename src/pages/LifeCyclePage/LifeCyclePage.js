import React, { Component } from 'react'

export default class LifeCyclePage extends Component {
    state = {
        number: 1,
    }
    componentDidMount() {
        console.log("Did mount")
    }
    handleIncrease = () => this.setState({ number: this.state.number + 1 })
    handleDecrease = () => this.setState({ number: this.state.number - 1 })
    render() {
        console.log("render");
        return (
            <div className='container text-center'>
                <h2 className='display-4 text-warning'> LifeCyclePage</h2>
                <button onClick={this.handleDecrease} className='btn btn-dark'>-</button>
                <strong className='display-4 mx-5 text-success'>{this.state.number}</strong>
                <button onClick={this.handleIncrease} className='btn btn-dark'>+</button>
            </div>
        )
    }
}
