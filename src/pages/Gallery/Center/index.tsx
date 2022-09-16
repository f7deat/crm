import { UploadOutlined } from "@ant-design/icons"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { Button } from "antd"

const GalleryCenter: React.FC = () => {
    return(
        <PageContainer title="Photo of gallery">
            <ProCard>
                <Button icon={<UploadOutlined />}>Upload</Button>
            </ProCard>
        </PageContainer>
    )
}

export default GalleryCenter