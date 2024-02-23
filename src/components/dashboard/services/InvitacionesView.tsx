import { Row } from "antd";
import HeaderView from "../../global/Header";
import { useLanguageInvitations } from "../../../utils/translations/i18n";

const InvitacionesView: React.FC = () => {

    const { t } = useLanguageInvitations();

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
                <h1 style={{ margin: '10px 20px' }}>{t('I1')}</h1>
            </Row>
        </div>
    );
}

export default InvitacionesView;