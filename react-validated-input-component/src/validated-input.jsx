import React from 'react';

class ValidatedInput extends React.Component{
  constructor(prop){
    super(prop);
    this.state = { password: '', message: '', icon:'noIcon'}

    this.validateText = this.validateText.bind(this);
  }

  validateText(event){
    console.log(event.target.value);
    const password = event.target.value;
    if(!password){
      console.log('A password is required.')
      this.setState({message: 'A password is required.'});
    } else if(password.length < 8 && password){
      console.log('Password is not long enough')
      this.setState({ message: 'Password is too short.', icon: 'xIcon'})
    } else {
      console.log('Password is acceptable.')
      this.setState({message: '', icon: 'checkIcon'})
    }
  }

  render(){
    return(
      <div>
        <div className="container">
          <form>
            <label>
              <input type="password" onChange={this.validateText}/>
            </label>
          </form>
          <div className={this.state.icon}></div>
        </div>

        <div id="message">{this.state.message}</div>
      </div>

    )
  }
}

export default ValidatedInput;
