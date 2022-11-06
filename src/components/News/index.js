import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike, AiOutlineEye, AiFillStar } from "react-icons/ai";
import './index.css'

export default function News() {
    return (
        <div className='news' id='news'>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={6} className='pt-3'>
                        <h4 className='new-title'>Bình Luận Phim</h4>
                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src="https://znews-photo.zingcdn.me/w660/Uploaded/rohunaa/2022_10_20/z3815636905196_3b60785620f60d5667a81f3417188929.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>[Review] Black Adam: Cứu Tinh Cho Vũ Trụ DC Mở Rộng?</h5>
                                    <div className='d-none d-md-flex justify-content-lg-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 1,8k</button> <button className='new-eye'><AiOutlineEye />1159</button> <span className='new-star'><AiFillStar />8.0/10</span>
                                    </div>
                                    <p>15 năm kể từ ngày được chọn diễn Black Adam, Dwayne Johnson và các nhà làm phim WB rốt cuộc đã thành côn</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src="https://nld.mediacdn.vn/2020/2/10/8618890327018390965724584421006822152863744o-15813208815042102479379.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>[Review] Cô Gái Từ Quá Khứ: Đạp Đổ Hoàn Toàn Gái Già Lắm Chiêu?</h5>
                                    <div className='d-none d-md-flex justify-content-lg-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 3,4k</button> <button className='new-eye'><AiOutlineEye />5289</button> <span className='new-star'><AiFillStar />7.3/10</span>
                                    </div>
                                    <p>Cô Gái Từ Quá Khứ mở màn Vũ trụ Mỹ Nhân thành công nhưng lại "vắt chanh bỏ vỏ” Vũ trụ Gái Già?</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src="https://static.vieon.vn/vieplay-image/thumbnail_v4/2021/01/05/wtk9qmeg_1_horizontal-thumbnail3dec0e4f2ca474c374961c3bd8638571.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>[Review] Em Chưa 18: Tình Yêu Cạm Bẫy 18</h5>
                                    <div className='d-none d-md-flex justify-content-lg-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 1,4k</button> <button className='new-eye'><AiOutlineEye />1289</button> <span className='new-star'><AiFillStar />8.1/10</span>
                                    </div>
                                    <p>Mang màu hài hước, nhưng vẫn có tình cha ấm áp và tình yêu của tuổi 18</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src="https://image.phunuonline.com.vn/fckeditor/upload/2022/20220921/images/avatartrungso.jpg_831663772044.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>[Review] Bỗng Dưng Trúng Số: 120 Phút Cười</h5>
                                    <div className='d-none d-md-flex justify-content-lg-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 3,1k</button> <button className='new-eye'><AiOutlineEye />9289</button> <span className='new-star'><AiFillStar />9.3/10</span>
                                    </div>
                                    <p>Bỗng Dưng Trúng Số sẽ tạo tiếng cười trong vòng 2 tiếng, đem lại sự lạc quan nhất cho người xem.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='pt-3'>
                        <h4 className='new-title'>Blog Điện Ảnh</h4>

                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src=" https://cdn.galaxycine.vn/media/2022/10/5/black-panther-wakanda-forever-boc-tach-trailer-moi-nhat-14_1664954208526.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>Black Panther Wakanda Forever: Bóc Tách Trailer Mới Nhất!</h5>
                                    <div className='d-flex justify-content-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 1,8k</button>
                                    </div>
                                    <p>Hãy cùng phân tích thước phim mới hé lộ điều gì. Tuy nhiên, xin cảnh báo rằng, đừng tin những gì trailer Marvel nói!</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src="https://cdn.galaxycine.vn/media/2022/8/29/may-ngung-quay--ho-van-dien--nhung-ngoi-sao-tan-tam-nhat-9_1661792149954.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>Máy Ngừng Quay, Họ Vẫn Diễn – Những Ngôi Sao Tận Tâm Nhất!</h5>
                                    <div className='d-flex justify-content-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 3,4k</button>
                                    </div>
                                    <p>Những ngôi sao đã cống hiến hết mình để cho ra đời những thước phim huyền thoại trên màn ảnh!</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src="https://cdn.galaxycine.vn/media/2022/8/29/vi-cuu-the-flash--ezra-miller-hua-se-ngoan-4_1661790063741.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>Vì Cứu The Flash, Ezra Miller Hứa Sẽ Ngoan!</h5>
                                    <div className='d-flex justify-content-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 1,4k</button>
                                    </div>
                                    <p>“Chàng Barry hoang đàng” Ezra Miller có cuộc gặp gỡ xoa dịu tinh thần ban lãnh đạo cấp ...</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='news-content'>
                            <Row>
                                <Col xs={5} md={4}>
                                    <img style={{ width: '100%', height: '120px' }} src="https://cdn.galaxycine.vn/media/2022/8/29/nope-khong-phai-mot-phim-kinh-di-de-hieu--9_1661781678436.jpg" alt="" />
                                </Col>
                                <Col xs={7} md={8}>
                                    <h5 className='new-title-movie'>Nope: Không Phải Một Phim Kinh Dị Dễ Hiểu!</h5>
                                    <div className='d-flex justify-content-between py-2'>
                                        <button className='btn-news__like'><AiOutlineLike />Thích 3,1k</button>
                                    </div>
                                    <p>Ban đầu, Jordan Peele muốn tạo được một cảnh tượng thật đặc biệt, khán giả buộc phải ra rạp chiếu phim để xem!</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
