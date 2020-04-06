import React, { Component } from 'react';
import SearchField from "react-search-field";

class Search extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    onSearch = (input) => {
       if(this.validateInput(input)){
        this.props.onSearchInput(input);
       }
    }

    validateInput(input) {
        if (input.length == 7 || input.length == 10) {
            var numbers = /^[0-9]+$/;
            if (input.match(numbers)) {
                return true;
            }
            else {
                alert('Please input numeric characters only');
                return false;
            }
        } else {
            alert("Please enter a phone number with length 7 or 10!");
            return false;
        }
    }

    render() {
        return (<div className="col-10 m-5 d-flex justify-content-center " >
            <div>
                <strong><label className="m-2" >ENTER PHONE NUMBER : </label></strong>
                <SearchField 
                    placeholder="Search..."
                    onSearchClick={this.onSearch}
                    classNames="test-class"
                />
            </div>
            <div><strong><label className="ml-4  mr-2 mt-2 mb-2">TOTAL COMBINATIONS :  {this.props.totalRecords}</label> </strong></div>
        </div>);
    }
}

export default Search;