import { Row, Tabs } from "antd";
import HeaderView from "../../../global/Header";
import { useLanguageUsers } from "../../../../utils/translations/i18n";
import { useState } from "react";
import CreateUser from "./tabs/CreateUser";

const UsersView: React.FC = () => {
    const { t } = useLanguageUsers();
    const [activeTabKey, setActiveTabKey] = useState<string>("1");

    const handleTabChange = (key: string) => {
        setActiveTabKey(key);
    };

    return (
        <div
            style={{
                height: '100%',
                background: '#fff',
                borderRadius: 8,
            }}
        >
            <HeaderView activeTab={t('U1')} />

            <Row style={{ margin: '0 0 0 30px', height: '60px' }}>
                <h1 style={{ margin: '10px 20px' }}>{t('U1')}</h1>
            </Row>

            <Row style={{ margin: '0 0 0 60px', height: '100%' }}>
                <Tabs
                    style={{ margin: '0 0 0 20px', height: '100%', width: '85%'}}
                    activeKey={activeTabKey}
                    onChange={handleTabChange}
                >
                    <Tabs.TabPane tab={t('UTab1')} key="1">
                        <Row justify="center" gutter={[16, 16]}>
                            <CreateUser />
                        </Row>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab={t('UTab2')} key="2">
                        <h1 style={{ margin: '0 20px' }}>TAB2</h1>
                    </Tabs.TabPane>
                </Tabs>
            </Row>
        </div>
    );
}

export default UsersView;
