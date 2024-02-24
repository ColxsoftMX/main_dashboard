import React, { useState } from 'react';
import { Avatar, Tag, Modal, Input, DatePicker, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/es';

interface User {
    id_user: string;
    token: string;
    token_expire: string;
    name_user: string;
    email_user: string;
    type_user: string;
    active: string;
}

interface ManageUsersProps {
    users: User[];
}

const ManageUsers: React.FC<ManageUsersProps> = ({ users }) => {
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff33a1', '#33a1ff', '#a1ff33', '#ff3333', '#3333ff', '#33ffaa', '#aa33ff'];

    const getNextColor = (index: number) => colors[index % colors.length];

    const isUserDeactivated = (expireDate: string) => {
        const currentDate = new Date();
        const expirationDate = new Date(expireDate);
        return currentDate > expirationDate;
    };

    const [editUserData, setEditUserData] = useState<User | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleEdit = (user: User) => {
        setEditUserData(user);
        showModal();
    };

    const handleSave = () => {
        // Lógica para guardar los cambios (puedes implementar según tus necesidades)
        hideModal();
    };

    const handleCancel = () => {
        hideModal();
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        setEditUserData(null);
    };

    return (
        <div>
            <h1>Manage Users</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {users.map((user, index) => (
                    <div key={user.id_user} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Avatar
                            size={64}
                            style={{ backgroundColor: getNextColor(index), marginRight: '8px' }}
                        >
                            {user.name_user.split(' ')[0][0].toUpperCase()}
                        </Avatar>
                        <div>
                            <strong>{user.name_user}</strong>
                            {isUserDeactivated(user.token_expire) && <Tag color="red" style={{ marginLeft: '8px' }}>Desactivado</Tag>}
                            <div style={{ color: '#777', marginTop: '4px' }}>
                                Token: {user.token}
                            </div>
                            <Button
                                type="primary"
                                icon={<EditOutlined />}
                                onClick={() => handleEdit(user)}
                                style={{ marginTop: '8px' }}
                            >
                                Editar
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                title="Editar Usuario"
                visible={isModalVisible}
                onOk={handleSave}
                onCancel={handleCancel}
            >
                {editUserData && (
                    <div>
                        <strong>Nombre:</strong>
                        <Input value={editUserData.name_user} />

                        <strong>Email:</strong>
                        <Input value={editUserData.email_user} />

                        <strong>Fecha de vencimiento:</strong>
                        <DatePicker value={moment(editUserData.token_expire)} />
                    </div>
                )}

                <Button type="default" onClick={handleCancel}>
                    Cancelar
                </Button>

                <Button type="primary" onClick={handleSave}>
                    Guardar
                </Button>

            </Modal>
        </div>
    );
};

export default ManageUsers;
