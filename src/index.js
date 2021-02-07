import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
// import StoreContext, { Provider } from './StoreContext';
import {Provider} from 'react-redux';


// let rerenderEntire = (state) =>{
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App/>,
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
// };



// rerenderEntire(store.getState());
// store.subscribe(()=>{
//   let state = store.getState();
//   rerenderEntire(state);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
