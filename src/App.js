import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.scss';

class App extends Component {
  constructor () {
    super()
    this.state = {
      num: 1
    }
    this.addNum = this.addNum.bind(this)
    this.minusNum = this.minusNum.bind(this)
  }

  addNum() {
    this.setState({
      
      num: this.state.num +1
    }, function() {
      console.log('number of issues is ' + this.state.num)
    })
  }

  minusNum() {
    this.setState({
      num: this.state.num - 1
    }, function() {
    })
  }

  render() { 
     return (
      <div>
        <img src={logo} alt="" className="logo"/>
      <h2>Agenda</h2>

     <body><p className="paragraph">How many concerns would you like to discuss with your GP today?</p>
      
      <p> Although we might not be able to discuss ALL of them today, it's best for us to know them.
       This will help provide more accurate health advice. </p>
     
      
      <div className="incrementer">
        <div>
            <h2 className="minus" onClick={this.minusNum}>-</h2>
        </div>
        <div>
        <h2 className="number">{this.state.num}</h2>
        </div>
        <div>
           
              <h2 className="plus" onClick={this.addNum}>+</h2>
            
            </div>
      </div>

      </body>
        <div className="btn"> 
          <div className="btn-back">
            Back
          </div> 
          <div className="btn-next" >
            Next
          </div>
        </div>
       
      </div>
        
    );
  }
}

export default App;
