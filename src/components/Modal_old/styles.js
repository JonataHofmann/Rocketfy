import styled from "styled-components";

export const Overlay = styled.div`
    z-index: 500;
    position: absolute;
    width: 100%;
    background: #0005;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

export const Modal = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;

    /* @media (min-width: 600px) {
        .Modal {
            width: 500px;
            left: calc(50% - 250px);
        }
    } */
`;
