"use client";

import { useForm } from "antd/es/form/Form";
import { LoginFormData } from "./LoginModel";
import { jwtDecode } from "jwt-decode";
import { useLoginService } from "./LoginService";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { useLoading } from "@/context/LoadingContext";
import { MyJwtPayload } from "@/context/AuthContext";

export function useLoginViewModel() {
  const [form] = useForm<LoginFormData>();
  const router = useRouter();
  const { login: loginRequest } = useLoginService();
  const { login: loginToContext } = useAuth();
  const { setLoading } = useLoading();

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      const res = await loginRequest(values);

      // Simpan token dan set user ke context
      loginToContext(res.data.accessToken, res.data.refreshToken);

      // Decode token langsung, jangan tunggu context update
      const decoded = jwtDecode<MyJwtPayload>(res.data.accessToken);
      const dashboardRole = decoded.services.find(
        (s) => s.serviceCode === "DASHBOARD"
      );

      if (dashboardRole?.roleName === "admin") {
        router.replace("/dashboard/admin");
      } else {
        router.replace("/dashboard/service");
      }
    } catch (err) {
      message.error("Login failed. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
  };
}
