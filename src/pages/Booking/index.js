
import React, { Fragment, useEffect, useState } from "react";
import './index.css'
export default function BookingPage(props) {
  let { thongTinPhongVe, danhSachGheDangDat, setDanhSachGheDangDat } = props;
  const renderGhe = (daDat, ghe) => {
    if (daDat) {
      return <i className="fa-solid fa-couch slot__item item_browser"></i>;
    } else {
      let gheDangDat0 = "";

      let index = danhSachGheDangDat?.findIndex(
        (gheDangDat) => gheDangDat.stt === ghe.stt
      );
      if (index !== -1) {
        gheDangDat0 = "item_selected";
      }
      let gheVip0 = "";
      if (ghe.loaiGhe === "Vip") {
        gheVip0 = "item_vip";
      }
      return (
        <i
          className={`fa-solid fa-couch slot__item ${gheVip0} ${gheDangDat0}`}
          onClick={() => {
            datGhe(ghe);
          }}
        ></i>
      );
    }
  };
  const datGhe = (ghe) => {
    let index = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.stt === ghe.stt
    );
    if (index !== -1) {
      danhSachGheDangDat.splice(index, 1);
    } else {
      danhSachGheDangDat = [...danhSachGheDangDat, ghe];
    }
    setDanhSachGheDangDat([...danhSachGheDangDat]);
  };
  const renderDanhSachGhe = () => {
    let { danhSachGhe } = thongTinPhongVe;
    return danhSachGhe?.map((ghe, index) => {
      return <Fragment key={index}>{renderGhe(ghe.daDat, ghe)}</Fragment>;
    });
  };
  //time giữ ghế
  const [counter, setCounter] = useState(60 * 5);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      alert("Quá thời gian chọn ghế!", {
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [counter]);
  return (
    <div className="checkOut__left col-md-9 col-sm-12 p-0">
      <div className="bookSlot">
        <div
          className="poster__film"
          style={{
            backgroundImage: "url(https://previews.123rf.com/images/olegdudko/olegdudko1907/olegdudko190705921/128026353-movie-clapper-and-film-reel-on-a-wooden-background.jpg)",
          }}
        >
          <div className="overlay" />
        </div>
        <div className="bookSlot__content">
          <div className="theater__info d-flex justify-content-between">
            <div className="theater__img d-flex bg-light">
              <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} alt="hinhanh" />
              <div className="theater__name">
                <span className="name">
                  <span className="subname">
                    {/*  */}
                  </span>
                </span>
                <p className="showtime">
                  Giờ chiếu: {/* */}
                </p>
              </div>
            </div>
            <div className="timeKeepSlot">
              <p className="title__text">thời gian giữ ghế:</p>
              <span className="time">{counter + "s"}</span>
            </div>
          </div>
          <div className="chooseSlot">
            <div className="screen__img">
              <img src="https://i.ibb.co/zWgWjtg/screen.png" alt="screen" />
            </div>
            <div className="picking row">
              <div className="slot__picking col-12">
                <div className="slot__row">{renderDanhSachGhe()}</div>
              </div>
            </div>
            <div className="slot__detail row">
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa-solid fa-couch item_selected" />
                <span className="slot__text">Ghế đang chọn</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa-solid fa-couch item_browser" />
                <span className="slot__text">Ghế đã chọn</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa-solid fa-couch item_empty" />
                <span className="slot__text">Ghế chưa chọn</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa-solid fa-couch item_vip" />
                <span className="slot__text">Ghế Vip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
