import React, { useState } from "react";
import "./styles.css";
import data from "./data";

// multiple selection

// single selection
function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    // setSelected(getCurrentId === selected ? null : getCurrentId);
    let cpyMultiple =  [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)
    
    setMultiple(cpyMultiple)
  };
  console.log(selected, multiple);
  return (
    <div className="wrapper">
        <button 
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={ enableMultiSelection ? () => handleMultiSelection(dataitem.id) : () => handleSingleSelection(dataitem.id)}
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataitem.id || multiple.indexOf(dataitem.id) !== -1 ? (
                <div className="content">{dataitem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
