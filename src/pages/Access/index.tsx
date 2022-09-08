import { CheckCircleOutlined, MoreOutlined, PlusOutlined, SendOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Avatar, Button, Col, Empty, Input, Row, Skeleton, Space, Tag, Typography } from 'antd';
import { useModel } from 'umi';

const AccessPage: React.FC = () => {

  const initialState = useModel('@@initialState');

  const ExtraGroupChat = () => (
    <Space>
      <Button type='primary'>Messages</Button>
      <Button>Participants</Button>
    </Space>
  )

  return (
    <PageContainer
      ghost
      header={{
        title: 'Chat',
      }}
    >
      <Row gutter={16}>
        <Col span={6}>
          <ProCard title="My profile">
            <div className='flex flex-col items-center mb-4'>
              <Avatar src="https://i.pravatar.cc/200" size={150} />
              <div className='mt-2'>
                <Typography.Title level={4}>{initialState.initialState?.user.email}</Typography.Title>
              </div>
              <div className='mb-4'>
                <Tag color='success' icon={<CheckCircleOutlined />}>available</Tag>
              </div>
              <Input.Search placeholder="Search" style={{ width: 200 }} />
            </div>
            <div className='flex justify-between items-center mb-4'>
              <Typography.Title level={5}>Last chats</Typography.Title>
              <Space>
                <Button size='small' icon={<PlusOutlined />} />
                <Button type='link' icon={<MoreOutlined />} />
              </Space>
            </div>
            <Skeleton loading={true} avatar active />
          </ProCard>
        </Col>
        <Col span={12}>
          <ProCard title="Group chat" extra={<ExtraGroupChat />}>
            <div className='py-4'>
              <Empty />
            </div>
            <div className='mb-2'><Input.TextArea></Input.TextArea></div>
            <Button icon={<SendOutlined />} type="primary">Send</Button>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard title="Shared files">
            <Empty />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AccessPage;
