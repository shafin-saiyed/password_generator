//import './App.css';
import './pages/PasswordGenerator.js'
import PasswordGenerator from './pages/PasswordGenerator.js'

function App() {
  document.title = "Random Password Generator";
  return (
    <div className="App">
      <PasswordGenerator/>
    </div>
  );
}

export default App;
