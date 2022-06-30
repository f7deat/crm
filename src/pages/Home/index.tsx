import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Alert, Avatar, Col, Row, Space, Typography } from 'antd';

const HomePage: React.FC = () => {

  const initialState = useModel('@@initialState');

  return (
    <PageContainer ghost>
      <Row gutter={24}>
        <Col span={16}>
          <Alert message="Wellcome to CRM!"></Alert>
        </Col>
        <Col span={8}>
          <ProCard>
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
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
