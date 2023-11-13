import { useState } from "react";

//1. 
export const CountNumber = () => {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={increaseNumber}>Increase</button>
      {' '}
      <button onClick={decreaseNumber}>Decrease</button>
    </div>
  );
};

// 2.
// Need continued to be completed
export const InputBox = () => {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const add = () => {

    setList();

  };
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={add}>Add</button>
      <div>{inputText}</div>
    </div>
  );
};

// 3.
export const ChangeColor = () => {
  const [color, setColor] = useState('black');

  const changeColor = () => {
    setColor(color === 'black' ? 'red' : 'black');
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <h2 style={{ color: color }}>Hello World</h2>
    </div>
  );
};

// 4.
export const HideText = () => {
  const [text, setText] = useState(true);

  const hideText = () => {
    setText(!text);
  };

  return (
    <div>
      <button onClick={hideText}>Show/Hide</button>
      {text && <h2>Hello World</h2>}
    </div>
  );
};