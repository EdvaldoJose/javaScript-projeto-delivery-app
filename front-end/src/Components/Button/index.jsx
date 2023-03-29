import React from 'react';
import PropTypes from 'prop-types';

function Button({ onclick, name, dataTesteId, disabled }) {
  return (
    <button
      type="button"
      onClick={ onclick }
      data-testid={ dataTesteId }
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
