import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            email: event
        });
        console.log(this.state.email);
    }

    handleSubmit(event){
        console.log("Email:", this.state.email.target.value);
        event.preventDefault();
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email
                    <input type="text" onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <NewsletterForm />,
    document.querySelector('#root')
)