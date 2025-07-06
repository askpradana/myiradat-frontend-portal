import { getAccessToken } from '@/lib/token'
import { useLoading } from '@/context/LoadingContext'
import { useModal } from '@/context/ModalContext'

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL

export async function fetcher<T>(
  url: string,
  {
    method = 'GET',
    body,
    headers = {},
    usingBase = true,
    usingFormData = false,
    auth = true,
    showSuccess = false,
    showError = true,
  }: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: any
    headers?: HeadersInit
    usingBase?: boolean
    usingFormData?: boolean
    auth?: boolean
    showSuccess?: boolean
    showError?: boolean
  } = {}
): Promise<T> {
  const { setLoading } = useLoading()
  const { success, error } = useModal()

  setLoading(true)

  try {
    const fullUrl = usingBase ? `${API_BASE}${url}` : url

    const finalHeaders: HeadersInit = {
      Channel: 'POR',
      Language: 'id',
      ...headers,
    }

    if (auth) {
      const token = getAccessToken()
      if (token) finalHeaders['Authorization'] = `Bearer ${token}`
    }

    if (!usingFormData) {
      finalHeaders['Content-Type'] = 'application/json'
    }

    let payload: BodyInit | undefined = undefined
    if (method !== 'GET' && body) {
      payload = usingFormData ? body : JSON.stringify(body)
    }

    const res = await fetch(fullUrl, {
      method,
      headers: finalHeaders,
      body: method === 'GET' ? undefined : payload,
    })

    const contentType = res.headers.get('Content-Type')
    const data = contentType?.includes('application/json') ? await res.json() : await res.text()

    if (!res.ok) {
      if (showError) error(data?.message || 'Something went wrong')
      throw new Error(data?.message || 'API error')
    }

    if (showSuccess) success('Success')
    return data as T
  } finally {
    setLoading(false)
  }
}
