import React, { useState } from "react";
import AwsomeModal from "react-awesome-modal";
import { Container } from "./styles";

function Modal({ show, children, onOpen, onClose, width, height, effect }) {
    const [visible, setVisible] = useState(show);

    function openModal() {
        setVisible(true);
        if (onOpen) {
            onOpen();
        }
    }
    function closeModal() {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    }

    return (
        <AwsomeModal
            visible={visible}
            width={width || "30%"}
            height={height || "30%"}
            effect={effect || "fadeInUp"}
            onClickAway={() => closeModal()}
        >
            {children}
        </AwsomeModal>
    );
}

export default Modal;
