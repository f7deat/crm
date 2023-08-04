import Loading from "@/components/Loading";
import { login, user } from "@/services/account";
import { ProCard, ProFormCheckbox, StepsForm } from "@ant-design/pro-components";
import { ProFormText } from "@ant-design/pro-form";
import { history } from "@umijs/max";
import { Button, Col, Divider, FormInstance, Layout, Row, message } from "antd";
import { Fragment, useEffect, useRef, useState } from "react";
import './index.css';
import { Helmet } from "@umijs/max";
import { ApartmentOutlined, FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

const { Password } = ProFormText;
const { Content } = Layout;

const Login: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const formRef = useRef<FormInstance>();

    useEffect(() => {
        const token = localStorage.getItem('def_token');
        if (token) {
            user().then(response => {
                if (response) {
                    history.push('/home')
                }
            }).finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
        const host = localStorage.getItem('baseURL');
        if (host) {
            formRef.current?.setFieldsValue({
                name: 'host',
                value: host
            });
        }
    }, [])

    function isValidHttpUrl(value: string) {
        let url;

        try {
            url = new URL(value);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    const onFinish = async (values: any) => {
        login(values).then(response => {
            if (response.succeeded) {
                localStorage.setItem('def_token', response.token || '');
                history.push('/home')
            } else {
                message.error('Username or password incorrect!')
            }
        })
    }

    const handleNexStep = async (values: { host: string }) => {
        if (isValidHttpUrl(values.host)) {
            if (values.host.endsWith('/')) {
                localStorage.setItem('baseURL', values.host + 'api/');
            } else {
                localStorage.setItem('baseURL', values.host + '/api/');
            }
            return true;
        }
        message.warn('Please input valid URL. e.g: https://example.com');
        return false;
    }

    return (
        <Layout className="overflow-hidden">
            <Helmet>
                <title>Login - DefZone.Net</title>
            </Helmet>
            {
                loading ? (
                    <Content>
                        <Loading />
                    </Content>
                ) : (
                    <Content>
                        <Row gutter={16}>
                            <Col span={8}>
                                <ProCard className="h-screen">
                                    <div className="flex items-center justify-center gap-2 py-4 relative" style={{
                                        paddingTop: 92
                                    }}>
                                        <ApartmentOutlined style={{
                                            color: 'orange',
                                            fontSize: 30
                                        }} />
                                        <div className="font-bold" style={{
                                            fontSize: 26
                                        }}>CRM System</div>
                                        <div className="absolute" style={{
                                            bottom: 0,
                                            left: '55%'
                                        }}>Dummies</div>
                                    </div>
                                    <div className="login-form">
                                        <StepsForm submitter={{
                                            searchConfig: {
                                                submitText: 'Login',
                                                resetText: 'Reset'
                                            }
                                        }}
                                            formRef={formRef}
                                            onFinish={onFinish}>
                                            <StepsForm.StepForm onFinish={handleNexStep}>
                                                <ProFormText label="Host" name="host" width="md"
                                                    rules={[{ required: true, message: 'Please input your host!' }]}
                                                    placeholder="https://example.com"
                                                />
                                            </StepsForm.StepForm>
                                            <StepsForm.StepForm>
                                                <ProFormText label="Email" name="username"
                                                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                                                />
                                                <Password label="Password" name='password'
                                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                                />
                                                <ProFormCheckbox.Group layout="vertical" options={['Remember me']} />
                                            </StepsForm.StepForm>
                                        </StepsForm>
                                        <Divider />
                                        <div className="login-social">
                                            <Button size="large" className="w-full mb-2" icon={<GoogleOutlined />}>Login with Google</Button>
                                            <Button type="primary" size="large" className="w-full" icon={<FacebookOutlined />}>Login with Facebook</Button>
                                        </div>
                                    </div>
                                    <div className="copy-right">© 2022 <a href="https://defzone.net">DefZone</a> Inc.</div>
                                </ProCard>
                            </Col>
                            <Col span={16}>

                            </Col>
                        </Row>
                    </Content>
                )
            }
        </Layout>
    )
}

export default Login