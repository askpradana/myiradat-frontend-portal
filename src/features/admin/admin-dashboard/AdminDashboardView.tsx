"use client";

import { Card, Space, Table, Input, Button, Pagination } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import Link from "next/link";
const { Search } = Input;

interface DataType {
  key: string;
  name: string;
  email: string;
  no_hp: string;
  id: number
}

const columns: TableProps<DataType>["columns"] = [
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
    dataIndex: "no_hp",
    key: "no_hp",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link href={`/dashboard/admin/detail/${record.id}`}>
          Detail
        </Link>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: 1,
    name: "Putra Iradat",
    email: "putra.iradat@example.com",
    no_hp: "+6281111111111",
  },
  {
    key: "2",
    id: 2,
    name: "Rani Mulyani",
    email: "rani.mulyani@example.com",
    no_hp: "+6281222222222",
  },
  {
    key: "3",
    id: 3,
    name: "Fajar Pratama",
    email: "fajar.pratama@example.com",
    no_hp: "+6281333333333",
  },
  {
    key: "4",
    id: 4,
    name: "Dina Kartika",
    email: "dina.kartika@example.com",
    no_hp: "+6281444444444",
  },
  {
    key: "5",
    id: 5,
    name: "Agus Salim",
    email: "agus.salim@example.com",
    no_hp: "+6281555555555",
  },
  {
    key: "6",
    id: 6,
    name: "Lina Maharani",
    email: "lina.maharani@example.com",
    no_hp: "+6281666666666",
  },
  {
    key: "7",
    id: 7,
    name: "Rizky Saputra",
    email: "rizky.saputra@example.com",
    no_hp: "+6281777777777",
  },
  {
    key: "8",
    id: 8,
    name: "Sari Wulandari",
    email: "sari.wulandari@example.com",
    no_hp: "+6281888888888",
  },
  {
    key: "9",
    id: 9,
    name: "Andi Nugroho",
    email: "andi.nugroho@example.com",
    no_hp: "+6281999999999",
  },
  {
    key: "10",
    id: 10,
    name: "Mega Sari",
    email: "mega.sari@example.com",
    no_hp: "+6281000000000",
  },
];

export default function AdminDashboardView() {
  return (
    <Card
      title={
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-0 mt-4 mb-4">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="w-full md:w-auto"
          >
            Tambah User
          </Button>
          <div className="w-full md:max-w-[40%]">
            <Search
              placeholder="Cari nama/email/no HP"
              allowClear
              className="w-full"
              enterButton
            />
          </div>
        </div>
      }
      className="shadow-md"
    >
      <Table<DataType>
        size="middle"
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
        pagination={{ position: [] }}
      />
      <div className="flex justify-end mt-4">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </Card>
  );
}
