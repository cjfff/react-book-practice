import React from 'react'
import PropTypes from 'prop-types'

class LikeButton extends React.Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor () {
    super();
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    console.log(this.state.isLiked)
      this.setState({
        isLiked: !this.state.isLiked
      })
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render () {
    const likedText = this.props.likedText
    const unlikedText = this.props.unlikedText

    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? unlikedText : likedText} 👍
      </button>
    )
  }
}

export default LikeButton;
