import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbttn").click();
    }
  });

  return (
    <div className="show-bttn">
      <button className="bttn exp" onClick={inputHandler}>
        ^
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        (
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        )
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        √
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className="bttn clr" onClick={clearInput}>
        AC
      </button>
      <button className="bttn clr" onClick={backspace}>
        ⌫
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        log
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        ÷
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        %
      </button>
      <button className="bttn" onClick={inputHandler}>
        7
      </button>
      <button className="bttn" onClick={inputHandler}>
        8
      </button>
      <button className="bttn" onClick={inputHandler}>
        9
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        x
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className="bttn" onClick={inputHandler}>
        4
      </button>
      <button className="bttn" onClick={inputHandler}>
        5
      </button>
      <button className="bttn" onClick={inputHandler}>
        6
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        -
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className="bttn" onClick={inputHandler}>
        1
      </button>
      <button className="bttn" onClick={inputHandler}>
        2
      </button>
      <button className="bttn" onClick={inputHandler}>
        3
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        +
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        !
      </button>
      <button className="bttn exp" onClick={changePlusMinus}>
        ±
      </button>
      <button className="bttn" onClick={inputHandler}>
        0
      </button>
      <button className="bttn exp" onClick={inputHandler}>
        .
      </button>
      <button className="bttn exp equal" id="equalbttn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;
