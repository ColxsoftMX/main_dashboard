import { Layout, Menu, /*Select*/ } from 'antd';
import { useLanguageHeader } from '../../utils/translations/i18n';
// import { Option } from 'antd/es/mentions';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

const { Header } = Layout;

const HeaderView: React.FC = () => {
    // const lang = localStorage.getItem('language');

    // useEffect(() => {
    //     if (lang) {
    //         setLanguage(lang as 'es' | 'en');
    //     }
    // }, []);

    const { /*language, setLanguage,*/ t } = useLanguageHeader();

    // const handleLanguageChange = (value: string) => {
    //     setLanguage(value as 'es' | 'en');
    // };

    const navigate = useNavigate();

    return (
        <Header style={{ padding: 0, background: 'white', borderRadius: 8 }}>
            <div style={{ display: 'flex', background: 'white', borderRadius: 8 }}>
                <Menu theme="light" mode="horizontal" style={{ width: '100%', height: '50px', borderRadius: 8 }} >
                    <div style={{ width: '85%', borderRadius: 8 }}>
                        <h1 style={{ color: 'black', margin: '0 0 0 20px', padding: 0 }}>{t('H1')}</h1>
                    </div>

                    <div style={{ width: '25%' }}>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ width: '20%', height: '50px', borderRadius: '0 8px 0 0', position: 'absolute', justifyContent: 'end' }} >
                            <Menu.Item key="1">{t('H2')}</Menu.Item>
                            <Menu.Item key="2">{t('H3')}</Menu.Item>
                            <Menu.Item key="3" onClick={() => navigate('/')}>
                                {t('H4')}
                            </Menu.Item>
                        </Menu>
                    </div>

                    {/* <div style={{ width: '13%' }}>
                        <Select
                        defaultValue={language}
                        style={{ width: 90, margin: '0' }}
                        onChange={handleLanguageChange}
                        >
                        <Option value="es">Español</Option>
                        <Option value="en">English</Option>
                        </Select>
                    </div> */}
                </Menu>
            </div>
        </Header>
    );
};

export default HeaderView;
