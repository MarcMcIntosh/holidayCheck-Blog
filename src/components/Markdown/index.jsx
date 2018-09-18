import React, { PureComponent } from 'react';
// import { node } from 'prop-types';
import markdownRenderer from './markdownRenderer';

/*
const renderMarkdown = markdown => (
  <article dangerouslySetInnerHTML={{ __html: markdownRenderer(markdown) }} />
);
*/

class RenderMarkDown extends PureComponent {
  constructor(props) {
    super(props);
    this.md = markdownRenderer;
    this.setRoot = (elem) => { this.root = elem; };
  }

  render() {
    const { markdown } = this.props;
    return (
      <article
        readOnly
        ref={this.setRoot}
        dangerouslySetInnerHTML={{ __html: this.md.render(markdown) }}
      />
    );
  }
}

RenderMarkDown.propTypes = {
  markdown: node.isRequired,
};

export default RenderMarkDown;
