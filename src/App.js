
import './App.css';
import {BrowserRouter , Router , Route , Switch} from 'react-router-dom' ; 
import {createBrowserHistory} from 'history' ; 
import { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer' ; 

import RegisterPage from './pages/Register';
import AdminPage from './pages/admin';

// set up redux
// import {store} from './redux/confgStore' ; 
// import {Provider} from 'react-redux' ; 

function App() {
  return (
    
    <div>
      <Header/>
      {/* <Footer/> */}
      <BrowserRouter>
        <Route path='/admin' component={AdminPage} />
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

/**
 * axios , redux , redux-thunk , formik , yup , react-router-dom , react-boostrap , react-icon , history
 */
