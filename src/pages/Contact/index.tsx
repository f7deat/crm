import { deleteContact, queryContactList } from '@/services/contact';
import services from '@/services/demo';
import { DeleteOutlined, FolderOutlined } from '@ant-design/icons';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Divider, Drawer, message, Popconfirm, Popover } from 'antd';
import React, { useRef, useState } from 'react';

const { addUser, queryUserList, deleteUser, modifyUser } =
  services.UserController;

/**
 *  删除节点
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.UserInfo[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await deleteUser({
      userId: selectedRows.find((row) => row.id)?.id || '',
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const ContactList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.UserInfo>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);

  const ViewMore = (informations: any) => (
    <div>
        {
            informations.informations?.map((x: any) => (
                <div>
                    {x.name} : {x.value}
                </div>
            ))
        }
    </div>
  )

  const handleRemove = (id: string) => {
    deleteContact(id).then(response => {
      if (response.succeeded) {
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
      tip: '名称是唯一的 key',
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
      <ProTable<API.UserInfo>
        headerTitle="Lead"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
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
              已选择{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              项&nbsp;&nbsp;
            </div>
          }
        >
          <Button type="primary">批量审批</Button>
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
