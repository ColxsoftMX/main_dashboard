import { Row } from "antd";
import HeaderView from "../../../../global/Header";


const ManageUsers: React.FC = () => {

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
                <h1 style={{ margin: '10px 20px' }}>Manage Users</h1>
            </Row>
        </div>
    );
}

export default ManageUsers;