import React, { useState } from "react";

import DownArrow from "./DownArrow";

import {
  CustomSelectOptions,
  StyledCustomSelect,
} from "../../styles/CustomSelect.styles";

const CustomSelect = ({
  options,
  defaultValue,
  selectedOption,
  onSelectOption,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <StyledCustomSelect onClick={() => setShowOptions(!showOptions)}>
        <span>{selectedOption ? selectedOption.label : "Please select"}</span>
        <DownArrow color="#000000" />
      </StyledCustomSelect>
      {showOptions && (
        <CustomSelectOptions>
          {options?.length ? (
            options.map((option) => (
              <div
                key={option.id}
                onClick={() => {
                  onSelectOption(option);
                  setShowOptions(false);
                }}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div>No options</div>
          )}
        </CustomSelectOptions>
      )}
    </>
  );
};

export default CustomSelect;
