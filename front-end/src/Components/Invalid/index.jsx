import React from 'react';
import PropTypes from 'prop-types';

function Invalid({ disable, dataTesteId, message }) {
  return (
    <div>
      {
        disable
        && (
          <p
            data-testeid={ dataTesteId }
          >
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
