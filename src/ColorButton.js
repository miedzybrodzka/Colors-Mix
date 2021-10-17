import React, {Component} from 'react';
import check from './check.png';

export class ColorButton extends Component{

    render(){
        let view =  this.props.check? 'show' : 'hide';
            
        
        return(
            <button onClick={this.props.function} className={this.props.className}
             id={this.props.id} disabled={this.props.disabled || this.props.check}><img src={check} 
             className={`img-fluid ${view}`}/></button>
        )
    }
}