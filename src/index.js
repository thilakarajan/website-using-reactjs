import './index.css'
import React from 'react';
import ReactDOM from 'react-dom'
import Header from './header';
import Footer from './footer';
import Content from './content';

function body(){
  return (
    <div>
      <Header />
      <Content/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(body(),document.getElementById('root'));