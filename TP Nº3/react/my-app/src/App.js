import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Header } from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Card from './components/Card';



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Card />
      <Aside />
      <Footer />    
    </div>
    
  );
}

export default App;
