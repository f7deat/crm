import { PageContainer } from '@ant-design/pro-components';
import { Alert } from 'antd';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
        <Alert message="Wellcome to CRM!"></Alert>
    </PageContainer>
  );
};

export default HomePage;
