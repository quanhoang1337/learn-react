import { Flex, Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';



const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([
        { _id: "quan", fullName: 25, email: "HN" },
        { _id: "quanpro", fullName: 25, email: "HCM" },
    ]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        // setDataUsers(res.data)
    }

    loadUser();
    console.log(">>>>>Run render ")

    return <Table columns={columns} dataSource={dataUsers} />
}

export default UserTable;