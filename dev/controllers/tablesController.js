import React from 'react';
import Table from '../views/table';
import getMatrix from '../models/matrix';

class Tables extends React.Component {
    constructor(props) {
        super(props);

        this.getTablesList = this.getTablesList.bind(this);        
    }

    getTablesList() {
        let tables = [];

        for (let i = 0; i < this.props.tables; i++) {
            let matrix = getMatrix(this.props.cells, this.props.rows, this.props.maxNumber);

            tables.push(
                <Table
                    cells={this.props.cells}
                    rows={this.props.rows}
                    matrix={matrix}
                    key={'table_' + i}
                />
            );
        }        

        return tables;
    }

    render() {
        return this.getTablesList();
    }
}

export default Tables;