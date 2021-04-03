import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './accordion';

const topics = [
  {
    id: 'html',
    title: 'Hypertext Markup Language',
    content: 'Some stuff about HTML'
  },
  {
    id: 'js',
    title: 'Javascript',
    content: 'Some stuff about JS'
  }
]

ReactDOM.render(
  <Accordion topics={topics}/>,
  document.querySelector('#root')
)
