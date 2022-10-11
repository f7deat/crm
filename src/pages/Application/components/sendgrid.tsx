import { saveSendGrid } from "@/services/application";
import { ModalForm, ProFormText } from "@ant-design/pro-components"
import { Divider, message, Space, Typography } from "antd";

type SendGridProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    initialValues: API.SendGridConfig
}

const SendGrid: React.FC<SendGridProps> = (props) => {

    const onFinish = async (values: any) => {
        const response = await saveSendGrid(values);
        if (response.succeeded) {
            message.success('Saved!');
            props.setVisible(false);
        }
    }

    return (
        <ModalForm visible={props.visible} onVisibleChange={props.setVisible} onFinish={onFinish} initialValues={props.initialValues}>
            <ProFormText label="API Key" name="apiKey" required />
            <Divider />
            <Typography.Title level={5}>From</Typography.Title>
            <ProFormText label="Email" />
            <ProFormText label="Name" />
            <Divider />
            <Typography.Title level={5}>Templates</Typography.Title>
            <ProFormText label="Confirm email" />
            <ProFormText label="Lead generation" />
            <ProFormText label="Inform recived contact" />
        </ModalForm>
    )
}

export default SendGrid