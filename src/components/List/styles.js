import styled from "styled-components";

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 1 0 320px;
    opacity: ${(props) => (props.done ? 0.6 : 1)};
    overflow-y: scroll;
    /* margin-right: 2px; */

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
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button {
            width: 42px;
            height: 42px;
            border-radius: 18px;
            background: #3b5bfd;
            border: 0;
            cursor: pointer;
        }
    }
    ul {
        height: calc(100% - 80px);
        flex: 1;
        flex-direction: column;
        display: flex;
        margin-top: 30px;
    }
`;
