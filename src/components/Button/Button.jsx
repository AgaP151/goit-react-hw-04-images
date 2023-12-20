import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap'
import { BtnElement } from './Button.styled';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Btn = ({
  text,
  status,
  icon: Icon = null,
  disabled = false,
  type = 'button',
  onClick = null,
  onLoaderPlay,
}) => {
  return (
    <BtnElement
      status={status}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon></Icon>}

      {onLoaderPlay && (
        <Spinner
          as="span"
          variant="light"
          size="sm"
          role="status"
          aria-hidden="true"
          animation="border"
        />
      )}
      {text}
    </BtnElement>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func,
};

