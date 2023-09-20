import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCyclePage extends Component {
    state = {
        number: 1,
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState)
        // default là return true
        if (nextState.number == 5) {
            return false
            // number là 5 thì không render lại
        } else {
            return true
        }
    }
    componentDidMount() {
        console.log("Did mount")
        // dùng để gọi API khi user load trang
    }
    handleIncrease = () => this.setState({ number: this.state.number + 1 })
    handleDecrease = () => this.setState({ number: this.state.number - 1 })
    render() {
        console.log("render cha thành công");
        return (
            <div className='container text-center'>
                <h2 className='display-4 text-warning'> LifeCyclePage</h2>
                <button onClick={this.handleDecrease} className='btn btn-dark'>-</button>
                <strong className='display-4 mx-5 text-success'>{this.state.number}</strong>
                <button onClick={this.handleIncrease} className='btn btn-dark'>+</button>
                <ChildComponent />
            </div>
        )
    }
    componentDidUpdate() {
        console.log("Chạy khi render thành công")
    }
}
