import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminPage from './pages/admin';
import DetailMoviePage from './pages/DetailMovie';
import HomePage from './pages/Home';
import { HomeTemplate } from './template/HomeTemplate';
import UserTemplate from './template/UserTemplate';
import BookingPage from './pages/Booking';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import RegisterPage from './pages/Register';
import LoadingSpinner from './components/isLoading';

export const history = createBrowserHistory()
// set up redux
// import {store} from './redux/confgStore' ; 
// import {Provider} from 'react-redux' ; 

function App() {
  return (  
      <Router history={history} >
        <LoadingSpinner/>
        <Switch>
          <HomeTemplate exact path="/" component={HomePage}></HomeTemplate>
          <Route exact path="/admin" component={AdminPage}></Route>
          <HomeTemplate exact path="/home" component={HomePage}></HomeTemplate>
          {/* Detai và Đặt vé xài chung userTemplate */}
          <UserTemplate exact path="/detail/:maPhim" component={DetailMoviePage}></UserTemplate>
          <UserTemplate exact path="/profile" component={UserProfile}></UserTemplate>
          <UserTemplate exact path="/login" component={Login}></UserTemplate>
          <UserTemplate exact path="/register" component={RegisterPage}></UserTemplate>
          <UserTemplate exact path="/ticketroom/:maLichChieu" component={BookingPage}></UserTemplate>
        </Switch>
      </Router>

  );
}

export default App;

/**
 * axios , redux , redux-thunk , formik , yup , react-router-dom , react-boostrap , react-icon , history
 */
