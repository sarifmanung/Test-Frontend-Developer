import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const TableComponent = () => {
  const formData = useSelector((state) => state.formData);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
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
