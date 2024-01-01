import React from "react";
import { Table, Button, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteFormData } from "../redux/formDataSlice.tsx";

// Define the FormData interface
interface FormData {
  id: number;
  name: string;
  gender: string;
  phonenumber: string;
  nationality: string;
}

const TableComponent: React.FC = () => {
  const formData = useSelector(
    (state: { formData: FormData[] }) => state.formData
  );
  const dispatch = useDispatch();

  const handleDelete = (record: FormData) => {
    dispatch(deleteFormData(record.id));
  };

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      render: (text, record) => `${record.firstName} ${record.lastName}`,
      sorter: (a: FormData, b: FormData) => a.name.localeCompare(b.name),
    },
    {
      title: "เพศ",
      dataIndex: "gender",
      key: "gender",
      sorter: (a: FormData, b: FormData) => a.gender.localeCompare(b.gender),
    },
    {
      title: "หมายเลขโทรศัพท์มือถือ",
      dataIndex: "phone",
      key: "phone",
      sorter: (a: FormData, b: FormData) =>
        a.phonenumber.localeCompare(b.phonenumber),
    },
    {
      title: "สัญชาติ",
      dataIndex: "nationality",
      key: "nationality",
      sorter: (a: FormData, b: FormData) =>
        a.nationality.localeCompare(b.nationality),
    },
    {
      title: "จัดการ",
      key: "action",
      render: (text: string, record: FormData) => (
        <span>
          <Popconfirm
            title="Are you sure you want to delete this record?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>{" "}
        </span>
      ),
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
