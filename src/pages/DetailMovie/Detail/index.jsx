import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiTicket } from "react-icons/gi";
import './index.css'

export default function Detail() {
    // api https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=10484
    return (
        <div className="detail">
            <div className="detail-movies">
                <Container className='pt-5'>
                    <Row >
                        <Col xs={12} md={5}>
                            <div className='img-movie'>
                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/the-shawshank-redemption_gp01.jpg" alt="" />
                            </div>
                            <div className='detail-trailer mt-3'>
                                <h5 className='mb-2'>Trailer</h5>
                                <iframe src="https://www.youtube.com/embed/xqY59FOcUy8" frameBorder="0"></iframe>
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <h4 className='detail-title'>The Shawshank Redemption</h4>
                            <div className='detail-span py-3'>
                                <span>Phim Đang Chiếu</span>
                                <span>IMDb: 9.3/10</span>
                                <span>C18</span>
                                <span>Tâm lý</span>
                            </div>
                            <p className='description-movie'>Todd Hewwitt (Tom Holland) tình cờ phát hiện ra Viola (Daisy Ridley)- một cô gái sống sót sau khi phi thuyền của cô gặp nạn và rơi xuống hành tinh của cậu. Hành tinh này không hề có bóng dáng phụ nữ, còn đàn ông thì bị ảnh hưởng bởi 'Tiếng Ồn' - một thế lực thể hiện toàn bộ suy nghĩ của họ ra bên ngoài. Vì là cô gái duy nhất trên hành tinh kì lạ này, tính mạng của Viola bị đe dọa. Todd quyết tâm bảo vệ Viola và cả hai bị cuốn vào cuộc phiêu lưu nguy hiểm. Từ đó, Todd dần khám phá ra năng lực đặc biệt của mình, và phát hiện ra những bí mật đen tối của hành tinh mà cậu đang sống.</p>
                            <div className='detail-director py-3'>
                                <h5 className='mb-3'>Đạo Diễn: <span >Frank Darabont</span></h5>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Frank_Darabont_at_the_PaleyFest_2011_-_The_Walking_Dead_panel.jpg/300px-Frank_Darabont_at_the_PaleyFest_2011_-_The_Walking_Dead_panel.jpg" alt="" />
                            </div>
                            <div className='detail-cast'>
                                <h5 >Diễn Viên:</h5>
                                <p className='py-2'>Al Pacino, Marlon Brando,James Caan, Richard S. Castellano,…</p>
                            </div>

                            <div>
                                <button className='btn-detail' style={{ marginLeft: '20px' }}><GiTicket />MUA VÉ NGAY</button>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}
