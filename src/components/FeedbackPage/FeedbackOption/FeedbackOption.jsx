import React from 'react';
import PropTypes from 'prop-types';

import { ButtonList, Button } from '../page-styles.styled';

const FeedbackOption = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map((option) => (
      <Button key={option} onClick={(() => onLeaveFeedback(option))}>
        {option}
      </Button>
    ))}
  </ButtonList>
);

FeedbackOption.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption