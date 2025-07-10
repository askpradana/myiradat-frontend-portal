import { Avatar, Button, Card, Col, Form, Input, Row } from "antd";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
  no_hp: string;
  avatarUrl: string;
}

interface DetailUserProps {
  user: User;
  isEdit?: boolean;
  url?: string;
}

const DetailUser: React.FC<DetailUserProps> = ({
  user,
  isEdit = false,
  url,
}) => {
  const router = useRouter();

  const handleEdit = () => {
    if (isEdit && url) {
      router.push(`${url}`);
    }
  };

  console.log(isEdit, "INI ISEDIT");
  

  return (
    <>
      {/* Card 1: Header & Summary */}
      <Card className="shadow-md">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold">Profil</h2>
          {isEdit && (
            <Button type="primary" className="w-40" onClick={handleEdit}>
              Edit
            </Button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Avatar size={80} src={user.avatarUrl} />
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.no_hp}</p>
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
            no_hp: user.no_hp,
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
              <Form.Item label="No. Handno_hp" name="no_hp">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Email Address" name="email">
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default DetailUser;
