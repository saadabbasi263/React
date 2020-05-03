import React, { Component } from 'react';
import people from '../people.json';

class Table extends Component {

    constructor(props) {
        super(props);
        // this.setState(
        //     {data:data.people});
       this.setState = {
            currentSort: 'ascending'
        };

    }
    // const sorting = {
    //     byname: {
    //         class: 'sort-down',
    //         fn: (a, b) => b.net_worth - a.net_worth
    //     },
    // bybirth: {
    //     class: 'sort-up',
    //     fn: (a, b) => a.net_worth - b.net_worth
    // }};

    renderRows(){
        var data = Array.from(this.props.data);
        var rows=data.map(function(personObj){
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
        var data = Array.from(this.props.data);

        return (
            <table id="myTable" className="table table-striped">

                <thead>
                <tr>
                    <th scope="col">Person Name</th>
                    <th scope="col">Date Of Birth</th>


                </tr>

                </thead>
                <tbody>
                <tr>

                    <td>
                        {/*{this.renderRows()}*/}

                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}
export default Table;