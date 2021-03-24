import React from 'react';

class ToggleSwitch extends React.Component {
    constructor(props){
        super(props)
        this.state = {onOff: 'On'}
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        if(this.state.onOff === 'On'){
            this.setState({
                onOff:'Off'
            })
        } else {
            this.setState({
                onOff:'On'
            })
        }
    }

    render(){
        let classColor = 'default';

        if (this.state.onOff === 'Off') {
        classColor = 'black';
        } else {
            classColor = 'default';
        }
       return(
           <div>
            <button onClick={this.toggle} className={classColor}>{this.state.onOff}</button>
        </div>
       ) 
        
    }
}

export default ToggleSwitch;