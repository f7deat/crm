import { LogoutOutlined, SettingOutlined, TranslationOutlined, UserOutlined } from "@ant-design/icons";
import { useModel } from "@umijs/max"
import { Avatar, Button, Dropdown, Menu, Space } from "antd"

const RightContent: React.FC = () => {

    const state = useModel('@@initialState')

    const items = [
        {
            label: 'Account',
            key: 'item-1',
            icon: <UserOutlined />
        },
        {
            label: 'Setting',
            key: 'item-2',
            icon: <SettingOutlined />
        },
        {
            label: 'Logout',
            key: 'item-3',
            icon: <LogoutOutlined />
        },
    ];

    const overLay = (<Menu items={items} />)

    return (
        <Space size={0}>
            <Button type="link">
                <TranslationOutlined />
            </Button>
            <Avatar src={state.initialState?.user.avatar} />
            <Dropdown overlay={overLay}>
                <Button type="link">{state.initialState?.user.email}</Button>
            </Dropdown>
        </Space>
    )
}

export default RightContent