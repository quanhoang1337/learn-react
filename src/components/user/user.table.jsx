import { Flex, Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';


const UserTable = (props) => {

    const { dataUsers } = props;

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

    console.log(">>>>>Run render 000")

    return <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey="_id"
    />
}

export default UserTable;