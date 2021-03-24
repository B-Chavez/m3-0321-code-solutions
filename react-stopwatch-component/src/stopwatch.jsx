import React, { useState } from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0, stop: false, cycleSeconds: 0};
        this.clearTimer = this.clearTimer.bind(this);
        this.trigger = this.trigger.bind(this);
    }
    
    trigger() {
        this.intervalId = setInterval(() => {
            const seconds = this.state.seconds + 1;
            this.setState({
              seconds: seconds
            });
        }, 1000);
    }

    clearTimer() {
        clearInterval(this.intervalId);
    }

    render(){
        console.log(this.state.seconds);        
        return (
            <div>
                <div id="main">{this.state.seconds} Seconds</div>
                <button onClick={this.trigger}>Start</button>
                <button onClick={this.clearTimer}>Stop</button>
            </div>
        )
    }
}

export default Stopwatch;