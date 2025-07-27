"use client";

import { useEffect, useState } from "react";
import { useProfileService } from "./ProfileService";
import { useLoading } from "@/context/LoadingContext";
import { useModal } from "@/context/ModalContext";
import { Form } from "antd";
import { UserType } from "@/components/DetailUser";

const UserIntialValue: UserType = {
  id: 0,
  email: "",
  name: "",
  noHp: "",
  avatarUrl: "",
};

export function useProfileViewModel() {
  const { getDetail } = useProfileService();
  const { setLoading } = useLoading();
  const { showError } = useModal();
  const [user, setUser] = useState<UserType>(UserIntialValue);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const response = await getDetail();
        setUser({
          id: response.data?.id,
          email: response.data?.email,
          name: response.data?.name,
          noHp: response.data?.noHp,
          avatarUrl: "",
        });
        form.setFieldsValue({
          name: response.data.name,
          noHp: response.data.noHp,
          email: response.data.email,
        });
      } catch (err: unknown) {
        let message = "Failed to load service detail. Please try again.";
        if (err instanceof Error) {
          message = err.message;
        }
        showError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, []);

  return { user, form };
}
