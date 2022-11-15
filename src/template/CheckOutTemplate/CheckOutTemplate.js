import React from 'react'
import { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { USER_LOGIN } from '../../util/setting'

export default function CheckOutTemplate(props) {
    // if(!localStorage.getItem(USER_LOGIN)){
    //     return <Redirect to='/login'/>
    // }
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment >

            <props.component {...propsRoute} />
        </Fragment>
    }
    } />
}
