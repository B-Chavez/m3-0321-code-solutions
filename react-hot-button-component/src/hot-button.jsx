import React from 'react';
import ReactDOM from 'react-dom';

function hotButton() {
    let buttonClass = 'hot';

    if(this.state.isClicked >= 18){
        buttonClass = 'hot6';
    }
    if(this.state.isClicked >= 15){
        buttonClass = 'hot5';
    }
    if(this.state.isClicked >= 12){
        buttonClass = 'hot4';
    }
    if(this.state.isClicked >= 9){
        buttonClass = 'hot3';
    }
    if(this.state.isClicked >= 6){
        buttonClass = 'hot2';
    }
    if(this.state.isClicked >= 3){
        buttonClass = 'hot1'
        
    }
    return <button className={buttonClass} onClick={this.handleClick}>Hot Button</button>

}

export default hotButton;