import { objectOf, shape } from 'prop-types';
import postPropTypes from '../../components/Post/propTypes';

const postsPropTypes = {
  posts: objectOf(shape(postPropTypes)).isRequired,
};

export default postsPropTypes;
