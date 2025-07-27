import DetailUser, { UserType } from "@/components/DetailUser";
import { useProfileViewModel } from "./ProfileViewModel";

const ProfileView = () => {
  const { data } = useProfileViewModel();
  const user: UserType = {
    id: data?.id,
    email: data?.email,
    name: data?.name,
    noHp: data?.noHp,
    avatarUrl: ''
  };

  return <DetailUser user={user} isEdit url="/dashboard/profile/edit" />;
};

export default ProfileView;
