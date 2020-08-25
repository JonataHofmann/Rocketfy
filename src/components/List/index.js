import React, { useContext, useState } from "react";
import Card from "../Card";

import BoardContext from "../Board/context";
import { MdCheck } from "react-icons/md";
import { Container, Input, HeaderList } from "./styles";

function List({ data, index: listIndex }) {
    const { changeListName } = useContext(BoardContext);

    const [name, setName] = useState(data.title || "");
    const [isNameReadonly, setIsNameReadonly] = useState(true);

    function handleChangeName(e) {
        console.log(e.target.value);
        setName(e.target.value);
    }

    function hanldeConfirmChangeName(e) {
        changeListName(listIndex, name);
        setIsNameReadonly(true);
    }

    return (
        <>
            <Container done={data.done}>
                <HeaderList readOnly={isNameReadonly}>
                    <Input
                        type="text"
                        value={name}
                        onChange={handleChangeName}
                        readOnly={isNameReadonly}
                        onBlur={hanldeConfirmChangeName}
                        onKeyPress={(event) =>
                            event.key === "Enter" &&
                            hanldeConfirmChangeName(event)
                        }
                        onClick={(e) => setIsNameReadonly(false)}
                    />
                    {!isNameReadonly && (
                        <MdCheck
                            style={{ cursor: "pointer" }}
                            size={24}
                            color="#00000033"
                            onClick={hanldeConfirmChangeName}
                        />
                    )}
                </HeaderList>

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
        </>
    );
}

export default List;
