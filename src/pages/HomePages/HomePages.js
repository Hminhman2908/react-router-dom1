import axios from "axios";
import React, { Component } from "react";
import {
  // TOKEN_CYBER,
  configHeaders
} from "../../api/config";
import CartUser from "./CartUser";
import { RingLoader } from "react-spinners";

export default class HomePages extends Component {
  state = {
    userArr: [],
    isLoading: false
  }
  // render ra danh sách người dùng dựa vào api:
  // https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00",
      method: "GET",
      headers: configHeaders(),
    }).then((res) => {
      console.log(res)
      this.setState({ userArr: res.data.content, isLoading: false })
    }).catch((err) => {
      console.log(err)
    })
  }
  renderUserList = () => {
    return this.state.userArr.map((item, index) => {
      return <CartUser user={item} key={index} />
    })
  }
  render() {
    return <div className="container" >
      {this.state.isLoading && <RingLoader size={200} color="#ff006e" speedMultiplier={2} />}
      <div className="row">{this.renderUserList()}</div>;
    </div>
  }
}
