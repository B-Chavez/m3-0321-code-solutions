import React from 'react';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: false};
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        let buttonClass = 'hot';

    if(this.state.count >= 18){
        buttonClass = 'hot6';
    }
    if(this.state.count >= 15){
        buttonClass = 'hot5';
    }
    if(this.state.count >= 12){
        buttonClass = 'hot4';
    }
    if(this.state.count >= 9){
        buttonClass = 'hot3';
    }
    if(this.state.count >= 6){
        buttonClass = 'hot2';
    }
    if(this.state.count >= 3){
        buttonClass = 'hot1'
        
    }
    return <button className={buttonClass} onClick={this.handleClick}>Hot Button</button>

    }
}

export default CustomButton;