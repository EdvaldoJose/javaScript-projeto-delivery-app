import React from 'react';
import PropTypes from 'prop-types';

function Invalid({ desabilitado, dataTesteId, message }) {
  return (
    <div>
      {
        desabilitado
      && (
        <p data-testid={ dataTesteId }>
          { message }
        </p>
      )
      }
    </div>
  );
}

Invalid.propTypes = {
  disable: PropTypes.bool,
  dataTesteId: PropTypes.string,
  message: PropTypes.string,
}.isRequired;

export default Invalid;
