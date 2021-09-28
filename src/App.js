import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-app">
      <h1>Ini adalah Header</h1>
      <p>Me</p>
      </header>
      <header className="App-header">
      

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <p>ini adalah Paragraf</p>
      </footer>
    </div>
  );
}

export default App;
