import {useState} from 'react'
import "./App.css"

function App() {
    const [value, setValue] = useState();
    const onChange = (event) => setValue(event.target.value);
    const converted = value * 0.000017;

    console.log(value);
  return (
    <div>
      <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="write here USD to convert"
      /> USD
        <br/>
      <input
          value={converted}
          type="number"
          disabled={true}
      /> BTC
    </div>
  );
}

export default App;
