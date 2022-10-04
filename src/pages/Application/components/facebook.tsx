import { ArrowDownOutlined } from "@ant-design/icons";
import { ModalForm, ProFormText, ProFormTextArea } from "@ant-design/pro-components"
import { Button, Col, Row } from "antd";

type FacebookProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Facebook: React.FC<FacebookProps> = (props) => {

    const exchange = () => {

    }

    return (
        <ModalForm visible={props.visible} onVisibleChange={props.setVisible} title="Facebook configruation">
            <Row gutter={32}>
                <Col span={16}>
                    <ProFormText name="appId" label="App Id" required />
                    <ProFormText name="appSecret" label="App Secret" required />
                    <ProFormTextArea name="accessToken" label="Access Token" required tooltip="Input long live token exchanged from right panel" />
                </Col>
                <Col span={8} style={{borderLeft: '1px dashed #d1d1d1'}}>
                    <ProFormTextArea label="Short live token" tooltip="Got it from: https://graph.facebook.com/" />
                    <div className="mb-3 text-center">
                        <Button icon={<ArrowDownOutlined />} onClick={exchange}>Exchange token</Button>
                    </div>
                    <ProFormTextArea label="Long live token" />
                </Col>
            </Row>
        </ModalForm>
    )
}

export default Facebook