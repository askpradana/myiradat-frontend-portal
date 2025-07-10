import { Avatar, Button, Card, Col, Form, Input, Row } from "antd";

const ProfileView = () => {
  const user = {
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    phone: "08123456789",
    avatarUrl: "/avatar-placeholder.png", // ganti dengan URL gambar nyata jika ada
  };

  return (
    <>
      {/* Card 1: Header & Summary */}
      <Card className="shadow-md">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold">Profil</h2>
          <Button type="primary" className="w-40">Edit</Button>
        </div>

        <div className="flex items-center gap-4">
          <Avatar size={80} src={user.avatarUrl} />
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        </div>
      </Card>

      {/* Card 2: Form Detail */}
      <Card className="shadow-md" style={{marginTop: "24px"}}>
        <Form
          layout="vertical"
          initialValues={{
            fullName: user.name,
            email: user.email,
            phone: user.phone,
          }}
          disabled
        >
          <Row gutter={[16, 16]}>
            <Col md={12} xs={24}>
              <Form.Item label="Full Name" name="fullName">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item label="No. Handphone" name="phone">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item
                label="Email Address"
                name="email"
                className="md:col-span-2"
              >
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default ProfileView;
