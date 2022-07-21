import { deleteContact, queryContactList } from '@/services/contact';
import { DeleteOutlined, FolderOutlined, SettingOutlined } from '@ant-design/icons';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, Divider, message, Popconfirm, Popover } from 'antd';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import ContactTool from '../components/tool';

const ContactList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);
  const [visibleTool, setVisibleTool] = useState<boolean>(false);

  const ViewMore = (informations: any) => (
    <div>
        {
            informations?.informations.map((x: any, i: number) => (
                <div key={i}>
                    {x.name}: {x.value}
                </div>
            ))
        }
    </div>
  )

  const handleRemove = (id: string) => {
    deleteContact(id).then(response => {
      if (response.succeeded) {
        actionRef.current?.reload();
        message.success('succeeded!')
      } else {
        message.error(response.message)
      }
    })
  }

  const columns: ProDescriptionsItemProps<API.Contact>[] = [
    {
      title: 'Name',
      render: (_, record) => (
        <Link to={`/contact/center/${record.id}`}>
          <a>{record.fullName}</a>
        </Link>
      ),
      tip: 'Include fist name and last name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      valueType: 'text',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Created Date',
      render: (_, record) => moment(record.createdDate).format('DD/MM/YYYY hh:mm:ss')
    },
    {
      title: 'Task',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <Popover content={ViewMore(JSON.parse(record.metaData))}>
            <Button icon={<FolderOutlined />} type="primary" />
          </Popover>
          <Divider type="vertical" />
          <Popconfirm title="Are you sure delete this?" onConfirm={() => handleRemove(record.id)}>
            <Button icon={<DeleteOutlined />} danger type="primary" />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      header={{
        title: 'Contact',
      }}
      extra={<Button icon={<SettingOutlined />} onClick={() => setVisibleTool(true)}></Button>}
    >
      <ProTable<API.Contact>
        headerTitle="Lead"
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={queryContactList}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              Selected{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              row&nbsp;&nbsp;
            </div>
          }
        >
          <Button type="primary" danger>Delete</Button>
        </FooterToolbar>
      )}
      <ContactTool visible={visibleTool} setVisible={setVisibleTool} />
    </PageContainer>
  );
};

export default ContactList;
