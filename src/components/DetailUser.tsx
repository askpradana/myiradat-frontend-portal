import { Avatar, Button, Card, Col, Form, Input, Row } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export interface UserType {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  noHp: string | undefined;
  avatarUrl: string | undefined;
}

interface DetailUserProps {
  user: UserType;
  isEdit?: boolean;
  url?: string;
}

const DetailUser: React.FC<DetailUserProps> = ({
  user,
  isEdit = false,
  url,
}) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const handleEdit = () => {
    if (isEdit && url) {
      router.push(`${url}`);
    }
  };

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        noHp: user.noHp,
        email: user.email,
      });
    }
  }, [user, form]);

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
            <p className="text-gray-500">{user.noHp}</p>
          </div>
        </div>
      </Card>

      {/* Card 2: Form Detail */}
      <Card className="shadow-md" style={{ marginTop: "24px" }}>
        <Form layout="vertical" disabled form={form}>
          <Row gutter={[16, 16]}>
            <Col md={12} xs={24}>
              <Form.Item label="Full Name" name="name">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item label="No. Handphone" name="noHp">
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
