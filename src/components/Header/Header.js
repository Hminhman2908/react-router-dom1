import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {

  routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/life-cycle",
      name: "LifeCycle",
    },
  ]

  render() {
    return (
      <div>
        {this.routes.map(({ path, name }, index) => {
          return <NavLink className="btn btn-info mx-3 mt-3" to={path} key={index}>
            {name}
          </NavLink>
        })}
      </div>
    );
  }
}
