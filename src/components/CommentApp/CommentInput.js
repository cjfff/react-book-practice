import React from 'react'
// import PropTypes from 'prop-types'

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: ''
    }
    this.handleUserChange = this.handleValueChange.bind(this, 'username');
    this.handleContentChange = this.handleValueChange.bind(this, 'content');
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillMount() {
    this._loadUserName();
  }

  componentDidMount() {
    this.textarea.focus();
  }

  _loadUserName() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({
        username
      })
    }
  }

  _saveUsername(username) {
    localStorage.setItem('username', username);
  }


  handleValueChange(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }

  handleUsernameBlur(event) {
    this._saveUsername(event.target.value);
  }

  handleSubmit() {
    if (this.props.handleSubmit) {
      const { username, content } = this.state
      this.props.handleSubmit({username, content, createTime: +new Date()})
    }

    this.setState({
      content: ''
    })
  }



  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              onBlur={this.handleUsernameBlur.bind(this)}
              value={this.state.username}
              onChange={this.handleUserChange}/>
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
               ref={(textarea) => this.textarea = textarea}
               value={this.state.content}
               onChange={this.handleContentChange}/>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
