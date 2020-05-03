import React, { Component } from 'react';

class SortNameDate extends Component
{


    constructor(props) {
        super(props);
   // this.setState(
  //  {data:data.people});
      
  
      state = {
        currentSort: 'ascending',
        radio1:"Name"
      };
      onSortChange = () => {
        const { currentSort } = this.state;
        let nextSort;
    
        if (currentSort === 'asc') nextSort = 'desc';
        else if (currentSort === 'desc') nextSort = 'asc';
        
    
        this.setState({
          currentSort: nextSort
        });
      };
 
  
    }
    render(){
      var data = Array.from(this.props.data);
      var rows=data.map(function(personObj)

      const sortTypes = {
        asc: {
          class: 'ascending',
          fn: (a, b) => a.birth - b.birth
        },
        desc: {
          class: 'descending',
          fn: (a, b) => b.birth - a.birth
        }
        };
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
{/* 
            {/* {/* <tr key={personObj.name}>
            <td>{personObj.name}</td>
              <td>{personObj.birth}</td> */}

{/* 
          </tr> */}

        </div>
        );
   
    }
}

export default SortNameDate;
