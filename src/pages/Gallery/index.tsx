import { addGallery, deleteGallery, queryGallery, queryGetGallery } from "@/services/gallery";
import { FolderOutlined, DeleteOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { ActionType, ModalForm, PageContainer, ProDescriptionsItemProps, ProFormInstance, ProFormText, ProFormTextArea, ProTable } from "@ant-design/pro-components"
import { Link } from "@umijs/max";
import { Button, Divider, Popconfirm, message } from "antd";
import { useRef, useState } from "react";

const Gallery: React.FC = () => {
    const actionRef = useRef<ActionType>();
    const formRef = useRef<ProFormInstance>();
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

    const handleUpdate = (id: string) => {
        queryGetGallery(id).then(response => {
            if (response.succeeded) {
                formRef.current?.setFields([
                    {
                        name: 'id',
                        value: response.data.id
                    },
                    {
                        name: 'name',
                        value: response.data.name
                    },
                    {
                        name: 'description',
                        value: response.data.description
                    }
                ]);
                setVisible(true);
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
                <Button icon={<EditOutlined />} onClick={() => handleUpdate(record.id)} />
                <Divider type="vertical" />
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
            <ModalForm visible={visible} onVisibleChange={setVisible} onFinish={onFinish} formRef={formRef}>
                <ProFormText name="id" hidden />
                <ProFormText label="Name" name="name" required />
                <ProFormTextArea label="Description" name="description" />
            </ModalForm>
        </PageContainer>
    )
}

export default Gallery