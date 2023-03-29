import React from 'react';
import PropTypes from 'prop-types';

function Button({ onclick, name, dataTestId, disabled }) {
  return (
    <button
      type="button"
      onClick={ onclick }
      data-testid={ dataTestId }
      disabled={ disabled }
    >
      { name }

    </button>
  );
}

Button.propTypes = {
  onclick: PropTypes.func,
  name: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default Button;
