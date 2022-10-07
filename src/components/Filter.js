import React, { useState } from "react";
import { conditions } from "./conditions";
import { FaChevronDown } from "react-icons/fa";

function Filter({ setConditions }) {
  const [checkedState, setCheckedState] = useState(
    new Array(conditions.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setConditions(updatedCheckedState);
  };
  return (
    <div className="filter">
      <div className="filterItem">
        <h3>透過以下分類搜尋:</h3>
        <div className="filter_heading">
          <h4>飯店設施</h4>
          <FaChevronDown />
        </div>
        <ul>
          {conditions.map(({ name, desc }, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  name={name}
                  id={`checkbox-${index}`}
                  value={name}
                  onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`checkbox-${index}`}>{desc}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
