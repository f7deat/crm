import { CheckOutlined, DotChartOutlined, LikeOutlined, UserAddOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, ProTable } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Alert, Avatar, Col, Empty, Row, Space, Statistic, Typography } from 'antd';

const HomePage: React.FC = () => {

  const initialState = useModel('@@initialState');

  return (
    <PageContainer ghost>
      <Row gutter={24}>
        <Col span={16}>
          <Row gutter={16} className="mb-4">
            <Col span={6}>
              <ProCard>
                <Statistic title="Unasgned" value={1128} prefix={<LikeOutlined />} />
              </ProCard>
            </Col>
            <Col span={6}>
              <ProCard>
                <Statistic title="Assigned" value={450} prefix={<UserAddOutlined />} />
              </ProCard>
            </Col>
            <Col span={6}>
              <ProCard>
                <Statistic title="Closed" value={3500} prefix={<CheckOutlined />} />
              </ProCard>
            </Col>
            <Col span={6}>
              <ProCard>
                <Statistic title="Channels" value={3} prefix={<DotChartOutlined />} />
              </ProCard>
            </Col>
          </Row>
          <ProCard title="Today" className='mb-4'>
            <Empty />
          </ProCard>
          <ProCard>
            <ProTable></ProTable>
          </ProCard>
        </Col>
        <Col span={8}>
          <ProCard className='mb-4'>
            <Space size="large">
              <Avatar src={initialState.initialState?.user.avatar} size={100} />
              <div>
                <Typography.Title level={3}>
                  Hi, {initialState.initialState?.user.email.split('@')[0]}
                </Typography.Title>
                <Space>
                  Point: <b>{initialState.initialState?.user.point}</b>
                  Amout: <b>{initialState.initialState?.user.amount}</b>
                </Space>
              </div>
            </Space>
          </ProCard>
          <ProCard>
            <Empty />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
