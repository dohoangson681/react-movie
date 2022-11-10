import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css'
import BookingChair from './Booking-Chair';
import BookingTicket from './Booking-Ticket';
export default function BookingPage() {
  return (
    <div className='booking'>
      <Container>
        <Row>
          <Col  md={12} lg={9}>
            <BookingChair/>
          </Col>
          <Col  md={12} lg={3}>
            <BookingTicket/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
