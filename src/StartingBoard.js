import React, {Component} from 'react';
import brush from './brush.png';
import title from './title.png'

export class StartingBoard extends Component{
 
    
    render(){
        
        let view =  this.props.toggle? 'show' : 'hide';


        return(
            <div className= {`row  ${view}`}>
                  <div className='col-12 col-lg-6'>  
                    <img src={title} className='img-fluid'/>
                  </div>
                  <div className='col-12 col-lg-6'>  
                    <img src={brush} className='img-fluid picture'/>
                  </div>
          </div>
        )
    }

}