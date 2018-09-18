import React from 'react';
import {
  objectOf,
  shape,
} from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sortByDate from './sortByDate';
import { propTypes as postPropTypes } from '../Blog';
import formatUrl from '../../formatUrl';

const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = () => ({});
/* mount at /holidayCheck-blog */
const Home = ({ posts }) => (
  <div>
    <h1>Hello</h1>
    <h2>Welcome to Marc&apos;s blog</h2>
    {Object.values(posts).sort(sortByDate).map(({ id, title }) => (
      <div key={id}>
        <Link to={formatUrl(`/blog/${id}`)}>{title}</Link>
      </div>
    ))}
  </div>
);

export const propTypes = {
  posts: objectOf(shape(postPropTypes)).isRequired,
};

Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
