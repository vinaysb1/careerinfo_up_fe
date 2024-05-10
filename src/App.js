import logo from './logo.svg';
import './App.css';
import CareerList from './components/CareerList';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Welcome to the Career Information Portal</h1>
    </header>
    <main>
      <CareerList />
    </main>
  </div>
  );
}

export default App;
