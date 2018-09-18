import { string, bool, instanceOf } from 'prop-types';

const postPropTypes = {
  id: string.isRequired,
  fetching: bool.isRequired,
  error: bool.isRequired,
  message: string.isRequired,
  title: string.isRequired,
  markdown: string.isRequired,
  date: instanceOf(Date).isRequired,
};

export default postPropTypes;
