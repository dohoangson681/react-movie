import React, { useState } from "react";
import "./index.css";
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

export default function ThemPhimAdmin() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
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
      {/* <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item> */}
      <h2 className="text-center text-primary ">Thêm phim mới</h2>
      <Form.Item label="Tên phim">
        <Input name="tenPhim" />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" />
      </Form.Item>
      {/* <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item> */}
      {/* <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [
                {
                  title: "Bamboo",
                  value: "bamboo",
                },
              ],
            },
          ]}
        />
      </Form.Item> */}
      <Form.Item label="Mô tả">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
        <DatePicker />
      </Form.Item>
      {/* <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item> */}
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Đánh giá">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Hình ảnh">
       <input type="file" />
      </Form.Item>
      {/* <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item> */}
    </Form>
  );
}
