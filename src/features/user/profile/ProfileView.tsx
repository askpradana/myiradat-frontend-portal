import DetailUser from "@/components/DetailUser";

const ProfileView = () => {
  const user = {
    id: 1,
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    no_hp: "08123456789",
    avatarUrl: "/avatar-placeholder.png", // ganti dengan URL gambar nyata jika ada
  };

  return (
    <DetailUser
    user={user}
    isEdit
    url="/dashboard/profile/edit"
    />
  );
};

export default ProfileView;
