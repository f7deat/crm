import { addGallery, deleteGallery, queryGallery } from "@/services/gallery";
import { FolderOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { ActionType, ModalForm, PageContainer, ProDescriptionsItemProps, ProFormText, ProFormTextArea, ProTable } from "@ant-design/pro-components"
import { Link } from "@umijs/max";
import { Button, Divider, Popconfirm, message } from "antd";
import { useRef, useState } from "react";

const Gallery: React.FC = () => {
    const actionRef = useRef<ActionType>();
    const [visible, setVisible] = useState(false);

    const onConfirm = (id: string) => {
        deleteGallery(id).then(response => {
            if (response.succeeded) {
                actionRef.current?.reload();
                message.success('succeeded');
            } else {
                message.error(response.message);
            }
        })
    }

    const columns: ProDescriptionsItemProps<API.Gallery>[] = [
        {
            title: '#',
            valueType: 'indexBorder'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Created Date',
            valueType: 'dateTime',
            hideInSearch: true
        },
        {
            title: 'Task',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => (
                <>
                    <Link to={`/gallery/center/${record.id}`}>
                    <Button icon={<FolderOutlined />} type="primary" />
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm title="Are you sure delete this?" onConfirm={() => onConfirm(record.id)}>
                        <Button icon={<DeleteOutlined />} danger type="primary" />
                    </Popconfirm>
                </>
            ),
        },
    ];

    const onFinish = async (values: API.Gallery) => {
        addGallery(values).then(response => {
            if (response.succeeded) {
                actionRef.current?.reload();
                setVisible(false);
            } else {
                message.error(response.message);
            }
        })
    }

    return (
        <PageContainer extra={<Button type="primary" onClick={() => setVisible(true)} icon={<PlusOutlined />}>Add new</Button>}>
            <ProTable<API.Gallery>
                headerTitle="Lead"
                actionRef={actionRef}
                rowKey="id"
                search={{
                    layout: 'vertical',
                }}
                request={queryGallery}
                columns={columns}
            />
            <ModalForm visible={visible} onVisibleChange={setVisible} onFinish={onFinish}>
                <ProFormText label="Name" name="name"></ProFormText>
                <ProFormTextArea label="Description" name="description"></ProFormTextArea>
            </ModalForm>
        </PageContainer>
    )
}

export default Gallery