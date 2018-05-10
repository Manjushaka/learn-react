import React from 'react';
import { NavLink } from 'react-router-dom';
import { VisibilityFilters } from '../actions';

const FilterLink = ({ filter, children}) => (
  <NavLink
    to={filter === VisibilityFilters.SHOW_ALL ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'red',
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink;
