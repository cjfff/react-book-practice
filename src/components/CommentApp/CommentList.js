import React from 'react'
import PropTypes from 'prop-types'
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
            <Comment
              comment={comment}
              key={index}
              index={index}
              onDeleteComment={this.props.handleDeleteComment}
              />
          ))
          : null
        }
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  onDeleteComment: PropTypes.func
}

export default CommentList;
