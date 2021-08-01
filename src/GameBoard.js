import React, {Component} from 'react';
import { ColorButton } from './ColorButton';
import {ActionButton} from './ActionButton';
import {StirPlace} from './StirPlace';


export class GameBoard extends Component{

constructor(props){
    super(props);
    this.state={
        chosenColors: [],
        disabled: false,
        red: false,
        yellow: false,
        blue: false,
        white: false,
    }

}
   



setChosenColors = (event) =>{
         let tempObj = {...this.state}
         tempObj.chosenColors.push(event.target.id);
         this.setState({tempObj});
         this.setState({[event.target.id]: true})
         if(this.state.chosenColors.length === 2){
            this.setState({disabled: true});
    }
  

}



clearColors = () =>{
    this.setState({ chosenColors: [],
        disabled: false,
        red: false,
        yellow: false,
        blue: false,
        white: false,})
}




render(){

    let view = this.props.toggle? 'hide':'show';
   

    return(
        <div className={`${view}`}>
            <div className='row lines'>
                <div className='col-6 col-md-3'>
                <ColorButton function={this.setChosenColors} className='color-button red' id='red' disabled={this.state.disabled} check={this.state.red}/>
                </div>
                <div className='col-6 col-md-3'>
                <ColorButton function={this.setChosenColors} className='color-button yellow' id='yellow' disabled={this.state.disabled} check={this.state.yellow} />
                </div>
                <div className='col-6 col-md-3'>
                <ColorButton function={this.setChosenColors} className='color-button blue' id='blue' disabled={this.state.disabled} check={this.state.blue}/>
                </div>
                <div className='col-6 col-md-3'>
                <ColorButton function={this.setChosenColors} className='color-button white' id='white' disabled={this.state.disabled} check={this.state.white}/>
                </div>
            </div>
                <StirPlace chosenColors={this.state.chosenColors} clearColors={this.clearColors}/>
        
        </div>
        )
    }



}