"use client";

import { Card, Space, Table, Input, Button, Pagination } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdminDashboardViewModel } from "./AdminDashboardViewModel";

const { Search } = Input;

export type UserRow = {
  id: number;
  key: string;
  name: string;
  email: string;
  noHp: string;
};

export default function AdminDashboardView() {
  const router = useRouter();
  const { data, params, loading, localSearch, handleSearchChange, handleSearchSubmit, handlePageChange } =
    useAdminDashboardViewModel({
      search: "",
      page: 1,
      pageSize: 10,
    });

  const columns: TableProps<UserRow>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "No. Handphone",
      dataIndex: "noHp",
      key: "noHp",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/dashboard/admin/detail/${record.id}`}>Detail</Link>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title={
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-0 mt-4 mb-4">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => router.push("/dashboard/admin/add")}
            className="w-full md:w-auto"
          >
            Tambah User
          </Button>
          <div className="w-full md:max-w-[40%]">
            <Search
              placeholder="Cari nama/email"
              allowClear
              className="w-full"
              value={localSearch} // bukan params.search
              onChange={(e) => handleSearchChange(e.target.value)}
              onSearch={handleSearchSubmit} 
            />
          </div>
        </div>
      }
      className="shadow-md"
    >
      <Table
        size="middle"
        loading={loading}
        columns={columns}
        dataSource={data?.data.map((item) => ({
          ...item,
          key: item.id.toString(),
        }))}
        scroll={{ x: "max-content" }}
        pagination={false}
      />
      <div className="flex justify-end mt-4">
        <Pagination
          current={params.page}
          pageSize={params.pageSize}
          total={data?.totalRows || 0}
          onChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={["5", "10", "20", "50"]}
        />
      </div>
    </Card>
  );
}
