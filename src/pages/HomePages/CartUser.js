import React, { Component } from 'react'

export default class CartUser extends Component {
    render() {
        let { taiKhoan, hoTen, email, soDT, matKhau, maLoaiNguoiDung } = this.props.user
        return (
            <div className='col-2 p-1'>
                <div className='container'>
                    <span className={maLoaiNguoiDung == "KhachHang" ? "text-dark" : "text-danger"}>
                        {hoTen.length > 10 ? hoTen.slice(0, 10) + "..." : hoTen}
                    </span>
                </div>
            </div>
        )
    }
}
