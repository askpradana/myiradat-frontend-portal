import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  FormInstance,
  Typography,
} from "antd";
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
  form: FormInstance;
  isEdit?: boolean;
  url?: string;
  title?: string;
}

const DetailUser: React.FC<DetailUserProps> = ({
  user,
  title = "PROFILE",
  form,
  isEdit = false,
  url,
}) => {
  const router = useRouter();

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
      <Card
        className="shadow-md"
        title={
          <div className="flex justify-between items-start gap-4">
            <Typography.Title level={4} className="mb-0">{title}</Typography.Title>
            <div className="flex justify-between items-start gap-4">
            {isEdit && (
              <Button type="primary" className="w-30" onClick={handleEdit}>
                Edit
              </Button>
            )}
            <Button
              color="danger"
              variant="solid"
              className="w-30"
              onClick={() => router.back()}
            >
              Back
            </Button>
            </div>
          </div>
        }
      >
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
