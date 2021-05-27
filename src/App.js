import logo from './logo.svg';
import Header from './Header'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
