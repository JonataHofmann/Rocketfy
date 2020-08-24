import React, { useState } from "react";
import produce from "immer";

import { loadLists } from "../../services/api";
import List from "../List";
import { Container } from "./styles";
import BoardContext from "./context";

const data = loadLists();

function Board() {
    const [lists, setLists] = useState(data);

    async function move(fromList, toList, from, to) {
        setLists(
            produce(lists, (draft) => {
                const dragged = draft[fromList].cards[from];

                draft[fromList].cards.splice(from, 1);

                draft[toList].cards.splice(to, 0, dragged);
            })
        );
    }

    async function add(item, fromList) {
        setLists(
            produce(lists, (draft) => {
                draft[fromList].cards.push(item);
            })
        );
    }

    return (
        <BoardContext.Provider value={{ lists, move, add }}>
            <Container>
                {lists.map((item, index) => (
                    <List key={item.title} index={index} data={item} />
                ))}
            </Container>
        </BoardContext.Provider>
    );
}

export default Board;
