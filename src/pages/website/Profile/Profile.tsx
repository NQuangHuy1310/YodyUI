import React from 'react'
import { Layout, Input, Form, Button, Radio, Select, Row, Col, Avatar, Upload } from 'antd'
import { theme } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axiosConfig from '~/config/axios'
import { toast } from 'react-toastify'

const { Content } = Layout
const { Option } = Select

const User: React.FC = () => {
    const [form] = Form.useForm() // Sử dụng form của Ant Design

    const onFinish = async (values: any) => {
        try {
            const response = await axiosConfig.post('/users/update', values) // Gửi dữ liệu lên server
            toast.success('Cập nhật thành công!')
        } catch (error) {
            toast.error('Đã xảy ra lỗi!')
        }
    }

    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken()

    // Tạo các tùy chọn cho ngày, tháng, năm
    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const months = Array.from({ length: 12 }, (_, i) => i + 1)
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

    return (
        <Layout className="mt-20">
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG
                    }}
                >
                    <div>
                        <h2 className="text-3xl font-medium pb-2">Thông Tin Của Tôi</h2>
                        <span className="text-stone-600">Quản lý và bảo vệ tài khoản của bạn</span>
                    </div>
                    <br />
                    <hr />
                    <br />

                    <Row gutter={16}>
                        <Col span={16}>
                            <Form
                                form={form}
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                                onFinish={onFinish} // Thêm sự kiện onFinish
                            >
                                <Form.Item
                                    label="Tên tài khoản"
                                    name="username"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Tên" name="name">
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Vui lòng nhập email!' },
                                        {
                                            type: 'email',
                                            message: 'Email không hợp lệ!'
                                        },
                                        {
                                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Email phải có định dạng hợp lệ (ví dụ: example@gmail.com)'
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Giới tính">
                                    <Radio.Group>
                                        <Radio value="male">Nam</Radio>
                                        <Radio value="female">Nữ</Radio>
                                        <Radio value="other">Khác</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Ngày sinh">
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Form.Item name="day" noStyle>
                                                <Select placeholder="Chọn ngày" style={{ width: '100%' }}>
                                                    {days.map((day) => (
                                                        <Option key={day} value={day}>
                                                            {day}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item name="month" noStyle>
                                                <Select placeholder="Chọn tháng" style={{ width: '100%' }}>
                                                    {months.map((month) => (
                                                        <Option key={month} value={month}>
                                                            {month}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item name="year" noStyle>
                                                <Select placeholder="Chọn năm" style={{ width: '100%' }}>
                                                    {years.map((year) => (
                                                        <Option key={year} value={year}>
                                                            {year}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" className="btn btn-danger" htmlType="submit">
                                        Lưu
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={8}>
                            <div className="">
                                <div style={{ textAlign: 'center' }} className="pb-6">
                                    <Avatar size={128} alt="User Avatar" />
                                    <br /> <br />
                                    <Upload
                                        customRequest={({ file, onSuccess, onError }) => {
                                            const formData = new FormData()
                                            formData.append('file', file)

                                            axiosConfig
                                                .post('/upload', formData, {
                                                    headers: {
                                                        'Content-Type': 'multipart/form-data'
                                                    }
                                                })
                                                .then(() => {
                                                    toast.success('Tải lên thành công!')
                                                    if (onSuccess) onSuccess(file) // Kiểm tra trước khi gọi onSuccess
                                                })
                                                .catch((error) => {
                                                    toast.error('Đã xảy ra lỗi!')
                                                    if (onError) onError(error) // Kiểm tra trước khi gọi onError
                                                })
                                        }}
                                        showUploadList={false} // Nếu không muốn hiển thị danh sách file đã upload
                                    >
                                        <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                                    </Upload>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}

export default User
