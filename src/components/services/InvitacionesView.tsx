import { Row } from "antd";
import HeaderView from "../global/header/Header";

const InvitacionesView: React.FC = () => {

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
                <h1>Invitaciones</h1>
            </Row>
        </div>
    );
}

export default InvitacionesView;