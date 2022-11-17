import { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index'
import ScrollToTop from '../../components/ScrollToTop';



export const HomeTemplate = (props) => {
    useEffect(() => { 
        window.scrollTo(0,0)
     },[])
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <props.component {...propsRoute} />
            <Footer/>
            <ScrollToTop/>
        </Fragment>
    }
    } />
}