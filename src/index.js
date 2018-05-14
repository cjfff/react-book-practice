import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
// const renderContent = (str) => {
//   ReactDOM.render(<h1>{str}</h1>, document.getElementById('root'));
// }
// renderContent('hello world')

if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
  })
}
// registerServiceWorker();
