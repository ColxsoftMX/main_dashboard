import React from 'react';
import { Form, Input, DatePicker, Select, Button, Row, Col } from 'antd';
import { useLanguageCreateUser } from '../../../../../utils/translations/i18n';

const { Option } = Select;

interface CreateUserProps {
    name: string;
    email: string;
    date: string;
    role: string;
}

const CreateUser: React.FC = () => {
    const { t } = useLanguageCreateUser();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onFinish = (values: CreateUserProps) => {
        const dateObject = new Date(values.date);

        const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`;

        values.date = formattedDate;

        console.log('Form values:', values);
    };

    return (
        <Form onFinish={onFinish} layout='vertical' style={{ width: '100%' }}>
            <Form.Item label={t('CU1')} name="name" rules={[{ required: true, message: t('CU1W') }]}>
                <Input placeholder={t('CU1P')} />
            </Form.Item>

            <Form.Item label={t('CU2')} name="email" rules={[{ required: true, message: t('CU2W') }, 
            { pattern: emailRegex, message: t('CU2W2') }
        ]}>
                <Input placeholder={t('CU2P')} />
            </Form.Item>

            <Row>
                <Col xs={24} md={6}>
                    <Form.Item label={t('CU3')} name="date" rules={[{ required: true, message: t('CU3W') }]}>
                        <DatePicker style={{ width: '90%' }} placeholder={t('CU3P')} />
                    </Form.Item>
                </Col>

                <Col xs={24} md={6}>
                    <Form.Item label={t('CU4')} name="role" rules={[{ required: true, message: t('CU4W') }]}>
                        <Select placeholder={t('CU4P')}>
                            <Option value="admin">Admin</Option>
                            <Option value="user">User</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs={24} md={5}>
                    <Form.Item>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">{t('CU5')}</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default CreateUser;