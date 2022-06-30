import { ExportOutlined } from "@ant-design/icons";
import { Button, DatePicker, Drawer, message, Typography } from "antd"
import { useState } from "react";

type ContactToolProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const { RangePicker } = DatePicker;

const ContactTool: React.FC<ContactToolProps> = (props) => {

    const [rangeDate, setRangeDate] = useState()

    const onChange = (values: any) => {
        setRangeDate(values)
    }

    const exportRange = () => {
        if (!rangeDate) {
            return message.warning('Please select date!');
        }

        console.log(rangeDate)
    }

    return (
        <Drawer visible={props.visible} title="Tool" onClose={() => props.setVisible(false)}>
            <div className="mb-2">
                <Typography.Text strong={true}>Date</Typography.Text>
            </div>
            <RangePicker className="w-full mb-4" onChange={onChange} />
            <Button type="primary" icon={<ExportOutlined />} onClick={exportRange}>Export</Button>
        </Drawer>
    )
}

export default ContactTool