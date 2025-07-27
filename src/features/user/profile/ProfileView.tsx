import DetailUser from "@/components/DetailUser";
import { useProfileViewModel } from "./ProfileViewModel";

const ProfileView = () => {
  const { user, form } = useProfileViewModel();

  return <DetailUser user={user} form={form} isEdit url="/dashboard/profile/edit" />;
};

export default ProfileView;
