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

  handleSubmit(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入内容')
    const { commentList } = this.state;
    commentList.push(comment)
    this.setState({
      commentList
    })
    console.log(comment);
  }


  render () {

    const { commentList } = this.state;
    return (
      [
        <CommentInput handleSubmit={this.handleSubmit}/>,
        <CommentList commentList={commentList}/>
      ]
    )
  }
}

export default CommentApp;
