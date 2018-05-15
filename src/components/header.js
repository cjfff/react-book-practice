import React from 'react'
import PropTypes from 'prop-types'

// class Header extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>React 小书</h1>
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render () {
//     return (
//       React.createElement(
//         'div',
//         null,
//         React.createElement(
//           'h1',
//           { className: 'title' },
//           "React 小书"
//         )
//       )
//     )
//   }
// }

const Title = ({ click }) => (
    <h1 className="title" onClick={ click }>React 小书</h1>
)


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickOnTitle = this.handleClickOnTitle.bind(this);
  }

  componentWillMount() {
    console.log(' componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClickOnTitle (e) {
    console.log('Click on title', e.target.innerHTML);
  }

  render() {
    console.log('render');
    return (
      <div >
        <Title click={ this.handleClickOnTitle }/>
        <h2>This is Header</h2>
      </div>
    );
  }
}

const Main = () => (
  <div >
    <h2>Ths is main content</h2>
  </div>
)

const Footer = () => (
  <div>
    <h2>This is footer</h2>
  </div>
)

// const Index = () => (
//   <div>
//     <Header />
//     <Main />
//     <Footer />
//   </div>
// )

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true
    }
  }

  handleShowOrHide () {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }

  render () {
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}



export default Index;
