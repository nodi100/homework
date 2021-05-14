import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { celsiusToFahrenheit } from '../utils';

const Wrapper = styled.div`
  padding: 40px;
  box-sizing: border-box;

  .history {
    > div {
      margin: 10px 0;
      display: flex;
      align-items: center;

      .options {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        > div {
          margin: 0 10px 0 0;
        }
      }

      .status {
        margin: 0 10px;

        &.wrong {
          color: #ff0000;
        }

        &.correct {
          color: #16d10d;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .history {
      > div {
        justify-content: space-between;
      }
  }
`;

export const History = () => {
  const history = useSelector((state) => state.gamingHistory);
  const unit = useSelector((state) => state.temperatureUnit);

  return (
    <Wrapper>
      {history.length === 0 && <p>There is not a record yet!!!</p>}
      {history.length > 0 && (
        <div className="history">
          {history.map((item, index) => {
            return (
              <div key={index}>
                <div className="options">
                  {item.options.map((option, idx) => {
                    return (
                      <div key={idx}>
                        {`${option.city},  ${
                          unit === 'C'
                            ? option.temperature
                            : celsiusToFahrenheit(option.temperature)
                        }`}
                        {unit}
                      </div>
                    );
                  })}
                </div>
                <div
                  className={classNames(
                    'status',
                    { correct: item.isCorrect },
                    { wrong: !item.isCorrect },
                  )}
                >
                  {item.isCorrect.toString()}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};
