import './Input.css';
import { useState } from "react";

  // setter should be a useState setter for the value you want from the input
  // validator is a function that returns nothing if valid, and an error message if invalid, 
  // validator must be able to work with or without an input

const Input = ({ placeholder = 'input', type = 'text', validator = () => console.log('input'), setter = (e) => console.log(e)}) => {
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(true);
  };
  const handleBlur = () => {
    const result = validator();
    if (!result) {
      setSelected(false);
      setError(false);
      return
    };
    setError(result);
  };
  const handleInput = (e) => {
    setter(e.target.value);
    if (error) {
      setError(validator(e.target.value));
    };
  };

  return (
    <div className={error ? 'InputWrapperError' : 'InputWrapper'}>
      <input type={type} placeholder={placeholder} onFocus={handleSelect} onBlur={handleBlur} onInput={e => handleInput(e)}></input>
      <div className={selected 
                        ? error
                          ? "InputSelectedBorderShownError"
                          : "InputSelectedBorderShown"
                        : "InputSelectedBorderHidden"}>
        <div className="InputLeftBorder"></div>
        <div className="InputLabelHolder">
          <span>{(error || placeholder).toUpperCase()}</span>
        </div>
        <div className="InputRightBorder"></div>
      </div>
    </div>
  );
};

export default Input
