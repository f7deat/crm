import { queryContact, updateContact } from "@/services/contact"
import { ArrowLeftOutlined } from "@ant-design/icons"
import { FormInstance, PageContainer, ProCard, ProForm, ProFormText } from "@ant-design/pro-components"
import { Link } from "@umijs/max"
import { history } from "@umijs/max"
import { useParams } from "@umijs/max"
import { Button, message } from "antd"
import { useEffect, useRef } from "react"

const ContactSetting: React.FC = () => {

    const { id } = useParams()

    const formRef = useRef<FormInstance>()

    useEffect(() => {
        queryContact(id).then((response: API.Contact) => {
            formRef.current?.setFields([
                {
                    name: 'id',
                    value: response.id
                },
                {
                    name: 'name',
                    value: response.fullName
                },
                {
                    name: 'email',
                    value: response.email
                },
                {
                    name: 'phoneNumber',
                    value: response.phoneNumber
                },
                {
                    name: 'address',
                    value: response.address
                }
            ])
        })
    }, [])

    const onFinish = async (values: API.Contact) => {
        updateContact(values).then(response => {
            if (response.succeeded) {
                message.success(response.message)
                history.push(`/contact/center/${id}`);
            }
        })
    }

    return (
        <PageContainer extra={
            <Link to={`/contact/center/${id}`}>
                <Button icon={<ArrowLeftOutlined />} type="link">Back to contact center</Button>
            </Link>
        }>
            <ProCard>
                <ProForm formRef={formRef} onFinish={onFinish}>
                    <ProFormText name="id" hidden></ProFormText>
                    <ProFormText label="Name" name="name" required></ProFormText>
                    <ProFormText label="Email" name="email"></ProFormText>
                    <ProFormText label="Phone number" name="phoneNumber"></ProFormText>
                    <ProFormText label="Address" name="address"></ProFormText>
                </ProForm>
            </ProCard>
        </PageContainer>
    )
}

export default ContactSetting