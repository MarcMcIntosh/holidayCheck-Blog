import React, { Component } from 'react';
import { connect } from 'react-redux';
// import RenderMarkDown from '../components/RenderMarkDown';
import propTypes from './propTypes';
import sortByDate from './sortByDate';
// import postData from '../posts';
// import { fetchMarkdown } from '../actions';

const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = () => ({});


class Posts extends Component {
  constructor(props) {
    super(props);
    // temporary state to test toggleing
    this.handleClick = this.handleClick.bind(this);
  }
  /*
  componentDidMount() {
    console.log(this.props.posts);
  }
  */

  handleClick() {
    const { posts } = this.props;
    console.log(posts);
  }

  render() {
    const { props: { posts } } = this;
    return (
      <ul>
        {Object.values(posts).sort(sortByDate).map(({
          id,
          title,
        }) => (<li key={id}>{title}</li>))}
      </ul>);
  }
}

Posts.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
