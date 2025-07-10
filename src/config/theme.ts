import { theme } from "antd";

export const themeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#00b96b",
    borderRadius: 8,
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: 14,
  },
  components: {
    Layout: {
      siderBg: "#ffffff",
    },
    Button: {
      controlHeight: 40,
      borderRadius: 20,
    },
    Input: {
      colorBorder: "#ddd",
    },
    Modal: {
      padding: 16,
    },
    Menu: {
      itemSelectedColor: "#FFFFFF",
      itemSelectedBg: "#008000",
      menuItemBorderRadius: 16,
    },
    Card: {
      
    }
  },
};
