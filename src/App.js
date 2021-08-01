import React, {Component} from 'react';
import './App.css';
import {StartingBoard} from './StartingBoard';
import {ActionButton} from './ActionButton';
import {GameBoard} from './GameBoard';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      toggle: true
    }
  }

toggleBoard = () => {
  this.setState({toggle: !this.state.toggle});
}


render(){
    return(
      <div className='container-fluid'>
          <StartingBoard  toggle={this.state.toggle}/>
          <ActionButton function={this.toggleBoard} className='action-button' content={this.state.toggle? 'Graj': 'Powrót'} />
          <GameBoard toggle={this.state.toggle}/>
      </div>
    )



  }

}