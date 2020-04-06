import React, { Component } from 'react';


class Table extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // //  people:data.people
    // }
  }

  renderRows(){
    var rows = this.state.people.map(function(personObj){
      return (
          <tr key={personObj.name}>
            <td>{personObj.name}</td>
            <td>{personObj.birth}</td>
          </tr>
      );
    });

    return rows;
  }



    render(){
    console.log("props:",this.props);
        return (
        <table id="myTable" className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Person Name</th>
            <th scope="col">Date Of Birth</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
        );
    }
}
export default Table;