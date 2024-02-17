import { Row } from "antd";
import HeaderView from "../global/header/Header";
import { useLanguageDashboard } from "../../utils/translations/i18n.js";
import DashboardCards from "./Cards.js";
import dashboardImage from './prueba.jpg';

const Dashboard: React.FC = () => {
    const { t } = useLanguageDashboard();

    const data = [
        {
            nombre: 'Dashboard 1',
            imagen: dashboardImage,
            path: '/app/invitaciones/',
        },
        {
            nombre: 'Dashboard 2',
            imagen: dashboardImage,
            path: '/app/dashboard/',
        },
    ];

    return (
        <div
            style={{
                height: '100%',
                background: '#fff',
                borderRadius: 8,
            }}
        >
            <HeaderView />
            <Row style={{ margin: '0 0 0 20px' }}>
                <h1>{t('D1')}</h1>
            </Row>

            {data.length > 0 ? (
                <DashboardCards data={data} />
                ) : null}
        </div>
    );

}

export default Dashboard;