import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { Route } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'
import HeaderDetail from '../../pages/DetailMovie/Header'


export default function UserTemplate(props) {
    useEffect(() => { 
        window.scrollTo(0,0)
     },[])
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment >
            <HeaderDetail/>
            <props.component {...propsRoute} />
            <ScrollToTop/>
        </Fragment>
    }
    } />
}
