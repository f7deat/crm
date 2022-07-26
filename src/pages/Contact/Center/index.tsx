import { queryContact } from "@/services/contact"
import { ArrowLeftOutlined, ArrowUpOutlined, EditOutlined, EnvironmentOutlined, MessageOutlined, PhoneOutlined, PlusOutlined, RedEnvelopeOutlined } from "@ant-design/icons"
import { PageContainer, ProCard, ProTable } from "@ant-design/pro-components"
import { FormattedMessage } from "@umijs/max"
import { Link } from "@umijs/max"
import { useParams } from "@umijs/max"
import { Avatar, Badge, Button, Col, Descriptions, Empty, Row, Space, Tabs, Timeline, Tooltip, Typography } from "antd"
import moment from "moment"
import { useEffect, useState } from "react"

const { TabPane } = Tabs;

const ContactCenter: React.FC = () => {

    const { id } = useParams()
    const [contact, setContact] = useState<API.Contact>();

    useEffect(() => {
        queryContact(id).then(response => {
            setContact(response)
        })
    }, [])

    const ProfileExtra = () => (
        <Tooltip title="Push to SendGrid">
            <Button icon={<ArrowUpOutlined />} type="link" />
        </Tooltip>
    )

    return (
        <PageContainer title="Contact Center" extra={
            <Link to='/contact/list'>
                <Button type="link" icon={<ArrowLeftOutlined />}>Go to contact list</Button>
            </Link>}>
            <Row gutter={24}>
                <Col span={8}>
                    <ProCard title="Genaral" extra={<ProfileExtra />}>
                        <div className="flex justify-center mb-4 items-center flex-col">
                            <div className="mb-4">
                                <Avatar src="https://i.pravatar.cc/300" size={200} />
                            </div>
                            <Typography.Title level={3}>{contact?.fullName}</Typography.Title>
                            <div className="mb-4"><EnvironmentOutlined /> {contact?.address}</div>
                            <Space>
                                <Button icon={<RedEnvelopeOutlined />}>Email</Button>
                                <Button icon={<MessageOutlined />}>Message</Button>
                                <Button icon={<PhoneOutlined />}>Call</Button>
                            </Space>
                        </div>
                        <Descriptions title="Informations" column={1} bordered size="small">
                            <Descriptions.Item key={0} label="Email">{contact?.email}</Descriptions.Item>
                            <Descriptions.Item key={1} label="Telephone">{contact?.phoneNumber}</Descriptions.Item>
                            <Descriptions.Item key={2} label="Live">
                                <Badge status="processing" text="Active" />
                            </Descriptions.Item>
                            <Descriptions.Item key={3} label="Remark">Empty</Descriptions.Item>
                        </Descriptions>
                    </ProCard>
                </Col>
                <Col span={16}>
                    <ProCard title={<FormattedMessage id="details" />} extra={
                        <Link to={`/contact/setting/${id}`}>
                            <Button icon={<EditOutlined />}></Button>
                        </Link>
                    }>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Activity" key="1">
                                <div className="py-4">
                                    <Timeline pending="Recording...">
                                        <Timeline.Item color="green">{moment(contact?.createdDate).format('YYYY/MM/DD')}: Contact created</Timeline.Item>
                                    </Timeline>
                                </div>
                            </TabPane>
                            <TabPane tab="Order history" key="2">
                                <ProTable toolBarRender={() => [
                                    <Button icon={<PlusOutlined />} type="primary">Add transaction</Button>
                                ]} />
                            </TabPane>
                        </Tabs>
                    </ProCard>
                </Col>
            </Row>
        </PageContainer>
    )
}

export default ContactCenter