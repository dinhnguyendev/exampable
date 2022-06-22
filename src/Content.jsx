import {
    AppstoreOutlined,
    ContainerOutlined,

    PieChartOutlined,

    MailOutlined,

} from '@ant-design/icons';
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
function Content() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        console.log("adasd");
    }
    return (
        <>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
        </>
    )
}

export default Content
