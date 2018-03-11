import React from 'react';
import PropTypes from 'prop-types'

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.getRows = this.getRows.bind(this);
        this.getHeadRow = this.getHeadRow.bind(this);
        this.getFooterRow = this.getFooterRow.bind(this);
    }

    getHeadRow(cellsNum) {
        let cells = [<th key='first_hr_cell'></th>];

        for (let i = 0; i < cellsNum; i++) {
            cells.push(<th key = {'hr_cell_' + (i + 1)}>{i + 1}</th>);
        }

        return (
            <tr key='head_row'>
                {cells}
            </tr>
        );
    }

    getFooterRow(cellsNum) {
        let cells = [<th key='first_footer_cell'>Ответ:</th>];
        
        for (let i = 0; i < cellsNum; i++) {
            cells.push(<th key = {'footer_cell_' + (i + 1)}></th>);
        }

        return (
            <tr key='footer_row'>
                {cells}
            </tr>
        );
    }

    getRows(matrix) {
        let result = [],
            cellsNum = this.props.cells,
            rowsNum = this.props.rows;
        
        result.push(this.getHeadRow(cellsNum));
        
        for (let i = 0; i < rowsNum; i++) {
            let row = [<td key={'first_cell_' + i}></td>];

            for (let j = 0; j < cellsNum; j++) {
                row.push(<td key={'cell_' + i + j}>{matrix[j][i]}</td>);
            }

            result.push(<tr key={'row_' + i}>{row}</tr>);
        }

        result.push(this.getFooterRow(cellsNum));
        
        return result;
    }

    render() {
        const rows = this.getRows(this.props.matrix);

        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    matrix: PropTypes.array.isRequired
}

export default Table;