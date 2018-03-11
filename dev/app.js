import React from 'react';
import ReactDOM from 'react-dom';
import Tables from './controllers/tablesController'

const genButton = document.getElementById('genButton'),
      maxNumberField = document.getElementById('maxNumber');

function verifyNumber(number) {
    number = ~~number;

    if (number < 10) { number = 10; }
    if (number > 999) { number = 999; }

    return number;
}

maxNumberField.addEventListener('change', (e) => {
    e.target.value = verifyNumber(e.target.value);
});

genButton.addEventListener('click', () => {

    const rowsCountField = document.getElementById('table_rows'),
          cellsCountField = document.getElementById('table_cells'),
          tablesCountField = document.getElementById('number_of_tables'),
          maxNumberField = document.getElementById('maxNumber'),

          rowsCount = rowsCountField.value,
          cellsCount = cellsCountField.value,
          tablesCount = tablesCountField.value,
          maxNumber = verifyNumber(maxNumberField.value);
          
    ReactDOM.render(
        <Tables 
            rows={rowsCount}
            cells={cellsCount}
            tables={tablesCount}
            maxNumber = {maxNumber}
        />,
        document.getElementById('tables')
    );
});