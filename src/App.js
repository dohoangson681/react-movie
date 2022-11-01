import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Router , Route , Switch} from 'react-router-dom' ; 
import {createBrowserHistory} from 'history' ; 
import { Fragment } from 'react';

// set up redux
import {store} from './redux/confgStore' ; 
import {Provider} from 'react-redux' ; 

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <h1 className='text-center text-success'>Hello Anh Em !</h1>
    </div>
    </Provider>
  );
}

export default App;

/**
 * axios , redux , redux-thunk , formik , yup , react-router-dom , react-boostrap , react-icon , history
 */
