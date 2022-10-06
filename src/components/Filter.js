import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FaChevronDown } from "react-icons/fa";

function Filter({ setTags }) {
  // 使用者打勾的選項
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    setTags(checked);
  }, [checked]);
  const handleChange = (event) => {
    const checkValue = [...checked];
    // 檢查選項是否已存在
    if (checkValue.indexOf(event.target.name) === -1) {
      // 選項不存在
      checkValue.push(event.target.name);
      setChecked(checkValue);
    } else {
      // 選項已存在
      // 刪除選項
      const isExist = checkValue.filter(
        (element) => element !== event.target.name
      );
      setChecked(isExist);
    }
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
          <li>
            <input
              type="checkbox"
              name="freeWifi"
              value="freeWifi"
              onChange={handleChange}
            />
            <label htmlFor="freeWifi">免費無線網路</label>
          </li>
          <li>
            <input type="checkbox" name="noSmoke" onChange={handleChange} />
            <label htmlFor="freeWifi">禁菸客房</label>
          </li>
          <li>
            <input type="checkbox" name="kitchen" onChange={handleChange} />
            <label htmlFor="freeWifi">廚房</label>
          </li>
          <li>
            <input type="checkbox" name="laundry" onChange={handleChange} />
            <label htmlFor="freeWifi">洗衣房</label>
          </li>
          <li>
            <input type="checkbox" name="parking" onChange={handleChange} />
            <label htmlFor="freeWifi">停車場</label>
          </li>
          <li>
            <input type="checkbox" name="pet" onChange={handleChange} />
            <label htmlFor="freeWifi">寵物友善</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
