import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  string,
  bool,
  func,
  instanceOf,
} from 'prop-types';
import { fetchMarkdown } from '../actions';
import renderMarkdown from '../components/Markdown';

export const propTypes = {
  id: string.isRequired,
  fetching: bool.isRequired,
  error: bool.isRequired,
  message: string.isRequired,
  title: string.isRequired,
  markdown: string.isRequired,
  url: string.isRequired,
  date: instanceOf(Date).isRequired,
};

const mapStateToProps = ({ posts }, { params: { id } }) => ({
  ...posts[id],
});

const mapDispatchToProps = dispatch => ({
  fetchData: payload => dispatch(fetchMarkdown(payload)),
});

class Blog extends PureComponent {
  componentDidMount() {
    const {
      error,
      markdown,
      fetchData,
      fetching,
      url,
      id,
    } = this.props;

    if (!error && !markdown && !fetching) { fetchData({ url, id }); }
  }

  render() {
    const {
      markdown,
      title,
      message,
      error,
      fetching,
      date,
    } = this.props;
    if (markdown) {
      return (
        <article dangerouslySetInnerHTML={{ __html: renderMarkdown.render(markdown) }} />
      );
    }

    return (
      <article date={date}>
        {!markdown && <h1>{title}</h1>}
        {error && <p>{`Error: ${message}`}</p>}
        {fetching && <p>Loading...</p>}
      </article>
    );
  }
}


Blog.propTypes = {
  ...propTypes,
  fetchData: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
