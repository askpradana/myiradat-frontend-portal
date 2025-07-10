"use client";

import { Card, Form, Input, Button, Row, Col } from "antd";

const EditUserView = () => {
  const [form] = Form.useForm();

  const userData = {
    name: "Putra Iradat",
    email: "putra@example.com",
    no_hp: "081234567890",
  };

  const handleSubmit = (values: any) => {
    console.log("Updated User Data:", values);
  };

  return (
    <Card title="Edit User" className="shadow-md">
      <Form
        layout="vertical"
        form={form}
        initialValues={userData}
        onFinish={handleSubmit}
      >
        <Row gutter={[16, 16]}>
          <Col md={24} xs={24}>
            <Form.Item
              name="name"
              label="Nama Lengkap"
              rules={[{ required: true, message: "Nama wajib diisi" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Email wajib diisi" },
                { type: "email", message: "Format email tidak valid" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              name="no_hp"
              label="No. Handphone"
              rules={[{ required: true, message: "No. HP wajib diisi" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              name="password"
              label="Password Baru"
              rules={[{ required: true, message: "Password wajib diisi" }]}
            >
              <Input.Password size="large" />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              name="confirmPassword"
              label="Konfirmasi Password"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Mohon konfirmasi password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Password tidak cocok"));
                  },
                }),
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end" className="mt-4">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Simpan
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default EditUserView;
