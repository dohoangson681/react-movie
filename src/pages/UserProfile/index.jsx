import React from 'react';
import { Redirect } from 'react-router-dom';
import { USER_LOGIN } from '../../util/setting';
import './index.css';

export default function UserProfile() {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to='/login' />
  }
  return (
    <div>UserProfile</div>
  )
}
