import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  handleClik(){
    this.setState({count:this.state.count + 1})
  }
  handleClik1(){
    this.setState({count:this.state.count - 1})
  }
  constructor(props) {
    // const user = { name: "Ninja Ken", age: 14 };
    super(props);
    this.state = {count : 0};
  }
  render() {
    return (
      <div className="App">
        <header className="header-app">
          <p>Home</p>
          <p>Profil</p>
        </header>
        <header className="App-header">
          <h1>Halo, {this.state.count}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <view>
            <button onClick={()=>{this.handleClik()}}>+</button>
            <button onClick={()=>{this.handleClik1()}}>-</button>
          {/* <button onClick={() => {this.handleClik("Guru Domba")}}>Guru Domba</button>
        <button onClick={() => {this.handleClik("Ninja Ken 2")}}>Ninja Ken2</button> */}
          </view>
        </header>

        <footer>
          <p>ini adalah Paragraf</p>
        </footer>
      </div>
    );
  }
}

export default App;
