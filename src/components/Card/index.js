import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Container, LastCard, Label } from "./styles";
import BoardContext from "../Board/context";

function Card({ data, index, listIndex, isLast }) {
    const ref = useRef();
    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: "CARD", index, listIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: "CARD",
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if (
                draggedIndex === targetIndex &&
                draggedListIndex === targetListIndex
            ) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        },
    });
    dragRef(dropRef(ref));
    return data ? (
        <Container ref={ref} isDragging={isDragging} isLast={isLast}>
            <>
                <header>
                    {data.labels.map((label) => (
                        <Label key={label.color} color={label.color}>
                            {label.title}
                        </Label>
                    ))}
                </header>
                <p>{data.content}</p>
                {data.user && <img src={data.user} alt="" />}
            </>
        </Container>
    ) : (
        <LastCard>teste</LastCard>
    );
}

export default Card;
