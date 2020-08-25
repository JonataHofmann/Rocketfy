import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 203, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: grab;

    header {
        position: absolute;
        top: -10px;
        left: 15px;
    }
    p {
        font-weight: 500;
        line-height: 20px;
    }
    img {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        margin-top: 5px;
    }
    ${(props) =>
        props.isDragging &&
        css`
            border: 2px dashed rgba(0, 0, 0, 0.2);
            padding-top: 31px;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            cursor: grabbing;

            p,
            img,
            header {
                opacity: 0;
            }
        `}
`;
export const Label = styled.span`
    /* width: 15px; */
    min-width: 15px;
    height: 16px;
    font-size: 10px;
    color: #fff;
    border-radius: 2px;
    display: inline-block;
    padding: 2px 3px;
    background: ${(props) => props.color};

    & + span {
        margin-left: 3px;
    }
`;

export const LabelCreate = styled.span`
    color: rgb(0, 0, 0, 0.2);
    font-size: 18px;
    font-weight: 700;
`;

export const LastCard = styled.div`
    position: relative;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 2px dashed rgb(0, 0, 0, 0.2);
    transition: opacity 0.2s;
    opacity: 0;
    &:hover {
        opacity: 1;
    }

    cursor: pointer;
`;
