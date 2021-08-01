import React, {Component} from 'react';

export class ActionButton extends Component{

    render(){

        
        return(
            <button onClick={this.props.function} className={this.props.className}  >{this.props.content}</button>
        )
    }
}