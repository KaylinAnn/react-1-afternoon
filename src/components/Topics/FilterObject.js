import React, {Component}from 'react';
class FilterObject extends Component{

    constructor(){
        super()


        this.state={
            people:[
                {
                    name: 'blah',
                    hairColor: 'brown',
                    home: 'AZ'
                },
                {
                    name: 'Peter',
                    age: 5,
                    height: 'six foot'
                },
                {
                    name: 'Sam',
                    age: 6,
                    home: 'MI'
                }
            ],
            userInput: '',

            filterArray: [],

        }

        }

        handleChange (val) {
            this.setState({userInput: val})
        }
        
        filterPeople(prop){
            var employees = this.state.people;
            var filteredEmployees = [];
                
            for ( var i = 0; i < employees.length; i++ ) {
                if ( employees[i].hasOwnProperty(prop) ) {
                    filteredEmployees.push(employees[i]);
             }
            }
            
            this.setState({ filteredEmployees: filteredEmployees });
        }
        
    








    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Objects</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterPeople(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } ></span>
            </div>
        )
    }
}
export default FilterObject