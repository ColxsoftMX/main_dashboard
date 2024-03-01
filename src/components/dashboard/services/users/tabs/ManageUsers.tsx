import React, { useState } from 'react';
import { Avatar, Tag, Modal, Input, DatePicker, Button, Row, Col } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';

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
    // PANEL DE USUARIOS
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff33a1', '#33a1ff', '#a1ff33', '#ff3333', '#3333ff', '#33ffaa', '#aa33ff'];

    const getNextColor = (index: number) => colors[index % colors.length];

    const isUserDeactivated = (expireDate: string) => {
        const currentDate = new Date();
        const expirationDate = new Date(expireDate);
        return currentDate > expirationDate;
    };

    // EDITAR USUARIO
    const [selectedUserData, setSelectedUserData] = useState<User | null>(null);
    const [isEditarVisible, setIsModalVisible] = useState<boolean>(false);

    const [nameEdit, setNameEdit] = useState<string>('');
    const [emailEdit, setEmailEdit] = useState<string>('');
    const [tokenExpireEdit, setTokenExpireEdit] = useState<string>('');

    const handleEdit = (user: User) => {
        setSelectedUserData(user);

        setNameEdit(user.name_user);
        setEmailEdit(user.email_user);
        setTokenExpireEdit(user.token_expire);
        console.log(user.token_expire)

        showEditModal();
    };

    const handleEditName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameEdit(e.target.value);
    };

    const handleEditEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailEdit(e.target.value);
    };

    const handleEditTokenExpire = (date: Dayjs | null) => {
        if (date) {
            setTokenExpireEdit(date.format('YYYY-MM-DD'));
        }
    }

    const handleCancelEdit = () => {
        hideEditModal();
    };

    const showEditModal = () => {
        setIsModalVisible(true);
    };

    const hideEditModal = () => {
        setIsModalVisible(false);
        setSelectedUserData(null);
    };

    const handleSaveEdit = () => {

        const post = {
            id_user: selectedUserData?.id_user,
            token: selectedUserData?.token,

            token_expire: tokenExpireEdit,
            name_user: nameEdit,
            email_user: emailEdit,

            type_user: selectedUserData?.type_user,
            active: selectedUserData?.active,
        };

        console.log(post);

        hideEditModal();
    };

    const footerCustomEdit = (
        <>
            <Button type="default" onClick={handleCancelEdit}>
                Cancelar
            </Button>

            <Button type="primary" onClick={handleSaveEdit}>
                Guardar
            </Button>
        </>
    );

    // ELIMINAR USUARIO
    const [isEliminarVisible, setIsEliminarVisible] = useState<boolean>(false);

    const showDeleteModal = (user: User) => {
        setSelectedUserData(user);

        setIsEliminarVisible(true);
    };

    const hideDeleteModal = () => {
        setIsEliminarVisible(false);
    };

    const handleDelete = () => {
        console.log(selectedUserData?.id_user);
        hideDeleteModal();
    };

    const footerCustomDelete = (
        <>
            <Button type="default" onClick={hideDeleteModal}>
                Cancelar
            </Button>

            <Button type="primary" onClick={handleDelete}>
                Guardar
            </Button>
        </>
    );

    return (
        <div style={{ width: '100%' }}>
            <h1 className='m-0'>Manage Users</h1>
            {users.map((user, index) => (
                <Row key={user.id_user} className='my-15 ms-15'>
                    <Col sm={12} md={3} lg={3}>
                        <Avatar
                            size={64}
                            style={{ backgroundColor: getNextColor(index), marginRight: '8px' }}
                        >
                            {user.name_user.split(' ')[0][0].toUpperCase()}
                        </Avatar>
                    </Col>

                    <Col sm={12} md={17} lg={17}>
                        <div>
                            <strong>{user.name_user}</strong>
                            {isUserDeactivated(user.token_expire) && <Tag color="red" style={{ marginLeft: '8px' }}>Desactivado</Tag>}
                            <div style={{ color: '#777', marginTop: '4px' }}>
                                Token: {user.token}
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} md={4} lg={4} style={{ textAlign: 'end' }}>
                        <Button
                            type="text"
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(user)}
                            style={{ marginTop: '20px' }}
                            shape='circle'
                        />

                        <Button
                            type="text"
                            icon={<DeleteOutlined />}
                            onClick={() => showDeleteModal(user)}
                            style={{ marginTop: '20px' }}
                            shape='circle'
                        />
                    </Col>
                </Row>
            ))}
            <Modal
                title="Editar Usuario"
                visible={isEditarVisible}
                footer={footerCustomEdit}
                onCancel={hideEditModal}
            >
                <div>
                    <Row>
                        <strong>Nombre</strong>
                        <Input value={nameEdit} onChange={handleEditName} />
                    </Row>

                    <Row style={{ marginTop: '15px', marginBottom: '15px' }}>
                        <strong>Email</strong>
                        <Input value={emailEdit} onChange={handleEditEmail} />
                    </Row>

                    <Row>
                        <strong>Fecha de vencimiento</strong>
                    </Row>

                    <Row>
                        <DatePicker 
                        style={{ width: '100%' }}
                        value={dayjs(tokenExpireEdit)}
                            onChange={handleEditTokenExpire}
                        />
                    </Row>
                </div>
            </Modal>

            <Modal
                title="Eliminar usuario"
                visible={isEliminarVisible}
                footer={footerCustomDelete}
                onCancel={hideEditModal}
            >
                <Row>
                    <Col>
                    <p>{`¿Está seguro que desea eliminar al usuario ${selectedUserData?.name_user}?`}</p>
                    </Col>
                </Row>
            </Modal>

        </div >
    );
};

export default ManageUsers;
