import React, { Component } from 'react';
// import Header from '@/components/header';
import Clock from '@/components/clock';
// import LikeButton from '@/components/button';
// <Header></Header>
// <LikeButton likedText="点赞" unlikedText="取消点赞" onClick={ () => console.log('click button')}/>
import CommentApp from '@/components/CommentApp/';

// import ParcentApp from '@/components/parcent/';

class Post extends Component {

  handleClick() {
    console.log(this.refs.c.scrollHeight)
  }

  render () {
    return (<p ref="c" onClick={ () => this.handleClick()}>{this.props.content}</p>)
  }
}


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <CommentApp />
         <Clock />
      </div>
    );
  }
}

export default App;
