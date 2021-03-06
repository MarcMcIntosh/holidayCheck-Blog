import Remarkable from 'remarkable';
import hljs from 'highlight.js';

const markdownRenderer = new Remarkable('full', {
  typographer: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return hljs.highlightAuto(str).value || '';
  },
});

// const Markdown = children => <article dangerouslySetInnerHTML={{ __html: markdownRenderer.render(children) }} />

export default markdownRenderer;
