import React from 'react'
import Modal from 'react-bootstrap/Modal';

import { AiOutlineCloseCircle } from "react-icons/ai";
import './index.css'

export default function SliderTrailer(props) {
    console.log(props);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <AiOutlineCloseCircle className='trailer-icon__close' onClick={props.onHide} />
                {/* gắn tạm link để test */}
                <iframe src='https://www.youtube.com/embed/2Qcg6ZaSj8A'
                    allowFullScreen
                    frameBorder="0"
                    allow="autoplay"
                    title="trailer "></iframe>
            </Modal.Body>
        </Modal>
    )
}
