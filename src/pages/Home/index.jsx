import React from 'react'
import FormBooking from '../../components/Form/FormBooking'
import News from '../../components/News'
import Promotion from '../../components/Promotion'
import SliderComponent from '../../components/Slider'
import TabsMovie from '../../components/Tabs'
import TabCinema from '../../components/TabsCinema'
import './index.css'
export default function HomePage() {
  return (
    <div className='homepage'>
      <SliderComponent/>
      <FormBooking/>
      <TabsMovie/>
      <TabCinema/>
      <News/>
      <Promotion/>
    </div>
  )
}
