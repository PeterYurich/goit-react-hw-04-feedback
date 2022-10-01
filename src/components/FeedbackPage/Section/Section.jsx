import React from "react";
import PropTypes from 'prop-types';
import { Tittle } from "../page-styles.styled";


export const Section = ({title, children}) => (
    <div>
        <Tittle>{title}</Tittle>
        {children}
    </div>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default Section