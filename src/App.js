import logo from './logo.svg';
import './App.css';
import {abc} from "./abc.js";
import Home from './Pages/Home';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
function App() {
  return (
    <div className='App'>
      <Home/>
      <Counter/>
      <FunctionClick/>
    </div>
    
  );
}

export default App;
