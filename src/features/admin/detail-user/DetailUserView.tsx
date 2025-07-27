import DetailUser from "@/components/DetailUser";
import { useDetailUserViewModel } from "./DetailUserViewModel";

const DetailUserView = () => {
  const { user, form } = useDetailUserViewModel();

  return <DetailUser user={user} form={form} title="DETAIL USER" />;
};

export default DetailUserView;
