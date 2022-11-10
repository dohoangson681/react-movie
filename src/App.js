
import './App.css';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import SliderComponent from './components/Slider';
import FormBooking from './components/Form/FormBooking';
import TabsMovie from './components/Tabs';
import TabCinema from './components/TabsCinema';
import News from './components/News';
import Promotion from './components/Promotion';
import RegisterPage from './pages/Register';
import AdminPage from './pages/admin';
// import BackToTop from "react-back-to-top-button";
import DetailMoviePage from './pages/DetailMovie';
import HomePage from './pages/Home';
import { HomeTemplate } from './template/HomeTemplate';
import UserTemplate from './template/UserTemplate';
import BookingPage from './pages/Booking';

import { BsFillArrowUpSquareFill } from "react-icons/bs";
export const history = createBrowserHistory()


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
      <Router history={history} >
        <Switch>
          <HomeTemplate exact path="/" component={HomePage}></HomeTemplate>
          <Route exact path="/admin" component={AdminPage}></Route>
          <HomeTemplate exact path="/home" component={HomePage}></HomeTemplate>
          {/* Detai và Đặt vé xài chung userTemplate */}
          <UserTemplate exact path="/detail" component={DetailMoviePage}></UserTemplate>
          <UserTemplate exact path="/ticketroom" component={BookingPage}></UserTemplate>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

/**
 * axios , redux , redux-thunk , formik , yup , react-router-dom , react-boostrap , react-icon , history
 */
