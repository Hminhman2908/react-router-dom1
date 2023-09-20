import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {
    myCountDown;
    componentDidMount() {
        console.log("Thôi nôi component con")
        // setTimeout(() => {
        //     console.log("1s")
        // }, 1000);
        // Delay 1 lần
        let timmer = 30
        this.myCountDown = setInterval(() => {
            timmer--
            // console.log(timmer)
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.myCountDown)
        console.log("Đăng xuất component con")
    }
    render() {
        console.log("render con thành công")
        return (
            < div className='p-5 m-3 bg-warning text-white' > ChildComponent</ div>
        )
    }
}
