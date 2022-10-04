import { queryApplication } from "@/services/application"
import { AppstoreAddOutlined, EditOutlined, EllipsisOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, SettingOutlined, TwitterOutlined } from "@ant-design/icons"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { Avatar, Card, Col, Row } from "antd"
import { useEffect, useState } from "react"
import Facebook from "./components/facebook"
import SendGrid from "./components/sendgrid"

const Application: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [facebookVisible, setFacebookVisible] = useState<boolean>(false);
    const [applications, setApplications] = useState<API.ListApplicationItem>();

    useEffect(() => {
        queryApplication().then(response => {
            setApplications(response);
        })
    }, [])
    
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
                        <SettingOutlined key="setting" onClick={() => setFacebookVisible(true)} />,
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
                            avatar={<Avatar icon={<AppstoreAddOutlined />} />}
                            title="SendGrid"
                            description="Connect to SendGrid"
                        />
                    </ProCard>
                </Col>
            </Row>
            <SendGrid visible={visible} setVisible={setVisible} />
            <Facebook visible={facebookVisible} setVisible={setFacebookVisible} />
        </PageContainer>
    )
}

export default Application