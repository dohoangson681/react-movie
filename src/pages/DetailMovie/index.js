import React from 'react'
import DetailMovie from './Detail'
import './index.css'
import TabsDetailCinema from './TabDetail'

export default function DetailMoviePage(props) {
  return (
    <div className='detail-container' >
      <DetailMovie maPhim={props.match.params.maPhim}/>
      <TabsDetailCinema maPhim={props.match.params.maPhim}/>
    </div>
  )
}
