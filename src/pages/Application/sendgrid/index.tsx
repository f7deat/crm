import { queryConfig, saveSendGrid, testSendMail } from "@/services/application";
import { PageContainer, ProCard, ProForm, ProFormInstance, ProFormText, ProFormTextArea } from "@ant-design/pro-components"
import { Col, Divider, Row, Typography, message } from "antd";
import { useEffect, useRef } from "react";

const SendGrid: React.FC = () => {

    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        queryConfig('sendgrid').then(response => {
            formRef.current?.setFields([
                {
                    name: 'apiKey',
                    value: response.apiKey
                },
                {
                    name: 'email',
                    value: response.from.email
                },
                {
                    name: 'name',
                    value: response.from.name
                }
            ])
        });
    }, []);

    const onFinish = async (values: any) => {
        const body: API.SendGridConfig = {
            apiKey: values.apiKey,
            from: {
                name: values.name,
                email: values.email
            }
        }
        const response = await saveSendGrid(body);
        if (response.succeeded) {
            message.success('Saved!');
        }
    }

    const onSend = async (values: any) => {
        await testSendMail(values);
        message.success('Send!')
    }

    return (
        <PageContainer>
            <Row gutter={16}>
                <Col span={16}>
                    <ProCard title="Setting">
                        <ProForm
                            formRef={formRef}
                            onFinish={onFinish}>
                            <ProFormText label="API Key" name="apiKey" required />
                            <Divider />
                            <Typography.Title level={5}>From</Typography.Title>
                            <ProFormText label="Email" name="email" />
                            <ProFormText label="Name" name="name" />
                            <Divider />
                            <Typography.Title level={5}>Templates</Typography.Title>
                            <ProFormText label="Confirm email" />
                            <ProFormText label="Lead generation" />
                            <ProFormText label="Inform recived contact" />
                        </ProForm>
                    </ProCard>
                </Col>
                <Col span={8}>
                    <ProCard title="Test">
                        <ProForm onFinish={onSend}>
                            <ProFormText label="Email received" name="email" rules={[
                                {
                                    required: true
                                }
                            ]} />
                            <ProFormText label="Subject" name="subject" rules={[
                                {
                                    required: true
                                }
                            ]} />
                            <ProFormTextArea label="Message" name="message" rules={[
                                {
                                    required: true
                                }
                            ]} />
                        </ProForm>
                    </ProCard>
                </Col>
            </Row>
        </PageContainer>
    )
}

export default SendGrid