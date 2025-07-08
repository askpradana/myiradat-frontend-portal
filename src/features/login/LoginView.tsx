'use client';

import { Form, Input, Checkbox, Button, Typography } from 'antd';
import { useLoginViewModel } from './LoginViewModel';

const { Title, Text, Link } = Typography;

export default function LoginPage() {
  const { form, onSubmit } = useLoginViewModel();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">
            <span className="text-gray-500">MY</span>
            <span className="text-green-500">IRADAT</span>
          </h1>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <Title level={4} style={{marginBottom : '0'}}>Log in to your account</Title>
          <Text type="secondary">Welcome back! Please enter your details.</Text>
        </div>

        {/* Form (Controlled by AntD) */}
        <Form
          form={form}
          layout="vertical"
          initialValues={{ email: '', password: '', remember: false }}
          onFinish={onSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email format' },
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter your password" size="large" />
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
           <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember</Checkbox>
            </Form.Item>
            <Link href="#" className="text-green-600 text-sm">
              Forgot password
            </Link>
          </div>

          <Form.Item className="flex flex-col gap-3">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="mb-4"
              block
            >
              Confirm
            </Button>
            <Button size="large" htmlType="button" block>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
