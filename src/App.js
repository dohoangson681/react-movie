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
import { AdminTemplate } from './template/AdminTemplate';
import AdminUser from './pages/admin/User';
import ShowtimeAdmin from './pages/admin/Showtime';
import AdminMovie from './pages/admin/Movie';
import AdminLogin from './pages/admin/Login';
import UpdateAccAdmin from './pages/admin/Update';

import RegisterPage from './pages/Register';
import LoadingSpinner from './components/isLoading';
import NotFound from './pages/NotFound';

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
          <AdminTemplate exact path="/admin" component={AdminMovie}></AdminTemplate>
          <AdminTemplate exact path="/admin/phim-admin" component={AdminMovie}></AdminTemplate>
          <AdminTemplate exact path="/admin/user-admin" component={AdminUser}></AdminTemplate>
          <AdminTemplate exact path="/admin/showtime-admin" component={ShowtimeAdmin}></AdminTemplate>
          <AdminTemplate exact path="/admin/acc-update" component={UpdateAccAdmin}></AdminTemplate>
          <Route exact path='/admin/login' component={AdminLogin} />
          <HomeTemplate exact path="/home" component={HomePage}></HomeTemplate>
          {/* Detai và Đặt vé xài chung userTemplate */}
          <UserTemplate exact path="/detail/:maPhim" component={DetailMoviePage}></UserTemplate>
          <UserTemplate exact path="/profile" component={UserProfile}></UserTemplate>
          <UserTemplate exact path="/login" component={Login}></UserTemplate>
          <UserTemplate exact path="/register" component={RegisterPage}></UserTemplate>
          <UserTemplate exact path="/ticketroom/:maLichChieu" component={BookingPage}></UserTemplate>
          <UserTemplate path="*" component={NotFound}></UserTemplate>
        </Switch>
      </Router>

  );
}

export default App;

/**
 * axios , redux , redux-thunk , formik , yup , react-router-dom , react-boostrap , react-icon , history
 */
