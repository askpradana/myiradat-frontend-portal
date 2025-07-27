import DetailUser from "@/components/DetailUser";

const DetailUserView = () => {
  const user = {
    id: 1,
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    noHp: "08123456789",
    avatarUrl: "/avatar-placeholder.png", // ganti dengan URL gambar nyata jika ada
  };

  return <DetailUser user={user} isEdit={false}/>;
};

export default DetailUserView;
