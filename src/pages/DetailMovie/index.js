import React from 'react'
import Detail from './Detail'
import './index.css'
import TabsDetailCinema from './TabDetail'

export default function DetailMoviePage() {
  return (
    <div className='detail-container' >
      <Detail/>
      <TabsDetailCinema/>
    </div>
  )
}
