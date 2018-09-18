import React from 'react';
import renderMarkdown from '../Markdown';
import propTypes from './propTypes';

const DisplayMarkDown = ({
  markdown,
}) => (
  <article dangerouslySetInnerHTML={{ __html: renderMarkdown.render(markdown) }} />
);

DisplayMarkDown.propTypes = propTypes.markdown;

export default DisplayMarkDown;
