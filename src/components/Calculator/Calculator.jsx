import React from 'react';
import style from './Calculator.module.scss';
import { useState } from 'react';

const Calculator = () => {
  const [val, setVal] = useState(' ');

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal('error');
    }
  };

  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal('');
    }
  };

  return (
    <>
      <div className={style.header}>
        <h1>Easy Calc #1</h1>
      </div>
      <div className={style.wrapper}>
        <div className={style.display}>
          <input value={val} type="text" onChange={(e) => setVal(e.target.value)} />
        </div>
        <div className={style.buttons}>
          <button value="1" onClick={(e) => setVal(val + e.target.value)}>
            1
          </button>
          <button value="2" onClick={(e) => setVal(val + e.target.value)}>
            2
          </button>
          <button value="3" onClick={(e) => setVal(val + e.target.value)}>
            3
          </button>
          <button value="+" onClick={(e) => setVal(val + e.target.value)}>
            +
          </button>
          <button value="4" onClick={(e) => setVal(val + e.target.value)}>
            4
          </button>
          <button value="5" onClick={(e) => setVal(val + e.target.value)}>
            5
          </button>
          <button value="6" onClick={(e) => setVal(val + e.target.value)}>
            6
          </button>
          <button value="-" onClick={(e) => setVal(val + e.target.value)}>
            -
          </button>
          <button value="7" onClick={(e) => setVal(val + e.target.value)}>
            7
          </button>
          <button value="8" onClick={(e) => setVal(val + e.target.value)}>
            8
          </button>
          <button value="9" onClick={(e) => setVal(val + e.target.value)}>
            9
          </button>
          <button value="/" onClick={(e) => setVal(val + e.target.value)}>
            /
          </button>
          <button value="" onClick={() => setVal('')} className={style.red}>
            C
          </button>
          <button value="0" onClick={(e) => setVal(val + e.target.value)}>
            0
          </button>
          <button value="*" onClick={(e) => setVal(val + e.target.value)}>
            X
          </button>
          <button onClick={calculate}>=</button>
          <button onClick={backspace}>
            <img src="images/backspace.png" alt="back" height={30} />
          </button>
          <button value="(" onClick={(e) => setVal(val + e.target.value)}>
            (
          </button>
          <button value=")" onClick={(e) => setVal(val + e.target.value)}>
            )
          </button>
          <button value="%" onClick={(e) => setVal(val + e.target.value)}>
            %
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
