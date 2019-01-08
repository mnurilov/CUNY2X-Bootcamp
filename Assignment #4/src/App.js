import React, { Component } from 'react';
import './App.css';

//Contact Card Component
class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard">
        <p>{this.props.name}</p>
        <p>{this.props.mobile}</p>
        <p>{this.props.work}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

//Decrement Component
class Decrement extends Component {
  //Constructor that sets state number to the props.number
  constructor(props){
    super(props);
    this.state = {
      number: props.number,
    };
  }

  //If the state number is less than 0 raise an alert otherwise decrement the number
  decrementNumber = () => {
    if(this.state.number <= 0){
      alert("The number cannot decrease below 0");
    }
    else{
      this.setState({
        number: this.state.number - 1
      });
    }
  }

  //Renders the number and the decrement button
  render() {
    return(
      <div className="Decrement">
        <h1>{this.state.number}</h1>
         {/*Bind function decrement number to on click*/}
        <button onClick={this.decrementNumber}>Decrement</button>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Decrementer">
          <Decrement number = "7" />
        </div>
        <div className="Contacts">
          <ContactCard name = "Bobby" mobile="12356788" work="1765432" email="ta@gmail.com"/>
          <ContactCard name = "MKobe" mobile="12765" work="15255432" email="hgafsafas@gmail.com"/>
          <ContactCard name = "Mary" mobile="12765" work="15255432" email="hgafsafas@gmail.com"/>
        </div>
      </div>
    );
  }
}

export default App;