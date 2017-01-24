// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link } from 'react-router';


class SideNavBar extends Component{
    handleAppState(){
        console.log('whoa');
    }
    openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("root").style.marginLeft = "250px";
    document.getElementById("root").style.marginRight = "-250px";
    }
    closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("root").style.marginLeft = "0";
    document.getElementById("root").style.marginRight = "0";
    }

    render(){
        return(


            <div className="col-sm-3">
                <a className="menu" onClick={this.openNav}>Menu</a>
                <nav className="sideNavMenu sidenav navbar navbar-default stretch-height" id="mySideNav">
                    <a onClick={this.closeNav} className="closebtn">&times;</a>
                    <Link to="/"> Home </Link>
                    <Link to="quizMe"> Quiz Me </Link>
                    <Link to="myLists"> My Lists </Link> 
                    <img src='http://www.clipartbest.com/cliparts/jTx/9Eq/jTx9EqXTE.jpeg' />                   
                </nav>
            </div>


        )
    }
}

export default SideNavBar;
