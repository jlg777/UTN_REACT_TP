import logo from './logo.svg';
import './App.css';
import { Saludo1 } from './components/Saludo1';
import { Saludo2 } from './components/Saludo2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saludo1 />
        <Saludo2 />
      </header>
    </div>
  );
}

export default App;
