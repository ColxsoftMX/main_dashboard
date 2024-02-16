import React from 'react';
import { Col, Row, Select, Input, Form, Button, Modal } from 'antd';
import imgLib from '../../assets/login/loginLib.jpeg';
import { useLanguage } from '../../assets/login/translations/i18n.js';
import { LoginApi } from '../../utils/APIs.js';

const { Option } = Select;

const LoginView: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();
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

                console.log(postMom);

                // solicitud tipo post con fetch 

                fetch(`${LoginApi}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postMom),
                })
                    .then((response) => response.json())
                    .then((data) => {

                        console.log('Success:', data);
                        if (data.status === 200) {
                            Modal.success({
                                title: `${t('t1')}`,
                                content: `${t('t2')}`,
                            });
                        } else {
                            Modal.error({
                                title: `${t('err')}`,
                                content: `${t('t9')}`,
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
                    minHeight: 360,
                    background: '#fff',
                    borderRadius: 8,
                }}
            >
                <Row>
                    <Col sm={24} md={15} lg={15} style={{ padding: 20 }}>
                        <Select
                            defaultValue={language}
                            style={{ width: 90 }}
                            onChange={handleLanguageChange}
                        >
                            <Option value="es">Español</Option>
                            <Option value="en">English</Option>
                        </Select>

                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 20px 10px' }}>
                            <h1 style={{ margin: 0 }}>{t('t1')}</h1>
                        </div>

                        <div style={{ color: 'gray', fontWeight: 'bolder', display: 'flex', justifyContent: 'center' }}>
                            <p>{t('t2')}</p>
                        </div>

                        <div style={{ margin: ' 0 80px' }}>
                            <Form form={form} style={{ marginTop: '20px' }} layout='vertical'>
                                <Form.Item
                                    name="email_user"
                                    label={t('t3')}
                                    rules={[{ required: true, message: t('t4W') },
                                    { pattern: emailRegex, message: t('t4W2') }
                                    ]}
                                >
                                    <Input placeholder={t('t4')} />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label={t('t5')}
                                    rules={[{ required: true, message: t('t5w') }]}
                                >
                                    <Input.Password placeholder={t('t6')} />
                                </Form.Item>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item name="remember" valuePropName="checked">
                                            <div style={{ display: 'flex' }}>
                                                <label style={{ color: 'gray' }}>{t('t7')}</label>
                                                <Input type="checkbox" style={{ width: '30px', scale: '0.7' }} />
                                            </div>
                                        </Form.Item>
                                    </Col>

                                    <Col span={12} style={{ textAlign: 'right', paddingTop: '5px' }}>
                                        <a href="/">{t('t8')}</a>
                                    </Col>
                                </Row>

                                <Form.Item>
                                    <Button type="primary" style={{ background: 'black', color: 'white', width: '100%' }} onClick={handleSaveData}>
                                        {t('t9')}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>

                    <Col sm={0} md={9} lg={9} style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={imgLib}
                            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '0 8px 8px 0' }}
                            alt="Pople in a library talking together"
                        />
                    </Col>
                </Row>
            </div >
        </>
    );
};

export default LoginView;
