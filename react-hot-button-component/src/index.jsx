import React from 'react';
import ReactDOM from 'react-dom';

import hotButton from 'hot-button';

let counter = 1;

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isClicked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick() {
        this.setState({isClicked: counter++})
    }

    render() {
        <hotButton />
    }
}

ReactDOM.render(
    <CustomButton />,
    document.querySelector('#root')
)