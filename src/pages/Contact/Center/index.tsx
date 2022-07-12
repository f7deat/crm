import { ArrowUpOutlined } from "@ant-design/icons"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { Button, Col, Empty, Row, Space } from "antd"

const ContactCenter: React.FC = () => {
    return (
        <PageContainer title="Contact Center">
            <Row gutter={24}>
                <Col span={8}>
                    <ProCard>
                        <Empty />
                    </ProCard>
                </Col>
                <Col span={16}>
                    <div className="flex justify-end mb-4">
                        <Button icon={<ArrowUpOutlined />} type="primary">Push to SendGrid</Button>
                    </div>
                    <ProCard>
                        <Empty />
                    </ProCard>
                </Col>
            </Row>
        </PageContainer>
    )
}

export default ContactCenter