import React from 'react';
import { Col, Row, Select, Input, Form, Button, Modal } from 'antd';
import imgLib from './assets/loginLib.jpeg';
import { useLanguageLogin } from '../../utils/translations/i18n.js';
import { LoginApi } from '../../utils/APIs.js';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const LoginView: React.FC = () => {
    localStorage.removeItem('token');

    const navigate = useNavigate();

    const { language, setLanguage, t } = useLanguageLogin();
    const [form] = Form.useForm();

    const handleLanguageChange = (value: string) => {
        setLanguage(value as 'es' | 'en');
    };

    const handleSaveData = () => {
        form
            .validateFields()
            .then((formData) => {

                const postMom = {
                    email_user: formData.email_user,
                    password: formData.password,
                };

                fetch(`${LoginApi}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postMom),
                })
                    .then((response) => response.json())
                    .then((dat) => {

                        console.log('Success:', dat);
                        if (dat.status === 200) {

                            const token = dat.data.token;

                            localStorage.setItem('token', token);

                            navigate('/dashboard');
                        } else {
                            Modal.error({
                                title: `${t('err')}`,
                                content: `${dat.message}`,
                            });
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

            })
            .catch((errorInfo) => {
                console.error('Error de validación:', errorInfo);

                Modal.error({
                    title: `${t('err')}`,
                    content: `${errorInfo.errorFields[0].errors[0]}`,
                });
            });
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        <>
            <div
                style={{
                    height: '100%',
                    background: '#fff',
                    borderRadius: 8,
                }}
            >
                <Row>
                    <Col xs={24} md={14} style={{ padding: 20 }}>
                        <Select
                            defaultValue={language}
                            style={{ width: 90 }}
                            onChange={handleLanguageChange}
                        >
                            <Option value="es">Español</Option>
                            <Option value="en">English</Option>
                        </Select>

                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 20px 10px' }}>
                            <h1 style={{ margin: 0 }}>{t('L1')}</h1>
                        </div>

                        <div style={{ color: 'gray', fontWeight: 'bolder', display: 'flex', justifyContent: 'center' }}>
                            <p>{t('L2')}</p>
                        </div>

                        <div style={{ ...(window.innerWidth >= 1000 ? { margin: '80px' } : {margin: '0'}) }}>
                            <Form form={form} style={{ marginTop: '20px' }} layout='vertical'>
                                <Form.Item
                                    name="email_user"
                                    label={t('L3')}
                                    rules={[{ required: true, message: t('L4W') },
                                    { pattern: emailRegex, message: t('L4W2') }
                                    ]}
                                >
                                    <Input placeholder={t('L4')} />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label={t('L5')}
                                    rules={[{ required: true, message: t('L5w') }]}
                                >
                                    <Input.Password placeholder={t('L6')} />
                                </Form.Item>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item name="remember" valuePropName="checked">
                                            <div style={{ display: 'flex' }}>
                                                <label style={{ color: 'gray' }}>{t('L7')}</label>
                                                <Input type="checkbox" style={{ width: '30px', scale: '0.7' }} />
                                            </div>
                                        </Form.Item>
                                    </Col>

                                    <Col span={12} style={{ textAlign: 'right', paddingTop: '5px' }}>
                                        <a href="/">{t('L8')}</a>
                                    </Col>
                                </Row>

                                <Form.Item>
                                    <Button type="primary" style={{ background: 'black', color: 'white', width: '100%' }} onClick={handleSaveData}>
                                        {t('L9')}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>

                    <Col xs={0} md={10} style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={imgLib}
                            style={{ width: '100%', height: '100%', borderRadius: '0 8px 8px 0' }}
                            alt={t('img')}
                        />
                    </Col>
                </Row>
            </div >
        </>
    );
};

export default LoginView;