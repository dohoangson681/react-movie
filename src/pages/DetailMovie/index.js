import React from 'react'
import Footer from '../../components/Footer'
import Detail from './Detail'
import HeaderDetail from './Header'
import './index.css'
import TabsDetailCinema from './TabDetail'
export default function DetailMoviePage() {
  return (
    <div>
      <HeaderDetail/>
      <Detail/>
      <TabsDetailCinema/>
      <Footer/>
    </div>
  )
}
