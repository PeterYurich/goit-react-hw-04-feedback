import React from 'react';
import PropTypes from 'prop-types';

const  Statistic = ({good, neutral, bad, totalClicks, positivePercentage}) => (
    <div>
        Good: {good}
        <br />
        Neutral: {neutral}
        <br />
        Bad: {bad}
        <br />
        Total: {totalClicks}
        <br />
        Positive Feedback: {positivePercentage}%
    </div>
    )

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalClicks: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired

}

export default Statistic