export const actionTypes = {
  SAVE_RECORD: 'SAVE_RECORD',
  SET_TEMPERATURE_UNIT: 'SET_TEMPERATURE_UNIT',
};

export const saveRecord = (record) => ({
  type: actionTypes.SAVE_RECORD,
  record,
});

export const setTemperatureUnit = (unit) => ({
  type: actionTypes.SET_TEMPERATURE_UNIT,
  unit,
});
