import { EditOutlined, EllipsisOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, SettingOutlined, TwitterOutlined } from "@ant-design/icons"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { Avatar, Card, Col, Row } from "antd"
import { useState } from "react"
import SendGridSetting from "./components/sendgrid-setting"

const Application: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false)
    
    return (
        <PageContainer title="Application">
            <Row gutter={24} className="mb-4">
                <Col span={6}>
                    <ProCard actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}>
                        <Card.Meta
                            avatar={<Avatar icon={<GoogleOutlined />} />}
                            title="Google"
                            description="Connect to Google"
                        />
                    </ProCard>
                </Col>
                <Col span={6}>
                    <ProCard actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}>
                        <Card.Meta
                            avatar={<Avatar icon={<FacebookOutlined />} />}
                            title="Facebook"
                            description="Connect to Facebook"
                        />
                    </ProCard>
                </Col>
                <Col span={6}>
                    <ProCard actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}>
                        <Card.Meta
                            avatar={<Avatar icon={<InstagramOutlined />} />}
                            title="Instagram"
                            description="Connect to Instagram"
                        />
                    </ProCard>
                </Col>
                <Col span={6}>
                    <ProCard actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}>
                        <Card.Meta
                            avatar={<Avatar icon={<TwitterOutlined />} />}
                            title="Twitter"
                            description="Connect to Twitter"
                        />
                    </ProCard>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={6}>
                    <ProCard actions={[
                        <SettingOutlined key="setting" onClick={() => setVisible(true)} />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}>
                        <Card.Meta
                            avatar={<Avatar src="https://w7.pngwing.com/pngs/319/56/png-transparent-sendgrid-google-cloud-platform-data-integration-email-sql-brand-miscellaneous-blue-angle-thumbnail.png" />}
                            title="SendGrid"
                            description="Connect to SendGrid"
                        />
                    </ProCard>
                </Col>
            </Row>
            <SendGridSetting visible={visible} setVisible={setVisible} />
        </PageContainer>
    )
}

export default Application