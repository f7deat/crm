import { ModalForm, ProFormText } from "@ant-design/pro-components"

type SendGridSettingProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const SendGridSetting: React.FC<SendGridSettingProps> = (props) => {

    const onFinish = async (values: any) => {
        console.log(values)
    }

    return (
        <ModalForm visible={props.visible} onVisibleChange={props.setVisible} onFinish={onFinish}>
            <ProFormText label="API Key" name="apiKey" required />
        </ModalForm>
    )
}

export default SendGridSetting