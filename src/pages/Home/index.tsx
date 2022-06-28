import { login } from '@/services/account';
import { PageContainer, ProForm, ProFormText } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import Password from 'antd/lib/input/Password';

const HomePage: React.FC = () => {

  const onFinish = async (values: any) => {
    login(values).then(response => {
      if (response.succeeded) {
        localStorage.setItem('def_token', response.token || '');
        history.push('/contact')
      }
    })
  }

  return (
    <PageContainer ghost>
        <ProForm submitter={{
          searchConfig: {
            submitText: 'Login',
            resetText: 'Reset'
          }
        }}
        onFinish={onFinish}>
          <ProFormText label="Email" name="username" />
          <ProForm.Item label="Password" name='password'>
            <Password />
          </ProForm.Item>
        </ProForm>
    </PageContainer>
  );
};

export default HomePage;
