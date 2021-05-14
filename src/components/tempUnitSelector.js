import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setTemperatureUnit } from '../actions/history';

const Wrapper = styled.div`
  margin: 0 50px;

  label {
    font-size: 20px;
    cursor: pointer;
  }

  input {
    cursor: pointer;
  }
`;
export const TempUnitSelector = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.temperatureUnit);

  const handleChangeUnit = (event) => {
    const { value } = event.target;
    dispatch(setTemperatureUnit(value));
  };

  const handleChange = (event) => {
    event.preventdefault();
    console.log('here');
  };

  return (
    <Wrapper>
      <input
        type="radio"
        id="cels"
        name="C"
        value="C"
        checked={unit === 'C' || false}
        onClick={handleChangeUnit}
        onChange={() => handleChange}
      />
      <label htmlFor="cels">C</label>
      <input
        type="radio"
        id="faren"
        name="F"
        value="F"
        checked={unit === 'F' || false}
        onClick={handleChangeUnit}
        onChange={() => handleChange}
      />
      <label htmlFor="faren">F</label>
    </Wrapper>
  );
};
