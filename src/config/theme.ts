import { theme } from 'antd'

export const themeConfig = {
  algorithm: theme.defaultAlgorithm, // You can also use theme.darkAlgorithm
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 8,
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: 14,
  },
  components: {
    Button: {
      controlHeight: 40,
      borderRadius: 6,
    },
    Input: {
      colorBorder: '#ddd',
    },
    Modal: {
      padding: 16,
    },
  },
}
