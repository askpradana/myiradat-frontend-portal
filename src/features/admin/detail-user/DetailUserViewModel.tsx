"use client";

import { useEffect, useState } from "react";
import { useDetailUserService } from "./DetailUserService";
import { useLoading } from "@/context/LoadingContext";
import { useModal } from "@/context/ModalContext";
import { Form } from "antd";
import { UserType } from "@/components/DetailUser";
import { useParams } from "next/navigation";

const UserIntialValue: UserType = {
  id: 0,
  email: "",
  name: "",
  noHp: "",
  avatarUrl: "",
};

export function useDetailUserViewModel() {
  const { getDetailUser } = useDetailUserService();
  const { setLoading } = useLoading();
  const { showError } = useModal();
  const [user, setUser] = useState<UserType>(UserIntialValue);
  const [form] = Form.useForm();
  const params = useParams();
  const id = Number(params.userId);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      
      try {
        const response = await getDetailUser({ id: id });

        console.log(response);
        
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
