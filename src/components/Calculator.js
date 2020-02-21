import React from 'react';
import Button from './Button'

class Calculator extends React.Component {
    state = {
        listOfButtons: ['+', '-', '*', '1', '2', '3']
    }

    render() {
        return (
        <div className="Calculator">
                {this.state.listOfButtons.map(button =>
                <Button buttonName={button} ></Button>)}
        </div>
        );
    }
}

export default Calculator;
