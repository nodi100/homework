import { Cities } from './constants';

export const getRandomInts = (max) => {
  const numbers = [];

  while (numbers.length < 3) {
    const num = Math.floor(Math.random() * max);
    if (numbers.indexOf(num) === -1) {
      numbers.push(num);
    }
  }

  return numbers;
};

export const getOptions = () => {
  const numbers = getRandomInts(Cities.length - 1);

  const options = numbers.map((num) => Cities[num]);

  return options;
};

export const celsiusToFahrenheit = (celsius) => Math.round((celsius * 9) / 5 + 32);
