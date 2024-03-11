import { Modal } from "antd";

const ErrorModal = ({ error, onClose }: { error: string, onClose: () => void }) => {
    return (
        <Modal
            title="Error"
            visible={true}
            onOk={onClose}
            onCancel={onClose}
        >
            <p>{error}</p>
        </Modal>
    );
};

export default ErrorModal;