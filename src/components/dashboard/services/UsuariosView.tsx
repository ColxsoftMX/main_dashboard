import { Row } from "antd";
import HeaderView from "../../global/Header";
import { useLanguageUsers } from "../../../utils/translations/i18n";

const UsuariosView: React.FC = () => {

    const { t } = useLanguageUsers();

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
        </div>
    );
}

export default UsuariosView;