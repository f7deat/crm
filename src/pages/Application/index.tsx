import { EditOutlined, EllipsisOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, SettingOutlined, TwitterOutlined } from "@ant-design/icons"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { Avatar, Card, Col, Row } from "antd"

const Application: React.FC = () => {
    return (
        <PageContainer title="Application">
            <Row gutter={24}>
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
        </PageContainer>
    )
}

export default Application