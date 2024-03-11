import { Row } from "antd";
import HeaderView from "../global/Header.js";
import { useLanguageDashboard, useLanguageHeader } from "../../utils/translations/i18n.js";
import DashboardCards from "./Cards.js";
import dashboardImage from './imgs/prueba.jpg';
import mesa from './imgs/mesas.jpg';
import inventario from './imgs/inventario.jpg';
import invitaciones from './imgs/invitaciones.jpg';
import usuarios from './imgs/usuarios.png';
// import { useEffect } from "react";
// import { validateToken } from "../../utils/Functions.js";

const Dashboard: React.FC = () => {
    //TOKEN
    // const token = localStorage.getItem('token');

    // TRANSLATIONS
    const { t: tHeader } = useLanguageHeader();
    const { t: tDashboard } = useLanguageDashboard();

    const data = [
        {
            nombre: 'Dashboard 1',
            imagen: dashboardImage,
            path: 'invitations/',
            descripcion: 'Dashboard de prueba',
        },
        {
            nombre: 'Gestión de mesas',
            imagen: mesa,
            path: 'invitations/',
            descripcion: 'Gestión de mesas',
        },
        {
            nombre: 'Usuarios',
            imagen: usuarios,
            path: 'users/',
            descripcion: 'Control de usuarios',
        },
        {
            nombre: 'Inventario',
            imagen: inventario,
            path: 'invitations/',
            descripcion: 'Inventario de productos',
        },
        {
            nombre: 'Dashboard 3',
            imagen: dashboardImage,
            path: 'invitations/',
            descripcion: 'Dashboard de prueba',
        },
        {
            nombre: 'Invitaciones',
            imagen: invitaciones,
            path: 'invitations/',
            descripcion: 'Gestión de invitaciones',
        },
        {
            nombre: 'Dashboard 4',
            imagen: dashboardImage,
            path: 'invitations/',
            descripcion: 'Dashboard de prueba',
        },

    ];

    // useEffect(() => {
    //     if (token) {
    //         console.log(validateToken(token));
    //     }
    //     // eslint-disable-next-line
    // }, []);

    return (
        <div
            style={{
                height: '100%',
                background: '#fff',
                borderRadius: 8,
            }}
        >
            <HeaderView activeTab={tHeader('H2')} />
            <Row style={{ margin: '0 0 0 30px', height: '60px' }}>
                <h1 style={{ margin: '10px 20px' }}>{tDashboard('D1')}</h1>
            </Row>

            {data.length > 0 ? (
                <DashboardCards data={data} />
            ) : null}
        </div>
    );

}

export default Dashboard;