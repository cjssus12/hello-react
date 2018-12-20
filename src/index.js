import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; //src폴더 아래 components폴더를 만들고 그 안에 App.js파일을 만들었으므로 기존 
//./App을 불러오는게 아닌 경로를 수정해서 해당 폴더 안의 App.js를 선택

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
