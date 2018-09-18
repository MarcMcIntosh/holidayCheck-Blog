import React from 'react';
import propTypes from './propTypes';
import DisplayError from './DisplayError';
/* Chang dispaly spinner to a css class */
import DisplaySpinner from './DisplaySpinner';
import DisplayMarkDown from './DisplayMarkdown';

/* This should be a container */

const Post = ({
  error,
  message,
  markdown,
  fetching,
  title,
}) => {
  const isLoading = fetching && (<DisplaySpinner />);
  const hasError = error && (<DisplayError message={message} />);

  if (isLoading || hasError) {
    return (
      <section>
        <h1>{title}</h1>
        {isLoading || hasError}
      </section>
    );
  }
  return (<DisplayMarkDown markdown={markdown} />);
};

Post.propTypes = propTypes;

export Post;
