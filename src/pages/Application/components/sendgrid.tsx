import { ModalForm, ProFormText } from "@ant-design/pro-components"
import { Divider, Space, Typography } from "antd";

type SendGridProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const SendGrid: React.FC<SendGridProps> = (props) => {

    const onFinish = async (values: any) => {
        console.log(values)
    }

    return (
        <ModalForm visible={props.visible} onVisibleChange={props.setVisible} onFinish={onFinish}>
            <ProFormText label="API Key" name="apiKey" required />
            <Divider />
            <Typography.Title level={5}>From</Typography.Title>
            <Space size="large">
                <ProFormText label="Email" width="md" />
                <ProFormText label="Name" width="md" />
            </Space>
            <Divider />
            <Typography.Title level={5}>Templates</Typography.Title>
            <ProFormText label="Confirm email"/>
            <ProFormText label="Lead generation"/>
            <ProFormText label="Inform recived contact"/>
        </ModalForm>
    )
}

export default SendGrid