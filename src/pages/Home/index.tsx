import { CheckOutlined, DotChartOutlined, LikeOutlined, UserAddOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, ProTable } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Avatar, Col, Divider, Empty, Row, Space, Statistic, Typography } from 'antd';
import { Line } from '@ant-design/plots';

const HomePage: React.FC = () => {

  const initialState = useModel('@@initialState');
  
  const data = [
    { time: '1991', value: 20, year: '2001' },
    { time: '1993', value: 13, year: '2003' },
    { time: '1992', value: 23, year: '2005' },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v: any) => v,
      },
    }
  };

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
          <div className='mb-4'>
          <ProCard title="Today">
            <Line {...config} height={250} />
          </ProCard>
          </div>
            <ProTable search={false}></ProTable>
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
          <Divider />
          <ProCard>
            <Empty />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
