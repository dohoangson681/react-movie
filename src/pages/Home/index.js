import React from 'react'
// import Footer from '../../components/Footer'
import FormBooking from '../../components/Form/FormBooking'
// import Header from '../../components/Header'
import News from '../../components/News'
import Promotion from '../../components/Promotion'
import ScrollToTop from '../../components/ScrollToTop'
import SliderComponent from '../../components/Slider'
import TabsMovie from '../../components/Tabs'
import TabCinema from '../../components/TabsCinema'
import './index.css'
export default function HomePage() {
  return (
    <div>
      <SliderComponent/>
      <FormBooking/>
      <TabsMovie/>
      <TabCinema/>
      <News/>
      <Promotion/>
      {/* <ScrollToTop/> */}
    </div>
  )
}
