import { queryConfig } from "@/services/application"
import { AppstoreOutlined, EditOutlined, EllipsisOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, SettingOutlined, TwitterOutlined } from "@ant-design/icons"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { Avatar, Card, Col, message, Row, Space } from "antd"
import { useState } from "react"
import Facebook from "./components/facebook"
import { Link } from "@umijs/max"

const Application: React.FC = () => {

    const [sendGridVisible, setSendGridVisible] = useState<boolean>(false);
    const [facebookVisible, setFacebookVisible] = useState<boolean>(false);
    const [applications, setApplications] = useState<API.ListApplicationItem[]>([
        {
            name: 'SendGrid'
        }
    ]);
    const [config, setConfig] = useState<any>();

    const handleOpenConfig = async (key: string) => {
        const response = await queryConfig(key);
        if (response.succeeded && response.data.value) {
            setConfig(JSON.parse(response.data.value));
        }
        switch (key) {
            case 'Facebook':
                setFacebookVisible(true);
                break;
            case 'SendGrid':
                setSendGridVisible(true);
                break;
            default:
                break;
        }
    }

    return (
        <PageContainer title="Application">
            <Row gutter={[16, 16]}>
                {
                    applications?.map(application => (
                        <Col span={6}>
                            <ProCard key={application.name} actions={[
                                <Link to="/applications/sendgrid" key="setting">
                                    <SettingOutlined />
                                </Link>,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}>
                                <Card.Meta
                                    avatar={<Avatar icon={<AppstoreOutlined />} />}
                                    title={application.name}
                                    description={`Connect to ${application.name}`}
                                />
                            </ProCard>
                        </Col>
                    ))
                }
            </Row>
            <Facebook visible={facebookVisible} setVisible={setFacebookVisible} config={config} />
        </PageContainer>
    )
}

export default Application