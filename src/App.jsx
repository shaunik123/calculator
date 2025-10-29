import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleInput = (val) => {
    const operators = ["-", "+", "*", "/", "."];
    const lastChar = value.slice(-1);

    if (operators.includes(val) && operators.includes(lastChar)) return;

    if (value === "" && ["+", "*", "/", "."].includes(value)) return;

    setValue(value + val);
  };

  const calculate = () => {
    try {
      if (value === "" || /[+\-*/.]$/.test(value)) {
        setValue("Error");
        return;
      }
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>

          <div>
            <input type="button" value="AC" onClick={() => setValue("")} />
            <input
              type="button"
              value="DE"
              onClick={() => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => handleInput(e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => handleInput(e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => handleInput(e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => handleInput(e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => handleInput(e.target.value)}
            />
            <input
              type="button"
              value="="
              className="btn-span"
              onClick={calculate}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
