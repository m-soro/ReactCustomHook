/**
 * -------
 * Custom Hooks
 * -------
 * When a state value is used in a form, this means its a controlled component
 * Ref to reach out to form to find out their values
 * useEffect to perform side effects
 */

import "./App.css";
import { useState } from "react";

// creating a custom hook
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  // useState returns a pair inside an array, useRef returns an object
  return [
    // first item to return is the item's state and the setter which is triggered by onChange
    { value, onChange: (e) => setValue(e.target.value) },
    // second to return is the clean up function
    () => setValue(initialValue),
  ];
}

function App() {
  //create state with custom hook
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event) => {
    event.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle("");
    resetColor();
  };
  console.log(titleProps);
  return (
    <div className="App container">
      <h2>Custom Hook</h2>
      <form onSubmit={submit}>
        <input
          {...titleProps} // push in and spread the properties of titleProps
          // instead of these two below its being replaced by the title props above
          // value={title}
          // onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="color title..."
        />
        <input
          type="color"
          {...colorProps}
          // same as above
          // value={color}
          // onChange={(event) => setColor(event.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
