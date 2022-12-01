export const onInputChange = (data) => {
  return {
    type: 'INPUT_CHANGE',
    payload: data,
  };
};
export const onFormSubmit = (data) => {
  return {
    type: 'ON_FORM_SUBMIT',
    payload: data,
  };
};

export const componentToggle = () => {
  return {
    type: 'COMPONENT_TOGGLE',
  };
};
