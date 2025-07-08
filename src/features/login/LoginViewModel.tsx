"use client";

import { useForm } from "antd/es/form/Form";
import { LoginFormData } from "./LoginModel";
import { useLoginService } from "./LoginService";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { useLoading } from "@/context/LoadingContext";

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
      loginToContext(res.data.accessToken, res.data.refreshToken);
      router.replace("/dashboard");
    } catch (err) {
      if (!("errorFields" in err)) {
        message.error("Login failed. Please check your credentials.");
        console.error(err);
      }
    } finally {      
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
  };
}
