import React from 'react'
// import PropTypes from 'prop-types'
import CommentInput from './CommentInput';
import CommentList from './CommentList';


class CommentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this._loadComponents()
  }

  _loadComponents() {
    let comments = localStorage.getItem('comments');
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ commentList: comments })
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  handleSubmit(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入内容')
    const { commentList } = this.state;
    commentList.push(comment)
    this.setState({
      commentList
    })
    this._saveComments(commentList);
    console.log(comment);
  }

  handleDeleteComment(index) {
    console.log(index , '======');
    const { commentList } = this.state;
    commentList.splice(index, 1);
    this.setState({
      commentList
    })
    this._saveComments(commentList)
  }


  render () {

    const { commentList } = this.state;
    return (
      [
        <CommentInput handleSubmit={this.handleSubmit} key="input"/>,
        <CommentList
          key="list"
          commentList={commentList}
          handleDeleteComment={this.handleDeleteComment.bind(this)} />
      ]
    )
  }
}

export default CommentApp;
