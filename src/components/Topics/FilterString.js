import React, {Component}from 'react';
class FilterString extends Component{
    constructor(){
        super();

        this.state={
            name: ['bob','Sam','brad','Pat'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterNames(userInput) {
        var name = this.state.name;
        var filteredNames = [];
    
        for ( var i = 0; i < name.length; i++ ) {
          if ( name[i].includes(userInput) ) {
            filteredNames.push(name[i]);
          }
        }
    
        this.setState({ filteredNames: filteredNames });
      }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.name, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
                  </div>
        )
    }
}
export default FilterString