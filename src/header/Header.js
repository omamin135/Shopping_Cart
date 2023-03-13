import "./Header.css";

import bag from "../assets/bag.svg";
import homepage from "../assets/homepage.svg";
import shoppingcart from "../assets/shoppingcart.svg";
import Github from "./GithubMark"

import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";


class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <header className="page-header">
                <Logo></Logo>
                <ul className="header-links">
                    <li>
                        <PageLink pageName="Home Page" img={homepage}></PageLink>
                    </li>
                    <li>
                        <PageLink pageName="Shop" img={bag}></PageLink>
                    </li>
                    <li>
                        <PageLink pageName="Cart" img={shoppingcart}></PageLink>
                    </li>
                </ul>
                <Github name="Om Amin"></Github>
            </header>
        );
    }
}

class PageLink extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="page-link">
                <p className="page-name">{this.props.pageName}</p>
                <img className="page-img" src={this.props.img}></img>
                
            </div>
        );
    }
}

class Logo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="logo-container">
                <h1 className="logo">Color Cubes</h1>
            </div>
        );
    }
}


export default Header;