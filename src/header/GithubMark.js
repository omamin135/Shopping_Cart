import React, {Component} from "react";

import "./GithubMark.css";

import github from "../assets/githubmark.svg";

class Github extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <a href="https://github.com/omamin135/Shopping_Cart" target="_blank" className="github-mark">
                <div className="author">{this.props.name}</div>
                <img className="github-img" src={github}></img>
            </a>
        )
    }
}

export default Github;