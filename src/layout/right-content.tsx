import { useModel } from "@umijs/max"
import { Avatar, Dropdown, Menu, Space } from "antd"

const RightContent: React.FC = () => {

    const state = useModel('@@initialState')

    const items = [
        { label: 'Account', key: 'item-1' }, // 菜单项务必填写 key
        {
            label: 'Setting',
            key: 'submenu',
            children: [
                { label: 'Theme', key: 'submenu-item-1' },
                { label: 'Billing', key: 'submenu-item-2' }
            ],
        },
        { label: 'Logout', key: 'item-2' },
    ];

    const overLay = (<Menu items={items} />)

    return (
        <Space>
            <Avatar src={state.initialState?.user.avatar} />
            <Dropdown overlay={overLay}>
                <div>{state.initialState?.user.email}</div>
            </Dropdown>
        </Space>
    )
}

export default RightContent