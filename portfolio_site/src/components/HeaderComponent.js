import React, { Component } from 'react'
import header from "../images/planets-drawing-facebook-cover.jpg"

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                <img src={header} className="header" alt="header" />
            </div>
        )
    }
} 

export default HeaderComponent