import React from 'react';
import PropTypes from 'prop-types';
import { VisibilityFilters } from '../actions';
import ConFilterLink from './ConFilterLink';

const Footer = () => (
  <div>
    <span>Show: </span>
    <ConFilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </ConFilterLink>
    <ConFilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </ConFilterLink>
    <ConFilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </ConFilterLink>
  </div>
)

export default Footer;
