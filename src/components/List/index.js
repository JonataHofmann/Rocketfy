import React, { useContext, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Card from "../Card";

import BoardContext from "../Board/context";
import { MdMoreVert, MdDelete, MdEdit } from "react-icons/md";
import {
    Container,
    HeaderContainer,
    Input,
    HeaderList,
    Actions,
    ActionsInvisible,
} from "./styles";
import DropDown from "../DropDown/index";

function List({ data, index: listIndex }) {
    const ref = useRef();

    const { changeListName, deleteList, moveList } = useContext(BoardContext);
    const [name, setName] = useState(data.title || "");
    const [isNameReadonly, setIsNameReadonly] = useState(true);
    const [isActionsVisible, setIsActionsVisible] = useState(false);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: "LIST", listIndex, isNameReadonly },
        canDrag: (monitor) => {
            return isNameReadonly;
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const [, dropRef] = useDrop({
        accept: "LIST",
        async drop(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            if (draggedListIndex === targetListIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.right - targetSize.left) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedLeft = draggedOffset.x - targetSize.left;

            if (
                draggedListIndex < targetListIndex &&
                draggedLeft < targetCenter
            ) {
                return;
            }

            if (
                draggedListIndex > targetListIndex &&
                draggedLeft > targetCenter
            ) {
                return;
            }

            await moveList(draggedListIndex, targetListIndex);

            item.index = targetListIndex;
        },
    });

    function handleChangeName(e) {
        console.log(e.target.value);
        setName(e.target.value);
    }

    function hanldeConfirmChangeName(e) {
        changeListName(listIndex, name);
        setIsNameReadonly(true);
    }

    function handleDeleteList() {
        setIsActionsVisible(!isActionsVisible);
        deleteList(listIndex);
    }

    dragRef(dropRef(ref));
    return (
        <Container ref={ref} done={data.done} isDragging={isDragging}>
            <HeaderContainer>
                <HeaderList
                    readOnly={isNameReadonly}
                    withActions={isActionsVisible}
                >
                    <Input
                        type="text"
                        value={name}
                        size={15}
                        onChange={handleChangeName}
                        readOnly={isNameReadonly}
                        onBlur={hanldeConfirmChangeName}
                        onKeyPress={(event) =>
                            event.key === "Enter" &&
                            hanldeConfirmChangeName(event)
                        }
                        onClick={(e) => setIsNameReadonly(false)}
                    />
                </HeaderList>
                <Actions>
                    <ActionsInvisible show={isActionsVisible}>
                        {/* <MdEdit
                            style={{ cursor: "pointer" }}
                            size={24}
                            color="#00000033"
                            onClick={hanldeConfirmChangeName}
                        /> */}
                        <MdDelete
                            style={{ cursor: "pointer" }}
                            size={24}
                            color="#00000033"
                            onClick={handleDeleteList}
                        />
                    </ActionsInvisible>

                    <MdMoreVert
                        style={{ cursor: "pointer" }}
                        size={24}
                        color="#00000033"
                        onClick={() => setIsActionsVisible(!isActionsVisible)}
                    />
                </Actions>
            </HeaderContainer>

            <ul>
                {data.cards.map((card, index) => (
                    <Card
                        key={index}
                        index={index}
                        listIndex={listIndex}
                        data={card}
                        isEmptyArea={false}
                    />
                ))}
                <Card
                    index={data.cards.length}
                    listIndex={listIndex}
                    isEmptyArea
                />
            </ul>
        </Container>
    );
}

export default List;
