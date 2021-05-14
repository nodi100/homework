import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { saveRecord } from '../actions/history';
import { getOptions, celsiusToFahrenheit } from '../utils';

const Wrapper = styled.div`
  .options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 40px 0;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;

      > button {
        background: none;
        outline: none;
        border: 1px dashed;
        border-radius: 8px;
        height: 40px;
        padding: 0 10px;
        font-size: 14px;

        > span {
          margin: 0 5px;
        }

        &.wrong {
          border: 1px dashed #ff0000;
        }

        &.correct {
          border: 1px dashed #16d10d;
        }
      }

      .wrong {
        color: #ff0000;
      }

      .correct {
        color: #16d10d;
      }
    }
  }

  .next-btn {
    margin: 0 auto;
    display: block;
    height: 40px;
    width: 160px;
    border-radius: 8px;
    border: none;
    background: #032cfc;
    color: #ffffff;
    font-size: 18px;

    :disabled {
      opacity: 0.6;
    }
  }
`;

export const Home = () => {
  const [options, saveOptions] = useState(getOptions());
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();
  const sortedOptions = sortBy(options, ['temperature']);

  const unit = useSelector((state) => state.temperatureUnit);

  const reset = () => {
    dispatch(saveRecord({ options, isCorrect }));
    saveOptions(getOptions());
    setSelected(null);
    setIsCorrect(null);
  };

  const handleSelect = (index) => {
    setSelected(index);
    if (index === 4) {
      if (options.every((item) => item.temperature === options[0].temperature)) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
      return;
    }

    if (options.every((item) => item.temperature === options[0].temperature) && index !== 4) {
      setIsCorrect(false);
    } else if (options[index - 1].temperature === sortedOptions[2].temperature) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Wrapper>
      <div className="options">
        {options.map((option, index) => {
          return (
            <div key={index}>
              {selected === index + 1 && (
                <span className={isCorrect ? 'correct' : 'wrong'}>
                  {isCorrect ? 'Correct' : 'Wrong'}
                </span>
              )}
              <button
                onClick={() => handleSelect(index + 1)}
                disabled={!!selected}
                className={classNames(
                  { correct: selected === index + 1 && isCorrect },
                  { wrong: selected === index + 1 && !isCorrect },
                )}
              >
                {option.city}
                {selected && (
                  <span>
                    {unit === 'C' ? option.temperature : celsiusToFahrenheit(option.temperature)}
                    {unit}
                  </span>
                )}
              </button>
            </div>
          );
        })}
        <div>
          {selected === 4 && (
            <span className={isCorrect ? 'correct' : 'wrong'}>
              {isCorrect ? 'Correct' : 'Wrong'}
            </span>
          )}
          <button onClick={() => handleSelect(4)} disabled={!!selected}>
            All is equal
          </button>
        </div>
      </div>
      <button onClick={() => reset()} className="next-btn" disabled={!selected}>
        next
      </button>
    </Wrapper>
  );
};
