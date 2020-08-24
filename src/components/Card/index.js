import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Container, LastCard, Label, LabelCreate } from "./styles";
import BoardContext from "../Board/context";

function Card({ data, index, listIndex, isEmptyArea }) {
    const ref = useRef();
    const { move, add } = useContext(BoardContext);

    function handleAdd() {
        const newItem = {
            id: 999,
            content: "novo item",
            labels: [{ color: "#7159c1", title: "Label 1" }],
            user:
                "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        };
        add(newItem, listIndex);
    }

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: "CARD", index, listIndex, isEmptyArea },
        canDrag: (monitor) => {
            return !isEmptyArea;
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: "CARD",
        async drop(item, monitor) {
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
            let targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (
                draggedIndex < targetIndex &&
                draggedTop < targetCenter &&
                draggedListIndex === targetListIndex
            ) {
                return;
            }

            if (
                draggedIndex > targetIndex &&
                draggedTop > targetCenter &&
                draggedListIndex === targetListIndex
            ) {
                return;
            }

            await move(
                draggedListIndex,
                targetListIndex,
                draggedIndex,
                targetIndex
            );

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        },
    });
    dragRef(dropRef(ref));

    return !isEmptyArea ? (
        <Container ref={ref} isDragging={isDragging}>
            {data && (
                <>
                    <header>
                        {data.labels &&
                            data.labels.map((label) => (
                                <Label key={label.color} color={label.color}>
                                    {label.title}
                                </Label>
                            ))}
                    </header>
                    <p>{data.content}</p>
                    {data.user && <img src={data.user} alt="" />}
                </>
            )}
        </Container>
    ) : (
        <LastCard ref={ref} isDragging={isDragging} onClick={handleAdd}>
            <LabelCreate>Adicionar</LabelCreate>
        </LastCard>
    );
}

export default Card;
