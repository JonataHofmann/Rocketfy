import React from "react";
import { Modal, Overlay } from "./styles";

function modal({ isOpened, children }) {
    // const [isModalOpened, setIsModalOpened] = useState(isOpened);

    return (
        isOpened && (
            <Overlay
                onClick={(e) => {
                    // setIsModalOpened(false);
                }}
            >
                <Modal>{children}</Modal>
            </Overlay>
        )
    );
}

export default modal;
