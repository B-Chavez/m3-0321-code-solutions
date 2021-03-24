import React from 'react';

class ToggleSwitch extends React.Component {
    constructor(props){
        super(props)
        this.state = {clicked: false, classColor: 'default', onOff: 'On'}
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        if(this.state.clicked === true){
            this.state.clicked = false;
            this.setState({
                onOff:'Off', classColor: 'black'
            })
        } else {
            this.state.clicked = true;
            this.setState({
                onOff:'On', classColor: 'default'
            })
        }
    }

    render(){
       return(
           <div>
            <button onClick={this.toggle} className={this.state.classColor}>{this.state.onOff}</button>
        </div>
       ) 
        
    }
}

export default ToggleSwitch;