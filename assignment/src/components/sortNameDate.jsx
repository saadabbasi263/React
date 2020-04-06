import React, { Component } from 'react';

class SortNameDate extends Component
{


    constructor(props) {
        super(props);

      
        this.state = {
            radio1:"Name"
          
      };
 
  
    }
    render(){
        const mystyle = {
            display: 'flex',  justifyContent:'center', alignItems:'center'
          };
        
        return (
        <div style={mystyle}>
            <h1>BirthDay Records</h1>
            <input type="radio" name="radio1" checked={this.state.radio1} 
            onChange={this.onCheckChange} />
          <h4> Sort By Name</h4> 
            <input type="radio" name="radio1" checked={this.state.radio1} 
            onChange={this.onCheckChange}/>
            <h4> Sort By Date</h4>
        </div>
        );
   
    }
}

export default SortNameDate;