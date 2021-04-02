import React from 'react';

class AppDrawer extends React.Component{
  constructor(props){
    super(props);
    this.state = { toggleClassName: 'closed', overlay: 'overlay'}

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    if(this.state.toggleClassName === 'open'){
      this.setState({toggleClassName: 'closed', overlay: 'overlay'});
      console.log('Closed');
    } else {
      this.setState({toggleClassName: 'open', overlay: 'overlayDisplay'});
      console.log('Open');
    }
  }

  render(){

    return(
      <div>
        <div id="hamburgerMenuOutside" onClick={this.handleClick}></div>
        <div className={`${this.state.toggleClassName} menu`}>
          <div id="hamburgerMenu" onClick={this.handleClick}></div>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="info.html">Info</a></li>
          </ul>
        </div>
        <div className="page"></div>
        <div id={this.state.overlay} className="overlayDisplay"></div>
      </div>
    )
  }
}

export default AppDrawer;
