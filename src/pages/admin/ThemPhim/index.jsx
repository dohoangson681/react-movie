import React, { useState } from "react";
import { useFormik } from 'formik';
import "./index.css";
import moment from 'moment';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch } from "react-redux";
import { themPhimAdmin } from "../../../redux/action/movieAction/QuanLyPhimAction";


export default function ThemPhimAdmin() {

  const [componentSize, setComponentSize] = useState("default");
  const [scrImage , setSrc] = useState(null) ; 
  const dispatch = useDispatch() ;
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
     tenPhim : '',
     trailer : '',
     moTa : '' ,
     ngayKhoiChieu : '' ,
     dangChieu : false ,
     sapChieu : false ,
     hot : false ,
     danhGia : '',
     hinhAnh : {}
    },
    onSubmit: values => {
      // console.log(values) ; 
      // tao du lieu form data
      let formData = new FormData() ; 
      // formData.append('nameFiled' , value) ; 
      formData.append('tenPhim' , formik.values.tenPhim ) ; 
      // console.log('form data' , formData.get('tenPhim')) ; 
      // doi voi file
      // formData.append('File' , value , filename) 
      formData.append('File' , formik.values.hinhAnh , formik.values.hinhAnh.name ) ; 
      console.log('file'  , formData.get('File')) ; 
      for (const key in values) {
        if(key === 'hinhAnh') {
          formData.append('image file' , values[key] , values[key].name ) ; 
        }else {
          formData.append(key , values[key]) ; 
        }
      }
      // for(const key in values) {
      //   if(key === 'hinhAnh') {
      //     console.log('key ',formData.get('image file')) ; 
      //   }else console.log('key ',formData.get(key)) ; 
        
      // }
      // TODO goi api 
      let action = themPhimAdmin(formData) ;
      dispatch(action) ; 
    },
  });

  const hanldeChangeDate = (values) => {
    // console.log(values) ; 
    let nkc = moment(values).format('DD/MM/YYYY') ; 
    // console.log(nkc) ; 
    formik.setFieldValue('ngayKhoiChieu' , nkc ) ; 
  }

  const hanldeChangSwitch = (name) => {
        
      return values => {
        console.log(values) ; 
        formik.setFieldValue(name , values )
      } ;
  }

  const handleChangeNumber = name => {
    return value => {
      formik.setFieldValue(name , value) ; 
    }
  }

  return (
    <Form
    onSubmitCapture={formik.handleSubmit}
        style={{
            minHeight : '560px'
        }}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size='large'
    >
     
      <h2 className="text-center text-primary ">Thêm phim mới</h2>
      <Form.Item label="Tên phim">
        <Input  
        onChange={formik.handleChange}
        value={formik.values.tenPhim}
        name="tenPhim" 
        />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input
        onChange={formik.handleChange}
        value={formik.values.trailer}
        name="trailer" 
        />
      </Form.Item>
      <Form.Item label="Mô tả">
          <TextArea
          name="moTa"
          onChange={formik.handleChange}
          value={formik.values.moTa}
           rows={4} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
        <DatePicker format='DD-MM-YYYY' onChange={hanldeChangeDate} />
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch onChange={hanldeChangSwitch('dangChieu' )} />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={hanldeChangSwitch('hot' )} />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch onChange={hanldeChangSwitch('sapChieu' )} />
      </Form.Item>
      <Form.Item label="Đánh giá">
        <InputNumber onChange={handleChangeNumber('danhGia')} min={0} max={10} />
      </Form.Item>
      <Form.Item label="Hình ảnh">
       <input accept="image/png, image/gif, image/jpeg"  onChange={(e)=>{
        let file = e.target.files[0] ;
        console.log(file) ;  
        // tao doi tuong doc file
        if(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpeg'  ) {
          let read = new FileReader() ; 
          read.readAsDataURL(file) ; 
          read.onload = (e => {
          console.log(e.target.result) ; 
          setSrc(e.target.result) ; 
        })
        }
        formik.setFieldValue('hinhAnh' , file) ; 

       }} type="file" />
      {scrImage ?  <img style={{width :'200px', marginTop :'20px'  , boxShadow : 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} src={scrImage} alt="imgimgimgimg"  /> : null}
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Thêm phim
        </Button>
      </Form.Item>
    </Form>
  );
}
