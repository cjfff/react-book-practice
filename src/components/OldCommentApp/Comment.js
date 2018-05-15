import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {

  render() {
    const { comment } = this.props;

    return (
      <div className="comment">
        <div className="comment-user">
          <span>{ comment.username }</span>
           ：
        </div>
        <p>{ comment.content }</p>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment;
