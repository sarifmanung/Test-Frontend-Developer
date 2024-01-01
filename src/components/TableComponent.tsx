import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const TableComponent = () => {
  const formData = useSelector((state: any) => state.formData);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName", // Use 'fullName' as dataIndex
      key: "fullName",
      render: (text, record) => `${record.firstName} ${record.lastName}`, // Combine firstName and lastName
    },
  ];

  return (
    <Table
      dataSource={formData}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default TableComponent;
