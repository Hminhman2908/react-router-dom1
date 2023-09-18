import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";

export default class LoginPages extends Component {
  state = {
    account: "",
    password: "",
  };
  handleChangeForm = (e) => {
    let { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: {
        taiKhoan: this.state.account,
        matKhau: this.state.password,
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg",
      },
    })
      .then((res) => {
        console.log(res);
        message.success("Đăng nhập thành công");
        setTimeout(() => {
          // delay 3s trước khi chuyễn trang
          window.location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại");
      });
  };
  render() {
    return (
      <div className="container">
        <div style={{ width: 300, marginTop: "50px" }} >
          <div className="form-group">
            <label>Account</label>
            <input
              type="text"
              className="form-control"
              name="account"
              onChange={this.handleChangeForm}
              value={this.state.account}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChangeForm}
              value={this.state.password}
            />
          </div>
          <button onClick={this.handleLogin} className="btn btn-warning">
            Login
          </button>
        </div>
      </div>
    );
  }
}

// VD
var user = {
  name: "alice",
  age: 2,
};

let key = "name";
user[key] = "bob";
