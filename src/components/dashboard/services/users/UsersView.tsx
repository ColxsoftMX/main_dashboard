import { Row, Tabs } from "antd";
import HeaderView from "../../../global/Header";
import { useLanguageUsers } from "../../../../utils/translations/i18n";
import { useState } from "react";
import CreateUser from "./tabs/CreateUser";
import ManageUsers from "./tabs/ManageUsers";

const UsersView: React.FC = () => {
    const { t } = useLanguageUsers();
    const [activeTabKey, setActiveTabKey] = useState<string>("1");

    const handleTabChange = (key: string) => {
        setActiveTabKey(key);
    };

    const usrs = [
            {
                "id_user": "1",
                "token": "862f98b8c9eb325f554d3eb277ef56b4OTE=",
                "token_expire": "2024-04-10",
                "name_user": "Angel Salvador [Admin]",
                "email_user": "angel@gmail.com",
                "type_user": "1",
                "active": "0"
            },
            {
                "id_user": "2",
                "token": "6ac6a55b95b5434a6f5a7d36231665c7OTI=",
                "token_expire": "2023-06-01",
                "name_user": "Cinthya",
                "email_user": "cinthya@gmail.com",
                "type_user": "2",
                "active": "0"
            },
            {
                "id_user": "3",
                "token": "333ab551d2d2845f77ceca91af10e953OTI=",
                "token_expire": "2023-05-27",
                "name_user": "David",
                "email_user": "David@gamil.com",
                "type_user": "2",
                "active": "0"
            },
            {
                "id_user": "4",
                "token": "1dc79a78c24cd246054683552c6ed1daOTI=",
                "token_expire": "2025-06-01",
                "name_user": "David",
                "email_user": "gdhgfhgfdb@gmail.com",
                "type_user": "2",
                "active": "0"
            },
            {
                "id_user": "5",
                "token": "786f68a97c833fe5d1c6ca1db0f8d91aOTI=",
                "token_expire": "2023-12-30",
                "name_user": "Pablo",
                "email_user": "pablo@gmail.com",
                "type_user": "2",
                "active": "0"
            },
            {
                "id_user": "6",
                "token": "a2592bc6eae1096021c41089a19eeda6OTE=",
                "token_expire": "2023-12-31",
                "name_user": "Jazmin",
                "email_user": "jaz@colxsoft.com",
                "type_user": "1",
                "active": "0"
            },
            {
                "id_user": "7",
                "token": "02cc73ac72456ae76b5c1304ec9f5f75OTI=",
                "token_expire": "2024-02-27",
                "name_user": "fas",
                "email_user": "daw",
                "type_user": "2",
                "active": "0"
            },
        ]

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
                    style={{ margin: '0 0 0 20px', height: '100%', width: '85%' }}
                    activeKey={activeTabKey}
                    onChange={handleTabChange}
                >
                    <Tabs.TabPane tab={t('UTab1')} key="1">
                        <Row justify="center" gutter={[16, 16]}>
                            <CreateUser />
                        </Row>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab={t('UTab2')} key="2">
                        <Row justify="center" gutter={[16, 16]}>
                            <ManageUsers users={usrs} />
                        </Row>
                    </Tabs.TabPane>
                </Tabs>
            </Row>
        </div>
    );
}

export default UsersView;
