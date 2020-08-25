import styled, { css } from "styled-components";

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 1 0 320px;
    opacity: ${(props) => (props.done ? 0.6 : 1)};
    overflow-y: scroll;
    margin-right: 5px;
    margin-left: 5px;

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
    &::-webkit-scrollbar {
        width: 6px;
        /* background-color: rgba(0, 0, 0, 0.1); */
    }
    &::-webkit-scrollbar-thumb {
        width: 6px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    ul {
        height: calc(100% - 80px);
        flex: 1;
        flex-direction: column;
        display: flex;
        margin-top: 30px;
    }

    ${(props) =>
        props.isDragging &&
        css`
            border: 2px dashed rgba(0, 0, 0, 0.2) !important;
            padding-top: 31px;
            border-radius: 5px;

            background: transparent;
            box-shadow: none;
            cursor: grabbing;

            ul,
            div,
            header {
                opacity: 0;
            }
        `}
`;

export const HeaderList = styled.header`
    display: flex;
    flex: 1;

    align-items: center;
    max-width: 90%;
    height: 42px;
    border: ${(props) => !props.readOnly && "2px dashed rgb(0, 0, 0, 0.2)"};
    padding: 0px 10px;
`;
export const Input = styled.input`
    background: transparent;

    display: flex;
    flex: 1;

    height: 100%;

    font-weight: 700;
    font-size: 19px;

    border: 0;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-wrap: break-word;
    word-break: break-all;
    /* height: 80px; */
`;

export const Actions = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;
export const ActionsInvisible = styled.div`
    display: flex;

    opacity: ${(props) => (props.show ? 1 : 0)};
    /* width: ${(props) => (props.show ? 50 : 0)}px; */
    /* visibility: hidden; */
    /* width: 0; */
    transition: opacity 0.3s;
`;
