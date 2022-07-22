import { LogoutOutlined, SettingOutlined, TranslationOutlined, UserOutlined } from "@ant-design/icons";
import { setLocale } from "@umijs/max";
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
            <Avatar src={state.initialState?.user.avatar} />
            <Dropdown overlay={overLay}>
                <Button type="link">{state.initialState?.user.email}</Button>
            </Dropdown>
            <Dropdown overlay={() => (
                <Menu>
                    <Menu.Item key={0} onClick={() => setLocale('en-US')}>English</Menu.Item>
                    <Menu.Item key={1} onClick={() => setLocale('vi-VN')}>Vietnames</Menu.Item>
                </Menu>
            )}>
                <TranslationOutlined />
            </Dropdown>
        </Space>
    )
}

export default RightContent