import { deletePhoto, queryPhoto } from "@/services/gallery"
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, UploadOutlined } from "@ant-design/icons"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { useParams } from "@umijs/max"
import { Button, Col, Row, Image, Upload, UploadProps, message, Popconfirm, Space } from "antd"
import { useEffect, useState } from "react"

const GalleryCenter: React.FC = () => {

    const { id } = useParams();

    const [photos, setPhotos] = useState<API.GalleryListItem[]>();

    useEffect(() => {
        fetchPhoto();
    }, []);

    const fetchPhoto = () => {
        queryPhoto(id).then(response => {
            setPhotos(response.data)
        })
    }

    const props: UploadProps = {
        name: 'file',
        action: `${localStorage.getItem('baseURL')}gallery/upload/${id}`,
        headers: {
            authorization: `Bearer ${localStorage.getItem('def_token')}`,
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                fetchPhoto();
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const onConfirm = (id: string) => {
        deletePhoto(id).then(response => {
            if (response.succeeded) {
                const newPhotos = photos?.filter(x => x.id !== id);
                setPhotos(newPhotos);
                message.success('succeeded');
            } else {
                message.error(response.message);
            }
        })
    }

    return (
        <PageContainer title="Photo of gallery">
            <div className="mb-4"><ProCard>
                <Upload {...props}>
                    <Space>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                        or
                        <Button icon={<SettingOutlined />}>Choose from gallery</Button>
                    </Space>
                </Upload>
            </ProCard></div>
            <Row gutter={16}>
                {
                    photos?.map(photo => (
                        <Col span={6} key={photo.id}>
                            <ProCard actions={[
                                <Popconfirm
                                    title="Are you sure to delete?"
                                    onConfirm={() => onConfirm(photo.id)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <DeleteOutlined key="delete" />
                                </Popconfirm>,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}>
                                <Image src={photo.url} height={150} width="100%" />
                            </ProCard>
                        </Col>
                    ))
                }
            </Row>
        </PageContainer>
    )
}

export default GalleryCenter