// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link } from 'react-router';


class SideNavBar extends Component{
    render(){
        return(
            
           
            <div className="col-sm-3">         
                <nav className="navbar navbar-default stretch-height">  
                    <Link to="home"> <button className="btn btn-primary button-spread"> Home </button> </Link>                      
                    <Link to="quizMe"> <button className="btn btn-primary button-spread"> Quiz Me </button> </Link>
                    <Link to="createNewList"> <button className="btn btn-primary button-spread"> Create New List </button> </Link>
                    <Link to="viewProgress"><button className="btn btn-primary button-spread"> View Progress </button></Link>                    
                </nav>
            </div>
            
            
        )
    }
}

export default SideNavBar;