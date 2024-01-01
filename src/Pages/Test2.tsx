import React from "react";
import { Form, Input, Button, Select, Row, Col, Radio, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { addFormData } from "../redux/formDataSlice";
import TableComponent from "../components/TableComponent";
import "./Test2.scss";

const { Option } = Select;

const Test2 = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onReset = () => {
    form.resetFields();
  };

  const phone_prefixSelector = (
    <Form.Item name="phone_prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="66">+66</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log("Received values:", values);
    // dispatch(addFormData(values));
  };

  return (
    <>
      <div className="section1">
        <div
          className="form_container"
          style={{ maxWidth: "900px", margin: "auto" }}
        >
          <h2> จัดการหน้าฟอร์ม </h2>{" "}
          <Form
            form={form}
            onFinish={onFinish}
            className="form_data"
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={4}>
                <Form.Item
                  name="prefix"
                  label="Prefix"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                  >
                    <Option value="Mr.">Mr</Option>
                    <Option value="Mrs.">Mrs</Option>
                    <Option value="Miss.">Miss</Option>
                  </Select>
                </Form.Item>
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
              <Col span={10}>
                <Form.Item
                  label="Date of Birth"
                  name="dateOfBirth"
                  rules={[{ required: true }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>{" "}
              <Col span={10}>
                <Form.Item
                  name="nationality"
                  label="สัญชาติ"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="--กรุณาเลือก--" allowClear>
                    <Option value="Thai nationality">สัญชาติไทย</Option>
                  </Select>
                </Form.Item>
              </Col>{" "}
            </Row>{" "}
            <Row gutter={16}>
              <Col span={20}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true }]}
                >
                  <Radio.Group>
                    <Radio value="male">male</Radio>
                    <Radio value="female">female</Radio>
                    <Radio value="other">other</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>{" "}
            </Row>{" "}
            <Form.Item label="ID Card Number" name="idCardNumber">
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                addonBefore={phone_prefixSelector}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit{" "}
              </Button>{" "}
            </Form.Item>{" "}
          </Form>{" "}
        </div>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <TableComponent />
        </div>{" "}
      </div>
    </>
  );
};

export default Test2;
