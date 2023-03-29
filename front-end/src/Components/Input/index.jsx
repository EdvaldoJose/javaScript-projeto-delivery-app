import React from 'react';
import PropTypes from 'prop-types';

function Input({ inputName, type, name, onChange, dataTesteId }) {
  return (
    <label htmlFor={ inputName }>
      {`${type}: `}
      <input
        type={ type }
        name={ name }
        id={ inputName }
        onChange={ onChange }
        data-testid={ dataTesteId }
      />
    </label>
  );
}

Input.propTypes = {
  inputName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  dataTesteId: PropTypes.string,
}.isRequired;

export default Input;
