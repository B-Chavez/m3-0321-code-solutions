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
        const value = event.target.value;
        this.setState({
            email: value
        });
    }

    handleSubmit(event){
        console.log("state:", this.state);
        event.preventDefault();
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email
                    <input type="text" onChange={this.handleChange} value={this.state.email}/>
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