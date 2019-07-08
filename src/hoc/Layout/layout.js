import React, { Component } from 'react';
import './layout.css';


class Layout extends Component {

    state = {
    
    }

    render(){
        return(
            <div>
                Layout
                {this.props.children} 
                Footer
            </div>
        )
    }

}

export default Layout;