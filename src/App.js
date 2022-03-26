import './App.css';
import Books from './Components/Books/Books';
import Nav from './Components/Nav/Nav';
import Theory from './Components/Theory/Theory';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Books></Books>
      <Theory></Theory>

    </div>
  );
}

export default App;
