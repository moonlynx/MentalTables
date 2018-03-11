function isNegativeNumber() {
    return Math.random() < 0.5;
}

function getNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
}

function getExampleFlow(flowLength, maxNumber) {
    let firstNumber = getNumber(maxNumber),
        flow = [firstNumber], //first number in flow is positive number
        answer = firstNumber;

    for (let i = 1; i < flowLength; i++) {
        let number;

        if (isNegativeNumber() && (answer != 0)) {
            number = answer < maxNumber ? -1 * getNumber(answer) : -1 * getNumber(maxNumber);
        } else {
            number = getNumber(maxNumber);            
        }

        answer += number;
        flow.push(number);
    }

    return flow;
}

function getMatrix(cells, rows, maxNumber) {
    let matrix = [];

    for (let i = 0; i < cells; i++) {
        matrix.push(getExampleFlow(rows, maxNumber))
    }

    return matrix;
}

export default getMatrix;