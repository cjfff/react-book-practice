import React from 'react'
// import PropTypes from 'prop-types'
import Comment from './Comment';

class CommentList extends React.Component {
  static defaultProps = {
    commentList: []
  }

  render() {
    const { commentList } = this.props;

    return (
      <div className="comment-list">
        {
          commentList.length ?
          commentList.map((comment, index) => (
            <Comment comment={comment} key={index}></Comment>
          ))
          : null
        }
      </div>
    );
  }
}

export default CommentList;
