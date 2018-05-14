import React, { Component } from 'react';
// import Header from '@/components/header';
// import LikeButton from '@/components/button';
// <Header></Header>
// <LikeButton likedText="点赞" unlikedText="取消点赞" onClick={ () => console.log('click button')}/>
// import CommentApp from '@/components/CommentApp/';
// <CommentApp />
import ParcentApp from '@/components/parcent/';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <ParcentApp />
      </div>
    );
  }
}

export default App;
