import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="list-unstlyed list-inline">
          <li className="list-inline-item">
            <div>Siglo</div>
            <p className="counter">21:</p>
          </li>
          <li className="list-inline-item">
            <div>Año</div>
            <p className="counter">21:</p>
          </li>
          <li className="list-inline-item">
            <div>Día</div>
            <p className="counter">21:</p>
          </li>
          <li className="list-inline-item">
            <span>Hora</span> <span>Minutos</span> <span>Segundos</span>
            <p className="counter"><Counter></Counter></p>
          </li>
        </ul>
     
      </header>
    </div>
  );
}

export default App;
