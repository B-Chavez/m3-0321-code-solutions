import React from 'react';

class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.state = {id: 0}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index){
    this.setState({id:index});

  }

  render(){

    return(
      <div>
        <div className='container'>
          {this.props.topics.map((topic, index) => {
            return (<div>
              <div onClick={() => this.handleClick(topic.id)} id='topic'>{topic.title}</div>
              <div key={topic.id} eventkey={index} className={this.state.id === topic.id ? '' : 'hidden'} id='content'>{topic.content}</div>
              </div>)
          })}
        </div>
      </div>
    )
  }
}

export default Accordion;
