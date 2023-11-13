import './App.css';
import { CountNumber, InputBox, ChangeColor, HideText } from './components/state';


function App () {
  return (
    <div className="App">
      <CountNumber />
      <p>-----------------------------</p>
      <InputBox />
      <p>-----------------------------</p>
      <ChangeColor />
      <p>-----------------------------</p>
      <HideText/>
    </div>
  );
}

export default App;
