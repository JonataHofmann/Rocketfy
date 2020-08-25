import styled from "styled-components";

export const Container = styled.div`
    /* display: flex; */
    /* flex: 1; */

    /* flex-direction: row; */
    /* overflow: scroll; */
`;

export const ContainerList = styled.div`
    display: flex;
    padding: 30px 0;
    height: calc(100% - 80px);
    width: 100%;
    overflow: scroll;

    &::-webkit-scrollbar {
        width: 6px;
        /* background-color: rgba(0, 0, 0, 0.1); */
    }
    &::-webkit-scrollbar-thumb {
        width: 6px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
`;

export const NewList = styled.div`
    display: flex;
    /* flex: 1 1; */
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    border: 2px dashed rgb(0, 0, 0, 0.2) !important;

    border-radius: 5px;
    cursor: pointer;
    transition: opacity 0.2s;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
    /* overflow-y: scroll; */
    /* margin-right: 2px; */
`;

export const LabelCreate = styled.span`
    color: rgb(0, 0, 0, 0.2);
    font-size: 18px;
    font-weight: 700;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;
