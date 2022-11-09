
import './App.css';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import RegisterPage from './pages/Register';
import AdminPage from './pages/admin';

import SliderComponent from './components/Slider';
import FormBooking from './components/Form/FormBooking';
import TabsMovie from './components/Tabs';
import TabCinema from './components/TabsCinema';
import News from './components/News';
import Promotion from './components/Promotion';
// import BackToTop from "react-back-to-top-button";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

// set up redux
// import {store} from './redux/confgStore' ; 
// import {Provider} from 'react-redux' ; 

function App() {
  return (

    <div>
      <Header />
      {/* <Footer/> */}
      <BrowserRouter>
        <Route path='/admin' component={AdminPage} />
      </BrowserRouter>
      <SliderComponent />
      <FormBooking />
      <TabsMovie />
      <TabCinema />
      <News />
      <Promotion />
      <Footer />
      {/* <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span><BsFillArrowUpSquareFill style={{color:'#a0d911'}}/></span>
      </BackToTop> */}
    </div>

  );
}

export default App;

/**
 * axios , redux , redux-thunk , formik , yup , react-router-dom , react-boostrap , react-icon , history
 */
