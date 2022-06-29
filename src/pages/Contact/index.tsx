import { deleteContact, queryContactList } from '@/services/contact';
import { DeleteOutlined, FolderOutlined } from '@ant-design/icons';
import {
  ActionType,
  BaseQueryFilterProps,
  FooterToolbar,
  PageContainer,
  ProCard,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Card, DatePicker, Divider, Drawer, message, Popconfirm, Popover } from 'antd';
import React, { useRef, useState } from 'react';

const { RangePicker } = DatePicker;

const ContactList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.UserInfo>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);

  const ViewMore = (informations: any) => (
    <div>
        {
            informations.informations?.map((x: any, i: number) => (
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

  const columns: ProDescriptionsItemProps<any>[] = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      tip: 'Include fist name and last name',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '名称为必填项',
          },
        ],
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      valueType: 'text',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      hideInForm: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      hideInForm: true,
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
    >
      <ProCard style={{marginBottom: 16}}>
        <RangePicker />
      </ProCard>
      <ProTable<API.UserInfo>
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

      <Drawer
        width={600}
        visible={!!row}
        onClose={() => {
          setRow(undefined);
        }}
        closable={false}
      >
        {row?.name && (
          <ProDescriptions<API.UserInfo>
            column={2}
            title={row?.name}
            request={async () => ({
              data: row || {},
            })}
            params={{
              id: row?.name,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default ContactList;
