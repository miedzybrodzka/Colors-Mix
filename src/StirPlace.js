import React, {Component} from 'react';
import {ActionButton} from './ActionButton';
import colors from './colors.png';



export class StirPlace extends Component{


        constructor(props){
            super(props);
            this.state={
                view: 'hide',
                result: '',
                yourColorOnSheet:''
                
            }
        }


clearBoard = () =>{
    this.props.clearColors();
    this.setState({view : 'hide',
    result:'',
    yourColorOnSheet: ''
    });
}
    

    mixColors = () =>{
        if(this.props.chosenColors.length > 1){
        this.setState({view: 'show'});

        let colorsToMix = this.props.chosenColors;
    

        switch(true){
            case colorsToMix.includes('red') && colorsToMix.includes('yellow'):
                this.setState({result: 'orange'});
                break;
            case colorsToMix.includes('red') && colorsToMix.includes('blue'):
                this.setState({result: 'violet'});
                break;
                case colorsToMix.includes('red') && colorsToMix.includes('white'):
                this.setState({result: 'pink'});
                break;
                case colorsToMix.includes('yellow') && colorsToMix.includes('blue'):
                this.setState({result: 'green'});
                break;
                case colorsToMix.includes('yellow') && colorsToMix.includes('white'):
                this.setState({result: 'light-yellow'});
                break;
                case colorsToMix.includes('blue') && colorsToMix.includes('white'):
                this.setState({result: 'light-blue'});
                break;
            }

        setTimeout(() =>{this.setState({view: 'hide'})},1500)

        }
        

    }


    showColorOnSheet = () =>{
        this.setState({yourColorOnSheet: this.state.result})
    }




    render(){

    let color = this.props.chosenColors[this.props.chosenColors.length -1];

        return(
            <React.Fragment>
            <ActionButton function={this.clearBoard} className='action-button' content='Wyczyść' />
            <div className ='row'>
                <div className='col-12 col-md-6 '>
                    <div className={`stir-place  ${color} ${this.state.result}`}>
                    <div className='d-flex justify-content-center spinner'>
                    <div className={`spinner-border ${this.state.view}` } role='status'>
                    </div>
                    </div>
                    </div>
                <ActionButton function={this.mixColors} className='mix-button' content='Mix' />
                </div>
                <div className='col-12 col-md-6'>
                <div className={`sheet ${this.state.yourColorOnSheet}`}><img src={colors} className='img-fluid'/></div>
                <ActionButton function={this.showColorOnSheet} className='mix-button' content='Maluj' />
                </div>
            </div>
            </React.Fragment>
        )
        
    }


}