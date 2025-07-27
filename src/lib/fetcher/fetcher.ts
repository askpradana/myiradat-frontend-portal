"use client";

import { getAccessToken, clearTokens } from "@/lib/token";
import { useLoading } from "@/context/LoadingContext";
import { useModal } from "@/context/ModalContext";
import { useRouter } from "next/navigation";

const AUTH_URI = process.env.NEXT_PUBLIC_AUTH_BASE_URI;
const USER_URI = process.env.NEXT_PUBLIC_USER_BASE_URI;

export function useFetcher() {
  const { setLoading } = useLoading();
  const { showSuccess, showError } = useModal();
  const router = useRouter();

  async function fetcher<T>(
    url: string,
    {
      method = "GET",
      body,
      headers = {},
      baseUri = "USER_URI",
      usingFormData = false,
      auth = true,
      showSuccess: showSuccessFlag = false,
      showError: showErrorFlag = false,
      autoStopLoading = true,
    }: {
      method?: "GET" | "POST" | "PUT" | "DELETE";
      body?: unknown;
      headers?: HeadersInit;
      baseUri?: "AUTH_URI" | "USER_URI";
      usingFormData?: boolean;
      auth?: boolean;
      showSuccess?: boolean;
      showError?: boolean;
      autoStopLoading?: boolean;
    } = {}
  ): Promise<T> {
    setLoading(true);

    try {
      const fullUrl =
        baseUri === "USER_URI" ? `${USER_URI}${url}` : `${AUTH_URI}${url}`;

      const finalHeaders: Record<string, string> = {
        ...normalizeHeaders(headers),
      };

      if (auth) {
        const token = getAccessToken();
        if (token) finalHeaders["Authorization"] = `Bearer ${token}`;
      }

      if (!usingFormData) {
        finalHeaders["Content-Type"] = "application/json";
      }

      let payload: BodyInit | undefined = undefined;
      if (method !== "GET" && body) {
        if (usingFormData) {
          if (body instanceof FormData) {
            payload = body;
          } else {
            throw new Error("Body must be FormData when usingFormData is true.");
          }
        } else {
          payload = JSON.stringify(body);
        }
      }

      const res = await fetch(fullUrl, {
        method,
        headers: finalHeaders,
        body: method === "GET" ? undefined : payload,
      });

      const contentType = res.headers.get("Content-Type");
      const data = contentType?.includes("application/json")
        ? await res.json()
        : await res.text();

      if (!res.ok) {
        if (res.status === 401) {
          clearTokens();
          router.replace("/login");
          return Promise.reject(new Error("Unauthorized"));
        }

        if (showErrorFlag) {
          showError(data?.message || "Something went wrong");
        }

        throw new Error(data?.message || "API error");
      }

      if (showSuccessFlag) showSuccess("Success");

      return data as T;
    } finally {
      if (autoStopLoading) setLoading(false);
    }
  }

  return { fetcher };
}

function normalizeHeaders(init?: HeadersInit): Record<string, string> {
  if (!init) return {};

  if (init instanceof Headers) {
    const obj: Record<string, string> = {};
    init.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  if (Array.isArray(init)) {
    return Object.fromEntries(init);
  }

  return { ...init };
}
