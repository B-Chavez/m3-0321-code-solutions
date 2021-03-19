import React from 'react';
import ReactDOM from 'react-dom';

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
        if(this.state.isClicked >= 18){
            return <button className='hot6' onClick={this.handleClick}>Hot Button</button>
        }
        if(this.state.isClicked >= 15){
            return <button className='hot5' onClick={this.handleClick}>Hot Button</button>
        }
        if(this.state.isClicked >= 12){
            return <button className='hot4' onClick={this.handleClick}>Hot Button</button>
        }
        if(this.state.isClicked >= 9){
            return <button className='hot3' onClick={this.handleClick}>Hot Button</button>
        }
        if(this.state.isClicked >= 6){
            return <button className='hot2' onClick={this.handleClick}>Hot Button</button>
        }
        if(this.state.isClicked >= 3){
            return <button className='hot1' onClick={this.handleClick}>Hot Button</button>
            
        }
        return <button className='hot' onClick={this.handleClick}>Hot Button</button>
    }
}

ReactDOM.render(
    <CustomButton />,
    document.querySelector('#root')
)