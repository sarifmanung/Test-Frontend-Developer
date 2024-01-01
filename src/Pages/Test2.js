// Test2.js
import React from "react";
import { Form, Input, Button, Select, Row, Col, Radio } from "antd";
import { useDispatch } from "react-redux";
import { addFormData } from "../redux/formDataSlice";
import TableComponent from "../components/TableComponent";

const { Option } = Select;

const Test2 = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Received values:", values);
    dispatch(addFormData(values));
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <h1> Ant Design Form </h1>{" "}
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item label="Prefix" name="prefix">
              <Select placeholder="Select a prefix">
                <Option value={"Mr."}> นาย </Option>{" "}
                <Option value={"Mrs."}> นาง </Option>{" "}
                <Option value={"Miss."}> นางสาว </Option>{" "}
              </Select>{" "}
            </Form.Item>{" "}
          </Col>{" "}
          <Col span={10}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input />
            </Form.Item>{" "}
          </Col>{" "}
          <Col span={10}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input />
            </Form.Item>{" "}
          </Col>{" "}
        </Row>{" "}
        <Row gutter={16}>
          <Col span={20}>
            <Form.Item label="Gender" name="gender">
              <Radio.Group>
                <Radio value="ผู้ชาย"> ผู้ ชาย </Radio>{" "}
                <Radio value="ผู้หญิง"> ผู้ หญิง </Radio>{" "}
                <Radio value="ไม่ระบุ"> ไม่ ระบุ </Radio>{" "}
              </Radio.Group>{" "}
            </Form.Item>{" "}
          </Col>{" "}
        </Row>{" "}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit{" "}
          </Button>{" "}
        </Form.Item>{" "}
      </Form>{" "}
      <div>
        <h2> Table </h2> <TableComponent /> {/* Use the TableComponent here */}{" "}
      </div>{" "}
    </div>
  );
};

export default Test2;
