import { exchangeToken, facebookSaveConfig } from "@/services/application";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ModalForm, ProFormInstance, ProFormText, ProFormTextArea } from "@ant-design/pro-components"
import { Button, Col, message, Row } from "antd";
import { useEffect, useRef } from "react";

type FacebookProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    config: API.FacebookConfig
}

const Facebook: React.FC<FacebookProps> = (props) => {

    const formRef = useRef<ProFormInstance>();

    const exchange = () => {
        const appId = formRef.current?.getFieldValue('appId');
        const appSecret = formRef.current?.getFieldValue('appSecret');
        const shortLiveToken = formRef.current?.getFieldValue('shortLiveToken');
        if (!appId || !appSecret || !formRef.current?.getFieldValue('appSecret')  || !shortLiveToken) {
            message.warning('Please input App Id, App Secret and Short live token!');
        }
        exchangeToken(appId, appSecret, shortLiveToken).then(response => {
            console.log(response);
        });
    }

    const onFinish = async (values: API.FacebookConfig) => {
        facebookSaveConfig(values).then(response => {
            if (!response.succeeded) {
                message.error(response.message);
                return;
            }
            message.success('Saved!');
            props.setVisible(false);
        })
    }

    return (
        <ModalForm visible={props.visible} onVisibleChange={props.setVisible} title="Facebook configruation" formRef={formRef} onFinish={onFinish} initialValues={props.config}>
            <Row gutter={32}>
                <Col span={16}>
                    <ProFormText name="appId" label="App Id" required />
                    <ProFormText name="appSecret" label="App Secret" required />
                    <ProFormTextArea name="accessToken" label="Access Token" required tooltip="Input long live token exchanged from right panel" />
                </Col>
                <Col span={8} style={{borderLeft: '1px dashed #d1d1d1'}}>
                    <ProFormTextArea label="Short live token" tooltip="Got it from: https://graph.facebook.com/" name="shortLiveToken" />
                    <div className="mb-3 text-center">
                        <Button icon={<ArrowLeftOutlined />} onClick={exchange}>Exchange token</Button>
                    </div>
                </Col>
            </Row>
        </ModalForm>
    )
}

export default Facebook