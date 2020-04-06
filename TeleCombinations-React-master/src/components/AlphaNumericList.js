import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class AlphaNumericList extends Component {
    constructor(props) {
        super(props);

    }
    state = {}
    render() {
        return (
            <div>
                <BootstrapTable hover striped scrollTable bodyStyle={{ overflowY: 'scroll', maxHeight: '400px' }}
                    data={this.props.data}
                    pagination>
                    <TableHeaderColumn dataAlign='center' headerAlign='center' tdStyle={{ whiteSpace: 'normal', textAlign: 'center' }} thStyle={{ 'color': 'white', background: '#215E95' }} headerColor='white' dataField='id' isKey={true}> S.No.</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' headerAlign='center' thStyle={{ 'color': 'white', background: '#215E95' }} dataField='combination'>List</TableHeaderColumn>
                </BootstrapTable>

            </div>
        );
    }
}

export default AlphaNumericList;